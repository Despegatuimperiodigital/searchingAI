import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import SingleBox from './single_caja'; // Asegúrate de que este es el path correcto al componente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton, Typography } from '@mui/material';

// Flecha derecha
const NextArrow = ({ className, style, onClick, windowWidth }) => (
    <IconButton
        className={className}
        style={{
            position: 'absolute',
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1',
            right: windowWidth <= 600 ? '-20px' : '-20px', 
            top: windowWidth <= 600 ? '43%' : '43%',
            display: 'block',
            marginRight: windowWidth <= 600 ? '20px' : '15px',
        }}
        onClick={onClick}
    >
        <ArrowForwardIosIcon fontSize="large" />
    </IconButton>
);

// Flecha izquierda
const PrevArrow = ({ className, style, onClick, windowWidth }) => (
    <IconButton
        className={className}
        style={{
            position: 'absolute',
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1',
            left: windowWidth <= 600 ? '-50px' : '-50px', 
            top: windowWidth <= 600 ? '43%' : '43%', 
            display: 'block',
            marginLeft: windowWidth <= 600 ? '20px' : '15px',
        }}
        onClick={onClick}
    >
        <ArrowBackIosNewIcon fontSize="large" />
    </IconButton>
);

const ResultsBox = ({ properties }) => {
    const [clickCounts, setClickCounts] = useState(Array(properties.length).fill(0));
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow windowWidth={windowWidth} />,
        prevArrow: <PrevArrow windowWidth={windowWidth} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div style={{ position: 'relative' }}>
        <Slider {...settings}>
            {properties.map((property, index) => (
                <div key={index}>
                    <SingleBox data={property} />
                </div>
            ))}
        </Slider>
    </div>
    );
}
export default ResultsBox;

