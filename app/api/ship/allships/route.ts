import { PrismaClient } from "@prisma/biscuits/index";
import { NextResponse } from "next/server";

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const allShips = await prisma.$queryRaw`
    SELECT typename as 'ship'
    FROM EveShips
    WHERE faction IS NOT NULL
    ORDER BY typeName ASC;`;

    await prisma.$disconnect();

    return new NextResponse(JSON.stringify(allShips));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "ships/nodata", status: 500 })
    );
  }
}
