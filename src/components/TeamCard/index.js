import React from 'react'
import { getImg } from '../../utils/Helper';
import styles from './TeamCard.module.scss';

const TeamCard = (props) => {

    const { img, name, role, text } = props.obj

    return (
        <div className={styles.div}>
            <img src={getImg(img)} alt="img" />
            <p className={styles.name}>{name}</p>
            <p className={styles.role}> {role} </p>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default TeamCard;
