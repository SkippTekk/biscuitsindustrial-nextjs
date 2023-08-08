import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { PrismaClient } from "@prisma/client";
import sendEmail from "../../../../components/mail/mailing";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const prisma = new PrismaClient();

  const { username, email, password } = await request.json();

  let verified = crypto.randomBytes(32).toString("hex");

  const verifyEmail = `http://localhost:3000/verify/${verified}`;

  const hashPassword = await bcrypt.hash(password, 10);

  const userExist = await prisma.users.findFirst({
    where: { OR: [{ username }, { email }] },
  });

  if (userExist === null) {
    // Using a hex generated salt prevents hackers from figuring out the salt and cracking passwords
    await prisma.users.create({
      data: {
        username,
        email,
        hashPassword,
        verified,
        salt: "48D91CA0A3C74F00794EBA74BDA0A9C1",
      },
    });

    await sendEmail(
      email,
      "Biscuits Industrial Signup verification",
      verifyEmail
    );

    await prisma.$disconnect();

    return new NextResponse("Success!", { status: 200 });
  } else {
    await prisma.$disconnect();
    return new NextResponse("Sorry, username and or email already exists!", {
      status: 500,
    });
  }
};
