import React from 'react'

import styles from './DescCard.module.scss';
import { getImg } from '../../utils/Helper';

const DescCard = (props) => {

    const { img, title, text } = props.obj

    return (
        <div className={styles.div}>
            <img src={getImg(img)} alt='img' />
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default DescCard;