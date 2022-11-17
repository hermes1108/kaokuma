import React from 'react'

import styles from './Description.module.scss';
import DescCard from '../../../components/DescCard';
import { getImg } from '../../../utils/Helper';

const descriptions = [
    {
        img: 'desc/desc1.png',
        title: 'Collecting',
        text: 'The equipment in the game is divided into: weapons, helmets, clothes, trousers, hand guards, shoes, rings and necklaces. Each piece of equipment is a unique NFT with different qualities and attributes. Collect the most suitable equipment to make you stronger!'
    },
    {
        img: 'desc/desc2.png',
        title: 'Exploration',
        text: 'There are countless dungeons waiting for you to challenge.Go with your friends to explore the randomly generated terrain, trigger a unique plot, defeat the ferocious boss and find the lost NFT treasure for many years'
    },
    {
        img: 'desc/desc3.png',
        title: 'Battling',
        text: 'You can compete one-on-one with other players in the ladder competition, or form a unique team with your friends to challenge other teams.At the end of each season, players who climb the ladder will receive rich rewards, including the absolutely rare NFT'
    },
    {
        img: 'desc/desc4.png',
        title: 'Gathering',
        text: 'There are abundant wild resources in the game, such as rare minerals and precious herbs.Find these scattered materials and collect them.These resources can be sold to other players or made into specific items.Good luck.'
    },
    {
        img: 'desc/desc5.png',
        title: 'Crafting',
        text: 'As a demon hunter, your basic manufacturing ability can make you stay longer in this dangerous world.The medicinal materials are processed into medicine, and the ores are processed into weapons and ornaments. These NFT products can be sold to other players or used by themselves.'
    },
    {
        img: 'desc/desc6.png',
        title: 'Big World',
        text: 'Laria is a vast and charming continent. There are all kinds of strange things here. New things happen all the time. Here you can meet new partners and go to unknown and mysterious areas together.'
    },
]

const Description = () => {

    return (
        <div className={styles.div} >
            <img src={getImg('border3.png')} className="border" style={{ marginTop: -25 }} alt="border" />
            <div className={styles.container}>
                {descriptions.map((description, index) => (
                    <DescCard obj={description} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Description