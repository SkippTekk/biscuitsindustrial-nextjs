import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/biscuits/index";
import sendEmail from "@mailing/mailing";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  const params = await req.json();

  try {
    const userExits = await prisma.users.findFirst({
      where: { email: params.email },
    });

    if (userExits == null) {
      const userPassword = await bcrypt.hash(params.password, 10);

      //@ts-ignore
      const createUser = await prisma.users.create({
        data: {
          username: params.username,
          email: params.email,
          password: userPassword,
          verified: false,
        },
      });

      if (createUser !== null) {
        await prisma.$disconnect();

        /*

          Email verification logic here

        */

        return new NextResponse(
          JSON.stringify({ msg: "user/created", status: 201 })
        );
      } else {
        await prisma.$disconnect();
        return new NextResponse(
          JSON.stringify({ msg: "database/error", status: 500 })
        );
      }
    } else {
      await prisma.$disconnect();
      return new NextResponse(
        JSON.stringify({ msg: "user/exists", status: 502 })
      );
    }
  } catch (err) {
    await prisma.$disconnect();
    return new NextResponse(
      JSON.stringify({ msg: "server/connection", status: 500 })
    );
  }
}
