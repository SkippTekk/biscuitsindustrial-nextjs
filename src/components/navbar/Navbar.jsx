"use client"
import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'
import image from 'public/BiscuityBotIcon.png'
import Image from 'next/image'
import DarkModeToggle from '../darkMode/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
    {
        id: 1,
        title: 'home',
        url: '/'
    },
    {
        id: 2,
        title: 'about',
        url: '/about'
    },
    {
        id: 3,
        title: 'dashboard',
        url: '/dashboard'
    }
]

const Navbar = () => {
    const session = useSession();


    return (

        <div className={style.container}>
            <Link href='/' className={style.logo}>
                <Image className={style.img} src={image} alt='Biscuity Bot Icon' />Biscuits Industrial
            </Link>
            <div className={style.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" ? (
                    <div className={style.links}>
                        <Link target='_blank' href={`https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=http://localhost:3000/api/auth/eveonline/callback&client_id=${process.env.EVEONLINE_CLIENT_ID}&scope=publicData esi-skills.read_skills.v1 esi-contracts.read_character_contracts.v1&state=${process.env.STATE}`} title='Connect your Eve Account'>Eve Connect</Link>
                        <button className={style.logout} onClick={signOut}>
                            Logout
                        </button>

                    </div>

                ) : (
                    <div className={style.links}>
                        <Link key={1} href='/dashboard/login' title='Login'>Login</Link>
                        /
                        <Link key={2} href='/dashboard/register' title='Register'>Register</Link>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar