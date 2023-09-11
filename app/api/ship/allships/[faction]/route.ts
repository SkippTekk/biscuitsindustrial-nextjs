import { PrismaClient } from "@prisma/biscuits/index";
import { NextResponse } from "next/server";

export async function GET(req, { params: { faction } }) {
  const prisma = new PrismaClient();
  let shipsData;

  try {
    shipsData = await prisma.$queryRaw`
    SELECT * FROM biscuits.EveShips
    WHERE faction like ${"%" + faction + "%"};
    `;

    await prisma.$disconnect();

    BigInt.prototype.toJSON = () => String(this);

    return new NextResponse(JSON.stringify(shipsData));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "factions/nodata", status: 500 })
    );
  }
}
