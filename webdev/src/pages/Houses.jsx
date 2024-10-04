import React from "react";

import casaum from '../assets/img/casa1.png';
import casadois from '../assets/img/casa2.png';
import casatres from '../assets/img/casa3.jpg';

import styles from './modules/Houses.module.css';
import Link from "../components/Link";

import Slider from "react-slick";



export default function Houses() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    const btnName = 'Show More';

    const houses = [
        {
            id: 1,
            img: casaum,
            name:'House on Santa Rita',
            btnName: btnName,
            hover: 'Aluguel'
        },
        {
            id:2,
            img: casadois,
            name: 'House on Catulina',
            btnName: btnName,
            hover: 'Aluguel/Compra'
        },
        {
            id: 3,
            img: casatres,
            name: 'House on Montreal',
            btnName: btnName,
            hover: 'Compra'
        }
    ]



    return (
        <section className={styles.sectionHouse}>
            <div className={styles.containerHouse}>
                <h1>House Catalog</h1>

                
                <div className={styles.containerCards}>
                <Slider {...settings}>
                    {houses.map((house) => (
                        
                        <div key={house.id} className={styles.cards}>
                            <div className={styles.imgCards}>
                                <div className={styles.containerHover}>{house.hover}</div>
                                <img src={house.img} alt={house.name} />
                            </div>
                            <div className={styles.containerLocalHouse}>
                                <h2>{house.name}</h2>
                            </div>
                            <div className={styles.containerBtnHouse}>
                                <Link nome={house.btnName} url="#" nomeStyle="cardBtn" />
                            </div>
                        </div>
                        
                    ))}
                </Slider>
                    
                </div>
                
            </div>
        </section>
    );
}