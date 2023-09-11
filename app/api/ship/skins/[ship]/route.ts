import { PrismaClient } from "@prisma/evedump/index";
import { NextResponse } from "next/server";

export async function GET(req, { params: { ship } }) {
  const prisma = new PrismaClient();

  try {
    const skinData = await prisma.$queryRaw`
    SELECT it.*
    FROM invTypes it
    JOIN invGroups ig ON ig.groupID = it.groupID
    JOIN invMarketGroups img ON img.marketGroupID = it.marketGroupID
    WHERE it.typeName like ${ship + "%SKIN"};
    `;

    await prisma.$disconnect();

    if (skinData) {
      return new NextResponse(JSON.stringify(skinData));
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "ship/nodata", status: 500 })
    );
  }
}
