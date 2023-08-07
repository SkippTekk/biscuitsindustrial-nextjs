import React from 'react'
import { PrismaClient } from '.prisma/client'
import { redirect } from 'next/navigation';



const Verify = async ({ params }) => {
    const prisma = new PrismaClient();

    const verify = await prisma.users.findFirst({ where: { verified: params.id } })
    if (verify === null) {
        await prisma.$disconnect()
        return (
            <div>Sorry, that URL is invalid, Please try again.</div>
        )

    } else {
        await prisma.users.update({ where: { id: verify.id }, data: { verified: 'true' } })
        await prisma.$disconnect()
        redirect('/dashboard/login')
    }
}

export default Verify;