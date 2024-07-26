import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Image1 from '../../static/image_1.webp';
import Image2 from '../../static/image_2.webp';

const Statistics = ({ statistics }) => {
  const getMostFrequent = (obj) => {
    return Object.entries(obj).reduce((a, b) => (b[1] > a[1] ? b : a), ['', 0]);
  };

  const mostFrequentWord = getMostFrequent(statistics.wordFrequency);
  const mostFrequentPhrase = getMostFrequent(statistics.phraseFrequency);

  console.log('Datos de las estadísticas:', statistics);

  return (
    <Container>
    <Box sx={{ mt: 2, backgroundColor: '#f6f6f6', padding: 2, borderRadius: 2 }}>
      <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: '24px', color: '#f39c12', fontWeight: 'bold' }}>Estadísticas</Typography>
      <Typography variant="body1" sx={{ mt: 2, fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: '16px', color: '#333' }}>
        El análisis de hoy muestra un crecimiento en, con la propiedad más buscada en:
      </Typography>

      <Box sx={{ backgroundColor: '#c0392b', color: '#fff', padding: 2, borderRadius: 2, mt: 2 }}>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>1- Frase más buscada: {mostFrequentPhrase[0]} ({mostFrequentPhrase[1]} veces)</Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>2- Palabra más repetida: {mostFrequentWord[0]} ({mostFrequentWord[1]} veces)</Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>3- Propiedad más visitada: </Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>4- Clics en Proyectos con subsidio: {statistics.boxClicks.subsidio}</Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>5- Clics en Ideales para inversión: {statistics.boxClicks.inversion}</Typography>
        <Typography variant="body2" sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>6- Clics en búsqueda: {statistics.searchButtonClicks}</Typography>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: '#f1c40f', padding: 2, borderRadius: 2, textAlign: 'center', height:'80px' }}>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif',fontSize: { xs: '18px', sm: '24px' }, fontWeight: 'bold' }}>50</Typography>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>Usos hoy</Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ backgroundColor: '#c0392b', padding: 2, borderRadius: 2, textAlign: 'center', color: '#fff',height:'80px' }}>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '18px', sm: '24px' }, fontWeight: 'bold' }}>200</Typography>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>Usos semanales</Typography>
          </Box>
        </Grid>
        
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: '#f1c40f', padding: 2, borderRadius: 2, textAlign: 'center',height:'80px' }}>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif',fontSize: { xs: '18px', sm: '24px' }, fontWeight: 'bold' }}>2K</Typography>
            <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: { xs: '12px', sm: '16px' } }}>Usos Mensuales</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Box component="img" src={Image1} alt="Image 1" sx={{ width: '100%', borderRadius: 2 }} />
        </Grid>
        <Grid item xs={6}>
          <Box component="img" src={Image2} alt="Image 2" sx={{ width: '100%', borderRadius: 2 }} />
        </Grid>
      </Grid>

    </Box>
       </Container>
  );
};

export default Statistics;
