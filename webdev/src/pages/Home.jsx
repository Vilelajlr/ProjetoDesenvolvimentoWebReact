import React from "react";
import styles from './modules/Home.module.css';
import Link from "../components/Link";

export default function Home() {
    return(
        <main className={styles.main}>
            <div className={styles.bg}>
                <div className={styles.containerCanto} data-aos="fade-left" data-aos-delay="100">
                    <div className={styles.flexMain} data-aos="fade-left" data-aos-delay="200">
                        <div className={styles.containerTxt}>
                            <h1>WHERE DREAMS <span>TAKE FLIGHT</span></h1>
                        </div>

                        <div className={styles.containerBtn}>
                            <Link nome="Learn More" url="#" nomeStyle="btnLearnMore" />
                        </div>  
                    </div>
                </div>
            </div>
        </main>
    )
}