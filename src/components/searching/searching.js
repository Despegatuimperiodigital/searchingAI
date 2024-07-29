import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, ToggleButtonGroup, ToggleButton, Container, Typography, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import data from './data/data.json'
import CircularProgress from '@mui/material/CircularProgress';
import ResultsBox from './caja_resultados';
import ChatHistory from './chatHistory';
import Statistics from './statistics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './estilos.css';
import '../../fonts.css';


const SearchBar = () => {
  const [searchText, setSearchText] = useState("");  // Estado para almacenar el texto del formulario

  const [results, setResults] = useState([]);

  const [mensaje, setMensaje] = useState('')

  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState('');

  const [historial, setHistorial] = useState([]);

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

 

  const handleSearch = async () => {
    setLoading(true);
    setStatistics(prevStats => ({
      ...prevStats,
      searchButtonClicks: prevStats.searchButtonClicks + 1,
    }));

    const words = searchText.split(' ');
    const newWordFrequency = { ...statistics.wordFrequency };
    words.forEach(word => {
      newWordFrequency[word] = (newWordFrequency[word] || 0) + 1;
    });

    const newPhraseFrequency = { ...statistics.phraseFrequency };
    newPhraseFrequency[searchText] = (newPhraseFrequency[searchText] || 0) + 1;

    setStatistics(prevStats => ({
      ...prevStats,
      wordFrequency: newWordFrequency,
      phraseFrequency: newPhraseFrequency
    }));





    setTimeout(() => {
      setLoading(false);
    }, 2000);



     try {
      /*
      const response = await fetch('http://localhost:4008/api/despega-ai/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchText }), // Envía el prompt como JSON
      });

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      */
      setMensaje(data.message)
      const prueba= {
        "conversacion": [
          {
            "consulta": "Hola, ¿cómo puedo entrenar un modelo de IA para reconocimiento de imágenes?"
          },
          {
            "respuesta": "Para entrenar un modelo de IA para reconocimiento de imágenes, puedes seguir estos pasos:\n1. Recopilar un conjunto de datos de imágenes etiquetadas.\n2. Elegir una arquitectura de red neuronal convolucional (CNN).\n3. Preprocesar las imágenes.\n4. Dividir el conjunto de datos en entrenamiento y validación.\n5. Entrenar el modelo usando técnicas como transferencia de aprendizaje.\n6. Evaluar y ajustar el modelo según sea necesario."
          },
          {
            "consulta": "¿Cuánto tiempo suele llevar el entrenamiento?"
          },
          {
            "respuesta": "El tiempo de entrenamiento puede variar significativamente dependiendo de varios factores:\n- Tamaño y complejidad del conjunto de datos\n- Arquitectura del modelo elegido\n- Capacidad de procesamiento disponible (CPU/GPU)\n- Hiperparámetros seleccionados\n\nPuede llevar desde unas horas hasta varios días para conjuntos de datos grandes y modelos complejos. Es importante monitorear el progreso y usar técnicas como early stopping para optimizar el tiempo de entrenamiento."
          },
          {
            "consulta": "¿Qué herramientas recomiendas para este tipo de proyecto?"
          },
          {
            "respuesta": "Para proyectos de reconocimiento de imágenes, recomiendo las siguientes herramientas:\n1. TensorFlow o PyTorch como frameworks de aprendizaje profundo\n2. Keras para una API de alto nivel si usas TensorFlow\n3. OpenCV para preprocesamiento de imágenes\n4. Numpy para manipulación de datos\n5. Matplotlib o Seaborn para visualización\n6. Scikit-learn para métricas de evaluación\n7. Google Colab o Kaggle Notebooks si necesitas GPU gratuita en la nube\n8. MLflow para seguimiento de experimentos\n\nEstas herramientas te proporcionarán un ecosistema robusto para desarrollar y entrenar tu modelo de reconocimiento de imágenes."
          },
          {
            "consulta": "Gracias por la información. ¿Algún consejo final?"
          },
          {
            "respuesta": "Por supuesto, aquí tienes algunos consejos finales:\n1. Comienza con un conjunto de datos pequeño para iterar rápidamente.\n2. Utiliza aumento de datos para mejorar la generalización del modelo.\n3. Experimenta con diferentes arquitecturas y compara sus rendimientos.\n4. Presta atención a la calidad de tus datos, la limpieza es crucial.\n5. Utiliza técnicas de regularización para prevenir el sobreajuste.\n6. Mantén un registro detallado de tus experimentos y resultados.\n7. No subestimes la importancia de una buena visualización de resultados.\n8. Considera el uso de modelos pre-entrenados para acelerar el desarrollo.\n\nRecuerda que el aprendizaje automático es un proceso iterativo, así que no te desanimes si no obtienes resultados perfectos de inmediato. ¡Buena suerte con tu proyecto!"
          }
        ]
      }
      setHistorial(prueba.conversacion)
      
      

    } catch (error) {
      console.error('Error al enviar la petición:', error);
    }

    finally {
     setLoading(false); // Desactiva el spinner independientemente del resultado de la solicitud
    }
   

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

 

 

  return (
    <Router> {/* Envolver con Router */}
      <Routes> {/* Envolver con Routes */}
        <Route path="/statistics" element={<Statistics statistics={statistics} />} /> {/* Ruta para estadísticas */}
        <Route path="/" element={(
          <Container className="search-container">
          {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <CircularProgress />
              </Box>
            ) : (

              <Box>
                <div>
                <ChatHistory historial={historial} mensaje={mensaje} searchText={searchText} />
                </div>
                {/*
                  <ResultsBox properties={results} />
                */
                  }
                
              </Box>
            )}
            <Box className="box">
              <TextField
                variant="outlined"
                fullWidth
                label="Necesito que me hagan SEO y e-mail marketing"
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

            
              <Button
                variant="contained"
                sx={{
                  width: '80%',
                  marginBottom: '5px',
                  fontFamily: '"Montserrat", poppins;',
                  lineHeight: '1',
                  bgcolor: '#00FFFF', // Color de fondo rojo
                  color: 'black', // Texto en color blanco
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
                Enviar
              </Button>
              { 
              /*
              <Link to="/statistics" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '80%',
                    marginBottom: '5px',
                    fontFamily: '"Montserrat", poppins;',
                    lineHeight: '1',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    textTransform: 'none',
                    fontSize: '12px'
                  }}
                >
                  VER ESTADÍSTICAS
                </Button>
              </Link>

              */}
            </Box>
            

          </Container>

        )} />
      </Routes>
    </Router>
  );
}
export default SearchBar;
