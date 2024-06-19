import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './estilos.css'
const SingleBox = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 345, m: 2, p: 0,border:'none',boxShadow:'none' }}>
            <CardMedia
                component="img"
                height="150"
                image={data.thumbnail}
                alt={data.title}
            />
            <CardContent sx={{ pT: 2, }}>
                <Typography className='titulo-caja' gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', paddingTop:2, }}>
                    {data.title}
                </Typography>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D32F2F' }}>
                    <FmdGoodIcon sx={{ mr: 0.5 }} />  {/* Icono de corazón */}
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {data.ciudad}
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: '#334041',
                    padding: '6px 12px',
                    width: '100%',
                    mb: 1,
                    display: 'inline-block'
                }}>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                        Desde {data.price}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{p:1, borderRadius:"8px",   width: "50%", mb: 1, mr: 1, textAlign: 'center', background: '#e1e1e1' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                            {data.tipo_subsidio}
                        </Typography>
                    </Box>
                    <Box sx={{p:1, borderRadius:"8px",  width: "50%", mb: 1, ml: 1, textAlign: 'center', background: '#e1e1e1' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                            {data.tipo_de_proyecto}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{  p:1, borderRadius:"8px",  width: "50%", mb: 1, mr: 1, textAlign: 'center', background: '#f5f5f5' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                        {data.habitaciones}
                        </Typography>
                    </Box>
                    <Box sx={{ p:1, borderRadius:"8px",  width: "50%", mb: 1, ml: 1, textAlign: 'center', background: '#f5f5f5' }}>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                        {data.baños} baños
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{  textAlign: 'center', justifyContent: 'space-between', mb: 2 }}>
                  
                    <Typography variant="body2" color="text.secondary">
                        {data.m2} Totales
                    </Typography>
                </Box>
            </CardContent>
            <Button href={data.link} className="ver-proyectos-btn" color="primary"  sx={{ borderRadius: 0, boder:'none' }}>
                CONOCER
            </Button>
        </Card>
    );
};

export default SingleBox;
