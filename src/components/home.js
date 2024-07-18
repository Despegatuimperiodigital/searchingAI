import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../static/cielo-nocturno-brilla-ia-generativa-espacio-profundo-iridiscente_188544-11285.avif';

const textVariants = {
  enter: { y: 50, opacity: 0 },
  center: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.5 } }
};

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } }
};

const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      filter: 'blur(10px)'
    },
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.2, 0.5, 0.2],
      filter: ['blur(10px)', 'blur(5px)', 'blur(10px)'],
      transition: { duration: 1.5, loop: Infinity, ease: "easeInOut" }
    }
  };


function HomePage() {
    const [index, setIndex] = useState(0);
    const images = [image1, "/path/to/image2.jpg", "/path/to/image3.jpg"];
    const texts = ["Park Mansion Minami Azabu", "Urban Terrace", "Lake View Apartments"];
  
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };
  
    return (
      <div style={{ height: '100vh', color: '#fff', backgroundColor: '#000', position: 'relative' }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">ASM</Typography>
            <Box>
              <Button color="inherit">All</Button>
              <Button color="inherit">About</Button>
            </Box>
          </Toolbar>
        </AppBar>
  
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: -1
          }}
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
  
        <AnimatePresence mode='wait'>
          <motion.img
            key={images[index]}
            src={images[index]}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: 'auto'
            }}
          />
          <motion.div
            key={texts[index]}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              bottom: 100,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" style={{ fontWeight: 300 }}>
              {texts[index]}
            </Typography>
          </motion.div>
        </AnimatePresence>
  
        <Box
          style={{
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 10%'
          }}
        >
          <Button color="inherit" onClick={nextSlide}>Next</Button>
        </Box>
      </div>
    );
  }

export default HomePage;
