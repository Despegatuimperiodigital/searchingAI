import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './estilos.css';
import '../../fonts.css';

const SingleBox = ({ data, onClick }) => {
    return (
        <Card sx={{ maxWidth: 324, m: 3, p: 0, border: 'none', boxShadow: 'none', }}>
            <CardMedia
                component="img"
                height="200"
                image={data.thumbnail}
                alt={data.title}
                style={{ borderTopLeftRadius: '7px', borderTopRightRadius: '7px' }}
            />
            <CardContent sx={{ paddingLeft: '12px', paddingRight: '12px' }}>
                <Typography className='tittle' gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', paddingTop: 2, }}>
                    {data.title}
                </Typography>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FmdGoodIcon sx={{ mr: 0.5, color: '#D32F2F' }} />  {/* Icono de corazón */}
                    <Typography variant="body2" className='site'>
                        {data.ciudad}
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: '#334041',
                    width: '100%',
                    mb: 1,
                    display: 'inline-block'
                }}>
                    <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold' }}>
                        Desde {data.price}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{
                        padding: '6px 14px', borderRadius: "8px", width: "50%", mb: 1, mr: 0.5, textAlign: 'center', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2" className='details'>
                            {data.tipo_subsidio}
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '6px 14px', borderRadius: "8px", width: "50%", mb: 1, ml: 0.5, textAlign: 'center', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2" className='details'>
                            {data.tipo_de_proyecto}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{ padding: '6px 14px', borderRadius: "8px", width: "50%", mb: 1, mr: 0.5, textAlign: 'center', background: '#f5f5f5' }}>
                        <Typography variant="body2" className='details'>
                            {data.habitaciones}
                        </Typography>
                    </Box>
                    <Box sx={{ padding: '6px 14px', borderRadius: "8px", width: "50%", mb: 1, ml: 0.5, textAlign: 'center', background: '#f5f5f5' }}>
                        <Typography variant="body2" className='details'>
                            {data.baños} Baños
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', }}>
                    <Box sx={{ padding: '6px 14px', borderRadius: "8px", width: "100%", textAlign: 'center', background: '#f5f5f5' }}>

                        <Typography variant="body2" className='details'>
                            {data.m2} Totales
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button href={data.link} onClick={onClick} className="ver-proyectos-btn" color="primary" sx={{ borderRadius: 0, boder: 'none', padding: '3px 13px' }}>
                CONOCER
            </Button>
        </Card>
    );
};

export default SingleBox;
