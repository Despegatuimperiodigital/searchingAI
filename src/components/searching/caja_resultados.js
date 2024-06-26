import React, { useState } from 'react';
import Slider from 'react-slick';
import SingleBox from './single_caja'; // Asegúrate de que este es el path correcto al componente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';

const NextArrow = ({ className, style, onClick, visible }) => (
    <IconButton
        className={className}
        style={{
            display: visible ? 'block' : 'none',
            position: 'absolute',
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1', 
            right: 0,
            top: '50%',
           
        }}
        onClick={onClick}
    >
        <ArrowForwardIosIcon  fontSize="large" fontWeight="lighter" />
    </IconButton>

);

const PrevArrow = ({ className, style, onClick, visible }) => (
    <IconButton
        className={className}
        style={{
            display: visible ? 'block' : 'none',
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1',
            position: 'absolute',
            left: 0,
            top: '50%',
        }}
        onClick={onClick}
    >
        <ArrowBackIosNewIcon fontSize="large"  fontWeight="lighter"/>
    </IconButton>

);

const ResultsBox = ({ properties }) => {
    const [showArrows, setShowArrows] = useState(false);
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow visible={showArrows} />,
        prevArrow: <PrevArrow visible={showArrows} />,
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
        <div
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
            style={{ position: 'relative' }}
        >
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

