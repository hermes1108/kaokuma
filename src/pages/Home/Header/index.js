import React, { useState } from 'react'

import styles from './Header.module.scss';
import { getImg, useResize } from '../../../utils/Helper'

const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%'
}

const Header = () => {

    const { isMobile } = useResize()

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    let toggleImg = ''

    if (isOpenMenu) toggleImg = getImg('icon/close.png')
    else toggleImg = getImg('icon/toggle.png')

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div className={styles.div} style={(isMobile && isOpenMenu) ? headerStyle : {}}>
            <div className={styles.header}>
                <img src={getImg('icon/logo.png')} className={styles.logo} alt="logo" />
                <div className={styles.menu}>
                    {!isMobile && <><div>ABOUT</div>
                        <div className={styles.divider}></div>
                        <div>TEAM</div>
                        <div className={styles.divider}></div>
                        <div>LITEPAPER</div>
                        <div className={styles.divider}></div>
                        <div className={styles.btn}>
                            <img src={getImg('icon/wallet.png')} alt="img" />
                            Connect Wallet
                        </div>
                    </>}
                    {isMobile && <img src={getImg('icon/wallet.png')} alt="wallet" />}
                    {isMobile && <img src={toggleImg} onClick={toggleMenu} className={styles.toggle} alt="toggle" />}
                </div>
            </div>
            {isOpenMenu && <div className={styles.menu_mob}>
                <div>
                    <div> Activity </div>
                    <div>TEAM</div>
                    <div>LITEPAPER</div>
                    <div className="subTitle_2 mt_30" onClick={() => console.log('click disconnnect')}>Disconnect</div>
                </div>
            </div>}
        </div>
    )
}

export default Header;