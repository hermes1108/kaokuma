import React, { useRef } from 'react'
import Slider from "react-slick";

import styles from './Heroes.module.scss';
import { getImg, useResize } from '../../../utils/Helper';

const heroes = [
    {
        img: "hero/caro_hero0.png",
        badge: "hero/badge.png",
        title: 'Casey',
        nick: 'Casey',
        description: 'Casey is an indifferent hunter who is always alone and always seems to be hostile to others',
        ATK: 90,
        DEF: 30,
        AGI: 60,
        INT: 70
    },
    {
        img: "hero/caro_hero1.png",
        badge: "hero/badge.png",
        title: 'Lynn',
        nick: 'Lynn',
        description: 'Lynn was born with the blood of the witch family flowing through her body, who was born to manipulate magic. Lynn can combine various spells to create her own special abilities.',
        ATK: 20,
        DEF: 80,
        AGI: 40,
        INT: 60
    },
    {
        img: "hero/caro_hero2.png",
        badge: "hero/badge.png",
        title: 'Casey-Fox',
        nick: 'Casey',
        description: 'When casey is extremely angry, she loses her mind and her body gradually changes into a fox form. Casey, who is controlled by her anger, becomes extremely dangerous.',
        ATK: 50,
        DEF: 80,
        AGI: 30,
        INT: 60
    },
    {
        img: "hero/caro_hero3.png",
        badge: "hero/badge.png",
        title: 'Grane',
        nick: 'Grane',
        description: 'Grane comes from a northern tribe, and he has many scars on his body when he fights with wild beasts all the year round. Grane looks fierce, but in fact he is very gentle inside',
        ATK: 20,
        DEF: 80,
        AGI: 40,
        INT: 60
    },
    {
        img: "hero/caro_hero4.png",
        badge: "hero/badge.png",
        title: 'Guardian of the forest',
        nick: 'Guardian',
        description: 'The guardian of the dead forest, he will use its huge body to stop all intruders',
        ATK: 20,
        DEF: 80,
        AGI: 40,
        INT: 60
    },
    {
        img: "hero/caro_hero5.png",
        badge: "hero/badge.png",
        title: 'Grane-Wolf',
        nick: 'Grane',
        description: 'Grane can transform into a wolf form, but it is not caused by anger, but by wild power. Grane can also call out wolf partners to fight together',
        ATK: 20,
        DEF: 80,
        AGI: 40,
        INT: 60
    },
]

const Heroes = () => {

    const slider = useRef(null)

    const { isMobile } = useResize()

    const arrowStyle = isMobile ? {
        display: 'block',
        width: '33px',
        height: '68px'
    } : {
        display: 'block',
        width: '53px',
        height: '88px'
    }

    const diff = isMobile ? -40 : -70

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <img src={getImg('hero/right.png')} alt='next' className={className} style={{ ...style, ...arrowStyle, right: diff }} onClick={onClick} />
        );
    }

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <img src={getImg('hero/left.png')} alt='prev' className={className} style={{ ...style, ...arrowStyle, left: diff }} onClick={onClick} />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        // fade: true,
        slidesToShow: 1,
        speed: 2000,
        autoplaySpeed: 7000,
        // autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const slickGoTo = (index) => {
        slider.current.slickGoTo(index)
    }

    return (
        <div>
            <div className={styles.div_top} >
                <img src={getImg('border2.png')} className='border' style={{ marginTop: -20 }} alt="img" />
                <div className={styles.heros} >
                    <img src={getImg('hero/hero1.png')} alt="hero" onClick={() => slickGoTo(0)} />
                    <img src={getImg('hero/hero2.png')} alt="hero" onClick={() => slickGoTo(1)} />
                    <img src={getImg('hero/hero3.png')} alt="hero" onClick={() => slickGoTo(2)} />
                    <img src={getImg('hero/hero4.png')} alt="hero" onClick={() => slickGoTo(3)} />
                    <img src={getImg('hero/hero5.png')} alt="hero" onClick={() => slickGoTo(4)} />
                    <img src={getImg('hero/hero6.png')} alt="hero" onClick={() => slickGoTo(5)} />
                </div>
            </div>
            <div className={styles.div_bottom}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        HEROES
                    </div>
                    <div className={styles.carousel}>
                        <Slider {...settings} ref={slider}>
                            {heroes.map((hero, index) => (
                                <div className={styles.slider} key={index}>
                                    <div className={styles.info}>
                                        <div className={styles.header}>
                                            <img src={getImg(hero.badge)} alt="badge" />
                                            <div>
                                                <div className={styles.name}>{hero.title}</div>
                                                <div className={styles.nick}>{hero.nick}</div>
                                            </div>
                                        </div>
                                        <div className={styles.info_box}>
                                            <div className={styles.description}>
                                                {hero.description}
                                            </div>
                                            <div className={styles.status}>
                                                <div className={styles.row}>
                                                    <div>ATK : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.ATK}%, #dddddd66 ${hero.ATK}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>DEF : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0% ${hero.DEF}%, #dddddd66 ${hero.DEF}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>AGI : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.AGI}%, #dddddd66 ${hero.AGI}% 100%)` }}></div>
                                                </div>
                                                <div className={styles.row}>
                                                    <div>INT : </div>
                                                    <div className={styles.progress} style={{ background: `linear-gradient(90deg, #ddd 0 ${hero.INT}%, #dddddd66 ${hero.INT}% 100%)` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={getImg(hero.img)} alt='img' />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <img src={getImg('border4.png')} className='border' alt="img" />
            </div>
        </div>
    )
}

export default Heroes;