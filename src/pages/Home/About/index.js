import React from 'react'

import styles from './About.module.scss';
import { getImg, useResize } from '../../../utils/Helper'
import DescCard from '../../../components/DescCard';

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

const About = () => {

    const { isMobile } = useResize()

    return (
        <div className={styles.div}>
            <img src={getImg('border1.png')} alt={'border'} className="border" />
            <div className={styles.about}>
                <div className={styles.img}>
                    <img src={getImg('about/left.png')} alt='left' />
                </div>
                <div className={styles.center} >
                    <p className={styles.title}>ABOUT</p>
                    <p className={styles.description}>
                        Koakuma is an multiplayer online ARPG game
                        with immersive combat systems and
                        mechanics within a graphics intensive metaverse.
                        All in-game items and creatures
                        are blockchain based tokens and NFTs. Koakuma’s
                        visuals and gameplay are completely
                        original and inspired by classics
                        like Gigantic, World of Warcraft and Diablo.
                    </p>
                    <a href='https://bit.ly/lite_kok' target="_blank" rel="noreferrer">
                        <button className={styles.btn}>Read Litepaper</button>
                    </a>
                </div>
                {!isMobile && <div className={styles.img_right}>
                    <img src={getImg('about/right.png')} alt='right' />
                </div>}
            </div>
            <div className={styles.stage} >
                <div className={styles.container}>
                    {descriptions.map((description, index) => (
                        <div className={styles.stage_box} key={index}>
                            <DescCard obj={description} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About