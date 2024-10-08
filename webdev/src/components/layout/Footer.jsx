import React from 'react'; 

import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import styles from './modules/Footer.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerInterface}>
                <div className={styles.footerFlex}>
                    <div className={styles.footerLogo}>
                        <h1>Blue Sky <span>Reality</span></h1>
                    </div>
                    <div className={styles.footerIcons}>
                        <FaInstagram size={25} color='white' cursor={'pointer'}/>
                        <FaWhatsapp size={25} color='white' cursor={'pointer'}/>
                        <FaLinkedin size={25} color='white' cursor={'pointer'}/>            
                    </div>
                    <div className={styles.footerNomes}>
                        <ul>
                            <li>Mirella Magalhães</li>
                            <li>Gustavo Ribeiro</li>
                            <li>Lucas</li>
                        </ul>
                    </div>

                </div>
                <div className={styles.footerCopy}>
                    <p>All rights reserved &copy; 2024</p>
                </div>
            </div>
        
        </footer>
    );
}