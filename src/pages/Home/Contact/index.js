import React from 'react'

import styles from './Contact.module.scss';
import { getImg } from '../../../utils/Helper';
import Icons from '../../../components/Icons';

const Contact = () => {
    return (
        <div className={styles.div}>
            <p className={styles.title}>Join the Chumbi Community</p>
            <div className={styles.join}>
                <button className={styles.discord}><img src={getImg('icon/discord.png')} alt="icon" style={{ paddingRight: '15px' }} />Join Discord</button>
                <button className={styles.telegram}><img src={getImg('icon/telegram.png')} alt="icon" />Join Telegram</button>
            </div>
            <div className={styles.subscribe}>
                <input className={styles.email} type={'email'} placeholder='Email' />
                <button className={styles.btn}>Subscribe</button>
            </div>
            <div className={styles.icons} >
                <Icons />
            </div>
        </div>
    )
}

export default Contact;