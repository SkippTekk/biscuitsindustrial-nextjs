"use client"
import { React, useState } from 'react'
import style from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PasswordChecklist from 'react-password-checklist'

const Login = () => {
    const [err, setErr] = useState(false);
    const router = useRouter();
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try {
            const res = await fetch('/api/auth/register/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username, email, password
                }),
            });
            if (res.status === 201) {
                router.push('/dashboard/login')
            } else {
                alert('Sorry, Username and/or email is already used!')
            }
        } catch (err) {
            console.log(err)
            setErr(true);
        }
    }
    return (
        <div className={style.container}>
            Sign up!
            <form className={style.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='username'
                    className={style.input}
                    minLength='4'
                    maxLength='20'
                    required
                />
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    className={style.input}
                    required
                />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{7,19}$'
                    className={style.input}
                    required
                    title='Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character '
                    onChange={e => setPassword(e.target.value)}
                />
                <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", 'maxLength']}
                    minLength={7}
                    maxLength={31}
                    value={password}
                    messages={{
                        minLength: "More then 8 characters",
                        specialChar: "You have at least 1 special character #?!@$ %^&*-",
                        number: "You have at least 1 number",
                        capital: "Capital letter was used.",
                        maxLength: "Under 32 characters",
                    }}
                />

                <button className={style.button}>Register</button>
            </form>
            {err && 'Sorry, Username and/or email is already taken!'}
            <Link href='/dashboard/login'>Got an account?</Link>

        </div>
    )

}

export default Login