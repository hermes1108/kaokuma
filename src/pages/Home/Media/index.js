import React from 'react'

import styles from './Media.module.scss';
import Slider from './Slider';

const Media = () => {

    return (
        <div className={styles.div}>
            <div className={styles.title}>
                MEDIA
            </div>
            <Slider />
        </div>
    )
}

export default Media