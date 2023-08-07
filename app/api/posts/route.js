import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

export const GET = async (request) => {
    const prisma = new PrismaClient()

    const users = await prisma.users.findMany()
    await prisma.$disconnect();
    return NextResponse.json({ message: users })


};