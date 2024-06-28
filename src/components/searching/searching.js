import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, ToggleButtonGroup, ToggleButton, Container, Typography, Grid } from '@mui/material';
import enviarGPT from './AI/enviarGPT';
import data from './data/data.json'
import CircularProgress from '@mui/material/CircularProgress';
import ResultsBox from './caja_resultados';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './estilos.css';
import '../../fonts.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");  // Estado para almacenar el texto del formulario

  const [results, setResults] = useState([]);

  const [mensaje, setMensaje] = useState('')

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState('');

  const [statistics, setStatistics] = useState({
    wordFrequency: {},
    boxClicks: { subsidio: 0, inversion: 0 },
    phraseFrequency: {},
    searchButtonClicks: 0
  });

  useEffect(() => {
    const filteredProperties = data.filter(property => {
      if (selected === 'subsidio') {
        return property.tipo_subsidio === 'subsidio' || property.tipo_subsidio === 'DS19';
      } else if (selected === 'inversion') {
        return property.tipo_subsidio === 'Inversión';
      }
      return true; // Muestra todas las propiedades si no hay selección
    });
    setResults(filteredProperties);
  }, [selected]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);

  };

  const activarSubsidio = () => {

  }

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setSelected(newAlignment);
      setStatistics(prevStats => ({
        ...prevStats,
        boxClicks: {
          ...prevStats.boxClicks,
          [newAlignment]: prevStats.boxClicks[newAlignment] + 1
        }
      }));
    }
  };

  const filteredProperties = results.filter(property => {
    if (selected === 'subsidio') {
      return property.tipo_de_proyecto.includes('subsidio');
    } else if (selected === 'inversion') {
      return property.tipo_de_proyecto.includes('inversión');
    }
    return true; // Si no hay selección, muestra todas las propiedades
  });


  const handleSearch = async (event) => {
    setLoading(true); // Activa el spinner antes de hacer la solicitud

    // Increment search button clicks
    setStatistics(prevStats => ({
      ...prevStats,
      searchButtonClicks: prevStats.searchButtonClicks + 1,
    }));

    // Update word frequency
    const words = searchText.split(' ');
    const newWordFrequency = { ...statistics.wordFrequency };
    words.forEach(word => {
      newWordFrequency[word] = (newWordFrequency[word] || 0) + 1;
    });

    // Update phrase frequency
    const newPhraseFrequency = { ...statistics.phraseFrequency };
    newPhraseFrequency[searchText] = (newPhraseFrequency[searchText] || 0) + 1;

    setStatistics(prevStats => ({
      ...prevStats,
      wordFrequency: newWordFrequency,
      phraseFrequency: newPhraseFrequency
    }));

    // Simular una búsqueda
    setTimeout(() => {
      setLoading(false);
    }, 2000);


    const promp = `{
    "query": ${searchText},
    "propiedades": [
      {
          "title": "Fuentes de Lomas II",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/09/Fuentes-de-Lomas-II-Destacada-1024x671.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-lomas-2/",
          "link_target_attr": "_blank",
          "price": "3.005 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Concepción",
          "baños": "2",
          "tipo_subsidio": "En Verde",
          "tipo_de_proyecto": "Nuevo Proyecto",
          "m2": "67.1 m2"
      },
      {
          "title": "Fuentes de Piedra IV",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2023/06/fuentes-de-piedra-iv-1024x671.png",
          "link": "https://ciss.cl/Propiedades/fuentes-de-piedra-iv/",
          "price": "2.600 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Concepción",
          "baños": "2",
          "tipo_subsidio": "DS19",
          "tipo_de_proyecto": "En Verde",
          "m2": "59.5 a 66.5"
      },
      {
          "title": "Fuentes de Miguel Collao",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2024/02/imagen-destacada-Miguel-Collao.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-miguel-collao/",
          "price": "3.340 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Concepción",
          "baños": "2",
          "tipo_subsidio": "En Verde",
          "tipo_de_proyecto": "Nuevo Proyecto",
          "m2": "67.1 m2"
      },
      {
          "title": "Fuentes de Porvenir 2",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2024/03/Fuentes-de-porvenir-2.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-porvenir-2/",
          "price": "Precio: 1.600 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Chiguayante",
          "baños": "1 a 2",
          "tipo_subsidio": "En verde",
          "tipo_de_proyecto": "Nuevo Proyecto",
          "m2": "66,6 m2"
      },
      {
          "title": "Edificio Peumayen",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/11/peumayén.png",
          "link": "https://ciss.cl/Propiedades/edificio-peumayen-3/",
          "price": "4.790 UF",
          "habitaciones": "Habitaciones 2 a 3",
          "ciudad": "Lomas San Sebastián",
          "baños": "2",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "En Verde",
          "m2": "66.94 a 114.35 m2"
      },
      {
          "title": "Parque Huertos",
          "link": "https://ciss.cl/Propiedades/parque-huertos-2/",
          "price": "3.009 UF",
          "habitaciones": "Habitaciones 1 a 3",
          "ciudad": "Huertos Familiares",
          "baños": "1 a 2",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "Venta en Verde",
          "m2": "42.91 a 112.76"
      },
      {
          "title": "Mirador Oceánico",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/07/mirador.png",
          "link": "https://ciss.cl/Propiedades/mirador-oceanico/",
          "price": "3772 UF",
          "habitaciones": "Habitaciones 1 a 3",
          "ciudad": "Andalue",
          "baños": "1 a 3",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "En Verde",
          "m2": "58.32 a 168.12 m2"
      },
      {
          "title": "Edificio Rozas Condell",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/07/Edificio-Rozas.jpg",
          "link": "https://ciss.cl/Propiedades/edificio-rozas-condell/",
          "price": "2.613 UF",
          "habitaciones": "Habitaciones 1 a 3",
          "ciudad": "Concepción",
          "baños": "1 a 2",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "En Verde",
          "m2": "34.02 a 67,3"
      },
      {
          "title": "Edificio Roosevelt",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/Roosevelt-destacada-1024x671.jpg",
          "link": "https://ciss.cl/Propiedades/edificio-roosevelt/",
          "price": "8.000 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Concepción",
          "baños": "3",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "En Verde",
          "m2": "111.65 a 189.33"
      },
      {
          "title": "Fuentes de Porvenir",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/03/imagen-destacada.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-porvenir/",
          "price": "2.400 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Chiguayante",
          "baños": "2",
          "tipo_subsidio": "DS19",
          "tipo_de_proyecto": "Entrega Inmediata",
          "m2": "66,5 m2"
      },
      {
          "title": "Fuentes de Rucalhue 2",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/imagen-destacada-2-1024x671.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-rucalhue-2/",
          "price": "2.480 UF",
          "habitaciones": "Habitaciones 2 a 3",
          "ciudad": "Hualpén",
          "baños": "2",
          "tipo_subsidio": "DS19",
          "tipo_de_proyecto": "En verde",
          "m2": "56,4 a 60,9m2"
      },
      {
          "title": "Fuentes de San Pedro",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/JYG5732-1-1024x683.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-san-pedro/",
          "price": "2.100 UF",
          "habitaciones": "Habitaciones 2 a 3",
          "ciudad": "San Pedro de la Paz",
          "baños": "2",
          "tipo_subsidio": "DS19",
          "tipo_de_proyecto": "Entrega Inmediata",
          "m2": "56 a 60,8m2"
      },
      {
          "title": "Edificio New Center",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/Roosevelt-destacada-1536x1006-1-1024x671.jpg",
          "link": "https://ciss.cl/Propiedades/edificio-new-center/",
          "price": "3023 UF",
          "habitaciones": "Habitaciones 1 a 2",
          "ciudad": "Concepción",
          "baños": "1 a 2",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "",
          "m2": "Desde 41.31 a 71.8"
      },
      {
          "title": "Fuentes de Prats",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/portada-1024x671.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-prats/",
          "price": "1.980 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Coronel",
          "baños": "2",
          "tipo_subsidio": "DS1-T3",
          "tipo_de_proyecto": "Entrega Inmediata",
          "m2": "61,6 a 67,2m2"
      },
      {
          "title": "Fuentes de Aeroparque",
          "thumbnail": "https://ciss.cl/wp-content/uploads/2024/04/Exterior-condominio-1024x576.jpg",
          "link": "https://ciss.cl/Propiedades/fuentes-de-aeroparque/",
          "price": "3.799 UF",
          "habitaciones": "Habitaciones 3",
          "ciudad": "Concepción",
          "baños": "2",
          "tipo_subsidio": "Inversión",
          "tipo_de_proyecto": "Nuevo proyecto",
          "m2": "73"
      }
  ]
}`



    // try {

    //   const existingSearches = await fetchBusquedasGuardadas();
    //   const similarQuery = checkSimilarity(searchText, existingSearches.map(item => item.query));

    //   if (similarQuery) {
    //     setResults(formulario.propiedades); // Asume que los resultados están almacenados de esta manera
    //     setMensaje("Resultados obtenidos del cache.");
    //   } else {
    //     // Realiza la búsqueda normalmente si no se encuentra una búsqueda similar
    //     const formulario = await enviarGPT(data, promp);


    //   setMensaje(formulario.message)
    //   setResults(formulario.propiedades)
    //     // Aquí podrías también guardar la nueva búsqueda en el servidor
    //   }



    //   // Guardar búsqueda en el servidor
    //   const saveSearchResponse = await fetch('https://prueba.ciss.cl/wp-json/searchia/v1/guardar-busqueda/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       searchText,
    //       results: formulario.propiedades,
    //     }),
    //   });

    //   if (!saveSearchResponse.ok) {
    //     throw new Error('Error guardando búsqueda');
    //   }
    // } 
    // catch (error) {
    //   // Manejo de errores si alguna promesa es rechazada
    //   console.error("Error al generar el formulario:", error);
    // }
    // finally {
    //   setLoading(false); // Desactiva el spinner independientemente del resultado de la solicitud
    // }


  };


  const getMostFrequent = (obj) => {
    return Object.entries(obj).reduce((a, b) => (b[1] > a[1] ? b : a), ['', 0]);
  };

  useEffect(() => {
    // Log statistics for debugging
    console.log(statistics);
  }, [statistics]);

  const mostFrequentWord = getMostFrequent(statistics.wordFrequency);
  const mostFrequentPhrase = getMostFrequent(statistics.phraseFrequency);

  const fetchBusquedasGuardadas = async () => {
    const response = await fetch('https://prueba.ciss.cl/wp-json/searchia/v1/obtener-busquedas/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };


  // Función para hacer la llamada a la API de OpenAI
  const fetchSynonyms = async () => {
    try {

      const formulario = await enviarGPT('dormitorios');

      console.log(formulario)

    } catch (error) {
      // Manejo de errores si alguna promesa es rechazada
      console.error("Error al generar el formulario:", error);
    }

  };

  return (
    <Container className="search-container">
      <Box className="box">
        <TextField
          variant="outlined"
          fullWidth
          label="Quiero un departamento de 3 dormitorios 2 baños"
          className={searchText ? 'hidden-label' : ''}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: '"Montserrat", "Poppins", sans-serif',
              fontSize: '14px',
              marginLeft: '10px',
              top: '50%',
              transform: 'translateY(-50%)'
            },
            "& .MuiOutlinedInput-root": {
              background: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              height: '30px', // Altura del input
              "& fieldset": {
                border: 'none' // Elimina el borde
              },
              "&:hover fieldset": {
                border: 'none'  // Elimina el borde al pasar el mouse
              },
              "&.Mui-focused fieldset": {
                border: 'none'  // Elimina el borde cuando está enfocado
              }
            },
            borderRadius: '4px 0 0 4px',
            marginRight: '-1px',
            margin: 'auto' // Centra horizontalmente el TextField
          }}
          value={searchText}
          onChange={handleInputChange}
        />

        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={handleAlignment}
          aria-label="project filter"
          sx={{
            width: '100%', // Asegura que ocupa todo el espacio disponible
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '& .MuiToggleButtonGroup-grouped': {
              margin: '0 8px',
              border: 0,
              '&:not(:first-of-type)': {
                borderRadius: '20px',
              },
              '&:first-of-type': {
                borderRadius: '20px',
              },
            }
          }}
        >
          <ToggleButton value="subsidio" aria-label="left aligned" sx={{ textTransform: 'none', fontSize: '0.875rem' }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center', // Centra verticalmente
              justifyContent: 'center', // Centra horizontalmente
              width: '100%', // Usa todo el ancho del botón
            }}>
              <Box sx={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: selected === "subsidio" ? 'red' : '#ccc',
                transition: 'all 0.3s ease',
                transform: selected === "subsidio" ? 'translateX(20px)' : 'translateX(0)',
                marginRight: 1,
              }} />
              <Typography sx={{ fontFamily: "Montserrat, poppins", fontSize: '10px', width: '80%', textAlign: 'left', pl: 2 }}>
                Proyectos con subsidio
              </Typography>
            </Box>
          </ToggleButton>
          <ToggleButton value="inversion" aria-label="centered" sx={{ textTransform: 'none', fontSize: '0.875rem' }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center', // Centra verticalmente
              justifyContent: 'center', // Centra horizontalmente
              width: '100%', // Usa todo el ancho del botón
            }}>
              <Box sx={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                backgroundColor: selected === "inversion" ? 'red' : '#ccc',
                transition: 'all 0.3s ease',
                transform: selected === "inversion" ? 'translateX(20px)' : 'translateX(0)',
                marginRight: 1,
              }} />
              <Typography sx={{ fontFamily: "Montserrat, poppins", fontSize: '10px', width: '80%', textAlign: 'left', pl: 2 }}>
                Ideales para inversión
              </Typography>
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          variant="contained"
          sx={{
            width: '80%',
            marginBottom: '5px',
            fontFamily: '"Montserrat", poppins;',
            lineHeight: '1',
            bgcolor: '#FD4A5C', // Color de fondo rojo
            color: 'white', // Texto en color blanco
            borderRadius: '8px', // Bordes redondeados
            padding: '6px 12px', // Padding interno
            textTransform: 'none', // Evita que el texto se transforme en mayúsculas
            fontSize: '12px', // Tamaño del texto
            boxShadow: 'none', // Sin sombra
            '&:hover': {
              bgcolor: '#b71c1c', // Color al pasar el mouse
              boxShadow: 'none' // Sin sombra al pasar el mouse
            }
          }}
          endIcon={<ArrowForwardIcon />}
          onClick={handleSearch}
        >
          VER PROYECTOS
        </Button>
      </Box>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      ) : (

        <Box>
          <div>
            {mensaje}
          </div>
          <ResultsBox properties={results} />
        </Box>
      )}

      <Box sx={{ mt: 2, backgroundColor: '#f6f6f6' }}>
        <Typography sx={{ fontFamily: '"Montserrat", "Poppins", sans-serif', fontSize: '16px' }}>Estadísticas</Typography>
        <Typography variant="body2" className='font'>Palabra más utilizada: {mostFrequentWord[0]} ({mostFrequentWord[1]} veces)</Typography>
        <Typography variant="body2" className='font'>Frase más repetida: {mostFrequentPhrase[0]} ({mostFrequentPhrase[1]} veces)</Typography>
        <Typography variant="body2" className='font'>Clics en Proyectos con subsidio: {statistics.boxClicks.subsidio}</Typography>
        <Typography variant="body2" className='font'>Clics en Ideales para inversión: {statistics.boxClicks.inversion}</Typography>
        <Typography variant="body2" className='font'>Clics búsqueda: {statistics.searchButtonClicks}</Typography>
      </Box>
    </Container>

  );
}
export default SearchBar;
