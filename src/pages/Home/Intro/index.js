import React from 'react'

import styles from './Intro.module.scss';
import Icons from '../../../components/Icons';
import { getImg } from '../../../utils/Helper';

const Intro = () => {
    return (
        <div className={styles.div}>
            <div className={styles.container}>
                <img src={getImg('intro/koakuma.png')} alt='mark' className={styles.mark} /> <br />
                <button className={styles.btn}>NFT Sale Coming Soon</button>
                <div className={styles.icons}>
                    <Icons />
                </div>
            </div>
        </div>
    )
}

export default Intro