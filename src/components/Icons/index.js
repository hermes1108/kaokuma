import React from 'react'

import styles from './icons.module.scss'
import { getImg } from '../../utils/Helper';

const Icons = () => {
    return (
        <div className={styles.div}>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/discord.png')} alt="icon" /></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/telegram.png')} alt="icon" /></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/twitter.png')} alt="icon" /></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/instagram.png')} alt="icon" /></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/facebook.png')} alt="icon" /></a>
            <a href="https://google.com" target="_blank" rel="noreferrer"><img src={getImg('icon/opensea.png')} alt="icon" /></a>
        </div>
    )
}
export default Icons;