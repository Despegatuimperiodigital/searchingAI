import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, Container } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function HostingComponent() {
  return (
    <Container maxWidth="md" sx={{ color: '#FFF', py: 4, textAlign: 'center', position: 'relative', height: '100vh', backgroundColor: '#0D1E30' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Powerful & Secure Web Hosting Solutions
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Space Host is accredited domain registrar providing domain name registration and web hosting based in Phoenix.
      </Typography>

      <Box sx={{ p: 2, display: 'inline-flex', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
        <TextField
          variant="filled"
          placeholder="Enter your domain name here"
          sx={{ input: { color: '#FFF' }, '.MuiFilledInput-root': { backgroundColor: 'transparent' }, width: '300px', mr: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography sx={{ color: '#FFF', fontSize: '1rem' }}>.com</Typography>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#22D3EE', '&:hover': { backgroundColor: '#1FB2D0' } }}>
          <SearchIcon /> Search Domain
        </Button>
      </Box>

      {/* Posición absoluta para la imagen */}
      <Box sx={{ position: 'absolute', top: 'calc(50% + 40px)', left: '50%', transform: 'translateX(-50%)', width: '80%', maxWidth: '600px', height: 'auto' }}>
        {/* Asegúrate de cambiar 'path_to_image' por la ruta correcta a tu imagen */}
        <img src="path_to_image" alt="Hosting Illustration" style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Container>
  );
}

export default HostingComponent;
