import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/evedump/index";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const prisma = new PrismaClient();
  const slug = params.slug;

  const build =
    await prisma.$queryRaw`SELECT * FROM invTypes WHERE typeName  =${slug}`;
  await prisma.$disconnect();
  return NextResponse.json(build);
}
