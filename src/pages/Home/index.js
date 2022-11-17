import React from "react";

import styles from './Home.module.scss';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Heroes from './Heroes'
import Media from './Media';
import Team from './Team';
import Partners from './Parteners';
import Contact from './Contact';

const Home = () => {

    return (
        <div className={styles.div}>
            <Header />
            <Intro />
            <About />
            <Heroes />
            <Media />
            <Team />
            <Partners />
            <Contact />
        </div>
    )
}

export default Home