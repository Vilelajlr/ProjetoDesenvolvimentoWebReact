import React, {useState} from "react";
import casaum from '../assets/img/casa1.png';
import casadois from '../assets/img/casa2.png';
import casatres from '../assets/img/casa3.jpg';
import styles from './modules/Houses.module.css';
import Link from "../components/Link";
import Slider from "react-slick";



export default function Houses() {





    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "450px",
        slidesToShow: 1,
        speed: 500,
        dots: true,
        beforeChange: (current, next) => setActiveSlide(next),
        afterChange: current => setActiveSlide(current),
        cssEase: 'ease-in-out',
       
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
    ];

    return (
        <section id="houses" className={styles.sectionHouse}>
            <div className={styles.containerHouse}>
                <h1>House Catalog</h1>

                <Slider {...settings} >
                    {houses.map((house, index) => (
                        <div key={house.id} 
                             className={`${styles.cards} ${index === activeSlide ? styles.activeCard : styles.disabledCard}`}
                        >
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
        </section>
    );
}
