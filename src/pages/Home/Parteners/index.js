import React from 'react'

import styles from './Partners.module.scss';
import { getImg } from '../../../utils/Helper';

const Partners = () => {
    return (
        <div className={styles.div}>
            <img src={getImg('border2.png')} className='border' alt='border' />
            <div className={styles.title}>BACKERS & PARTNERS</div>
            <div className={styles.container}>
                <div><img src={getImg('partner/partner1.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner2.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner3.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner4.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner5.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner6.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner7.png')} alt="img" /></div>
                <div><img src={getImg('partner/partner8.png')} alt="img" /></div>
            </div>
        </div>
    )
}

export default Partners;