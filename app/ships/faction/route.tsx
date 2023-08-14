import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();

  const users =
    await prisma.$queryRaw`select * from chrFactions where corporationID IN (1000084,1000035,1000120,1000051,1000129,1000127,1000162,1000134,1000138,1000135,1000130,1000128,1000298,1000297)`;
  await prisma.$disconnect();
  return NextResponse.json(users);
};
