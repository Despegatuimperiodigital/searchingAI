import React from 'react';
import Slider from 'react-slick';
import SingleBox from './single_caja'; // Asegúrate de que este es el path correcto al componente
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';

const NextArrow = ({ className, style, onClick }) => (
    <IconButton
    className={className}
        style={{

            display: 'block',
            position: 'absolute!important', // Asegura que el estilo position no sea sobrescrito
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1',
        }}
        onClick={onClick}
    >
        <ArrowForwardIosIcon />
    </IconButton>
  );
  
  const PrevArrow = ({ className, style, onClick }) => (
    <IconButton
        className={className}
        style={{
            display: 'block',
            color: '#fd4a5c',
            transform: 'translateY(-50%)',
            zIndex: '1',
            position: 'absolute !important' // Asegura que el estilo position no sea sobrescrito
        }}
        onClick={onClick}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
  );
  
const ResultsBox = ({ properties }) => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
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
      <div>
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

