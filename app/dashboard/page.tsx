'use client'
import React, { useState, useEffect } from 'react'
import styles from './page.module.css';
import { useSession } from 'next-auth/react';

export default function Dashboard() {
    const { data: session } = useSession()

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

    })

    if (isLoading) return <p>Loading, please wait :)</p>
    if (!data) return <p>Sorry, no data was collected</p>


    return (

        <div className={styles.container}>Welcome {session?.user?.username}.</div>

    )
}