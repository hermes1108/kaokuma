import React from 'react'

import styles from './Team.module.scss';
import { getImg } from '../../../utils/Helper';
import TeamCard from '../../../components/TeamCard';

const teams = [
    {
        img: 'team/member1.png',
        name: 'Core team',
        role: 'CEO/Founder',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member2.png',
        name: 'Core team',
        role: 'CDO/Lead Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member3.png',
        name: 'Core team',
        role: 'Game Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member4.png',
        name: 'Core team',
        role: 'Game Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member1.png',
        name: 'Core team',
        role: 'CEO/Founder',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member2.png',
        name: 'Core team',
        role: 'CDO/Lead Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member3.png',
        name: 'Core team',
        role: 'Game Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    },
    {
        img: 'team/member4.png',
        name: 'Core team',
        role: 'Game Artist',
        text: 'he equipment in the game is into: weapons, helmets, shoes, rings and necklaces.'
    }
]

export const Team = () => {
    return (
        <div className={styles.div}>
            <img src={getImg('border2.png')} className='border' alt='border' />
            <div className={styles.title}>CORE TEAM</div>
            <div className={styles.container}>
                {teams.map((team, index) => (
                    <div className={styles.card} key={index} >
                        <TeamCard obj={team} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;