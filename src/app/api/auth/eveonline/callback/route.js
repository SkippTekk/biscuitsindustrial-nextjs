import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


export async function GET(req, { params }) {

  const prisma = new PrismaClient();
  const code = req.nextUrl.searchParams.get('code');
  if (!code) return new NextResponse('Invalid Request', { status: 400 });
  const token = await getToken({ req });


  if (!token || !token.user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const b64 = Buffer.from(`${process.env.EVEONLINE_CLIENT_ID}:${process.env.EVEONLINE_SECRET_KEY}`).toString('base64');
  fetch(`https://login.eveonline.com/v2/oauth/token`, {
    method: 'POST',
    body: `grant_type=authorization_code&code=${code}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Host": 'login.eveonline.com',
      "Authorization": `Basic ${b64}`
    }
  })
    .then((data) => data.json())
    .then(async (data) => {

      await prisma.accounts.upsert({
        where: {
          userID: token.user.id
        },
        update: {
          accessToken: data.access_token,
          refreshToken: data.refresh_token
        },
        create: {
          userID: token.user.id,
          characterID: null,
          characterName: null,
          accessToken: data.access_token,
          refreshToken: data.refresh_token
        }
      })
      await prisma.accounts.update({

      })
    })
    .catch((a, b) => {
      console.log(a, b);
    });
  return new NextResponse('Success! Your account is now linked with your Eve Character!');
}