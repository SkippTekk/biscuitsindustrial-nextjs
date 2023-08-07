import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                Biscuits Industrial. Proper Footer will be created at some point.
            </div>

            <div className={style.img}>
                <Image src="/BiscuityBotIcon.png" width={20} height={20} alt='Biscuits Industrial' />
                <Image src="/discord-mark-blue.svg" width={20} height={20} alt='Discord Link' />
            </div>

        </div>
    )
}

export default Footer