import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";

import './Slider.css'
import styles from './Media.module.scss';
import { getImg } from "../../../utils/Helper";

const Slider = () => {

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 12,
        showNavigation: true,
        config: config.gentle
    })

    const slides = [
        {
            key: uuidv4(),
            content: (
                <img
                    src={getImg('media/media.png')}
                    alt="1"
                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <img
                    src={getImg('media/media.png')}
                    alt="2"
                />
            )
        },
        {
            key: uuidv4(),
            content: (
                <img
                    src={getImg('media/media.png')}
                    alt="3"
                />
            )
        },

    ].map((slide, index) => {
        return { ...slide, onClick: () => setState({ goToSlide: index }) };
    });

    return (
        <div className={styles.carousel}>
            <Carousel
                slides={slides}
                goToSlide={state.goToSlide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
            />
        </div>
    );
}

export default Slider