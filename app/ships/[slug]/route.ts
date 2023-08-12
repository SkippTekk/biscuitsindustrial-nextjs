import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/evedump/index"
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const prisma = new PrismaClient();
    const slug = params.slug + ' blueprint'

    const build = await prisma.$queryRaw`SELECT m.materialTypeID, m.quantity, i2.typeName, m.activityID FROM industryActivityMaterials m INNER JOIN invTypes i1 ON i1.typeID = m.typeID INNER JOIN invTypes i2 ON i2.typeID = m.materialtypeID INNER JOIN ramActivities i3 ON i3.activityID = m.activityID = 1 WHERE i1.typeName = ${slug} AND m.activityID = 1 ORDER BY m.materialTypeID ASC`
    prisma.$disconnect();
    return NextResponse.json(build)
}