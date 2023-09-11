import { PrismaClient } from "@prisma/biscuits/index";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const factions = await prisma.$queryRaw`
    SELECT * FROM biscuits.EveFactions
    `;

    await prisma.$disconnect();

    if (factions) {
      return new NextResponse(JSON.stringify(factions));
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "factions/nodata", status: 500 })
    );
  }
}
