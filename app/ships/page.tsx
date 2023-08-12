'use client'
import React from 'react'
import Navbar from './navbar';
import style from './page.module.css'
import useSWR from 'swr'
import Image from 'next/image';
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Ships = () => {
    const { data: build, error, isLoading } = useSWR('/ships/orca', fetcher)
    // const { data: Details } = useSWR('/ships/orca', fetcher)

    if (error) return <div>Failed to load....</div>
    if (isLoading) return <div>Loading data....</div>
    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.details} >Ship Details</div>
            <div className={style.build}>
                Building Details
                <table>
                    <th>Components</th>
                    <th>Quantity</th>
                    <tr />
                    <thead />
                    <tbody>
                        {build.map(({ typeName, materialTypeID, quantity }) => {
                            return <td className={style.td}><Image key={1} src={`https://images.evetech.net/types/${materialTypeID}/icon`} width={35} height={35} alt={typeName} />{typeName} | {quantity}</td>
                        })}
                        {build.map(({ quantity }) => {
                            return <td className={style.td}>{quantity}</td>
                        })}
                        <tr />
                    </tbody>
                </table>

            </div>
            <div > Ship Information</div>
        </div >
    )
}

export default Ships