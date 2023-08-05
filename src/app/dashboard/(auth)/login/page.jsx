"use client"
import { React } from 'react'
import style from './page.module.css'
import Link from 'next/link'
import { signIn } from 'next-auth/react'


const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = e.target[0].value
        const password = e.target[1].value
        signIn('credentials', { username, password })
    }

    return (
        <div className={style.container}>
            Login :D
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    className={style.input}
                    required
                />
                <input
                    type='password'
                    placeholder='password'
                    className={style.input}
                    required
                />
                <button className={style.button}>Login</button>
            </form>
            <Link href='/dashboard/register'>Need an account?</Link>

        </div>
    )

}

export default Login