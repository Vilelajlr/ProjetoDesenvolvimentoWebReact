import React from 'react';

import Link from '../Link';
import styles from './modules/Navbar.module.css';

import { MdOutlineAccountCircle } from "react-icons/md";


export default function Navbar(){
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.flexNav}>
                    <div className={styles.containerLogo}>
                        <h1>Blue Sky <span>Reality</span></h1>
                    </div>

                    <div className={styles.containerLinks}>
                        <ul>
                            <li><Link nome="Home" url="#" nomeStyle="btn-nav" /></li>
                            <li><Link nome="Houses" url="#houses" nomeStyle="btn-nav" /></li>
                            <li><Link nome="About" url="#about" nomeStyle="btn-nav" /></li>
                            <li><Link nome="Contact" url="#contact" nomeStyle="btn-nav" /></li>
                        </ul>
                    </div>

                    <div className={styles.containerAccount}>
                        <MdOutlineAccountCircle fontSize={30} color='white' />
                    </div>

                </div>
            </nav>
        </header>
    );
}