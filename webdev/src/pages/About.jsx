import React from "react";

import img from '../assets/img/imgConjunta.png';

import styles from './modules/About.module.css';


export default function About(){
    return(
        <section id="about" className={styles.sectionAbout}>
            <div className={styles.interfaceAbout}>
                <div className={styles.flexAbout}>
                    <div className={styles.imgAbout} data-aos="fade-right">
                        <img src={img} alt="Foto das tres casas" />  
                    </div>
                    
                    <div className={styles.txtAbout} data-aos="fade-left">
                        <h1>About Us</h1>
                        <p>Founded in 2020, Blue Sky Realty is a premier real estate agency located in the heart of New York City. Our mission is to help clients navigate the dynamic and diverse real estate market with confidence and ease.</p>
                        <p>At Blue Sky Realty, we pride ourselves on our personalized approach, understanding that every client has unique needs and dreams. Our experienced team of real estate professionals is dedicated to providing exceptional service, whether you're buying, selling, or renting a property.</p>
                        <p>With a deep knowledge of the local market and a commitment to integrity, we strive to exceed expectations and create lasting relationships. At Blue Sky Realty, your vision is our priority, and we’re here to guide you every step of the way.</p>
                    </div>
                </div>
            </div>


        </section>


    );
}