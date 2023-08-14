import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();

  const users =
    await prisma.$queryRaw`select * FROM invTypes JOIN invGroups ON invGroups.groupID=invTypes.groupID JOIN invMarketGroups ON invMarketGroups.marketGroupID = invTypes.marketGroupID and invGroups.categoryID = 6 AND invTypes.published  =1`;
  await prisma.$disconnect();
  return NextResponse.json(users);
};
