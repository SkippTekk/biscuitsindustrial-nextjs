import { PrismaClient } from "@prisma/evedump/index";
import { NextResponse } from "next/server";

export async function GET(req, { params: { ship } }) {
  const prisma = new PrismaClient();

  try {
    const shipData = await prisma.$queryRaw`
    SELECT it.*
    FROM invTypes it
    JOIN invGroups ig ON ig.groupID = it.groupID
    JOIN invMarketGroups img ON img.marketGroupID = it.marketGroupID
    WHERE it.typeName = ${ship};
    `;

    const shipMaterial = await prisma.$queryRaw`
    SELECT m.materialTypeID, m.quantity, i2.typeName, m.activityID
    FROM industryActivityMaterials m
    INNER JOIN invTypes i1 ON i1.typeID = m.typeID
    INNER JOIN invTypes i2 ON i2.typeID = m.materialtypeID
    INNER JOIN ramActivities i3 ON i3.activityID = m.activityID = 1
    WHERE i1.typeName like ${"%" + ship + " Blueprint%"}
    AND m.activityID = 1 ORDER BY m.materialTypeID ASC;
    `;

    await prisma.$disconnect();

    if (shipData && shipMaterial) {
      return new NextResponse(
        JSON.stringify({ ship: shipData, material: shipMaterial })
      );
    }
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ msg: "ship/nodata", status: 500 })
    );
  }
}
