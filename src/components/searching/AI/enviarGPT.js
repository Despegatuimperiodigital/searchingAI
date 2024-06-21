// import OpenAI from "openai";



// const enviarGPT =  async (datos, promp) => {
  
//     const mensaje = promp

//     // const completion = await openai.chat.completions.create({
//     //   messages: [
//     //     {
//     //       role: "system",
//     //       content: "You are a helpful assistant designed to output JSON.",
//     //     },
//     //     { role: "user", content: mensaje + 'la respuesta siempre debe ser un json que contenta un mensaje: que es si se ha encontrado(tambien debe ser un mensaje con un tono muy cordial) o no la busqueda y otro que es propiedades: donde se devuelven en el las propiedades que se encontraron' },
//     //   ],
//     //   model: "gpt-3.5-turbo-1106",
//     //   response_format: { type: "json_object" },
//     // });


    
// // Parsea la respuesta para obtener la información relevante
// const data = completion.choices[0].message.content;
// const parsedData = JSON.parse(data);
// console.log(parsedData)
// // Formatea la respuesta para incluir un mensaje descriptivo
// const response = {
//   message: parsedData.message,
//   propiedades: parsedData.propiedades // Asegúrate de que el JSON devuelto tenga este campo
// };
// /*
// const response = {
//   message: "hola, hemos encontrado bùsquedas",
//   propiedades: [
//     {
//         "title": "Fuentes de Lomas II",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/09/Fuentes-de-Lomas-II-Destacada-1024x671.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-lomas-2/",
//         "link_target_attr": "_blank",
//         "price": "Precio: 3.005 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Concepción",
//         "baños": "2",
//         "tipo_subsidio": "En Verde",
//         "tipo_de_proyecto": "Nuevo Proyecto",
//         "m2": "67.1 m2"
//     },
//     {
//         "title": "Fuentes de Piedra IV",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2023/06/fuentes-de-piedra-iv-1024x671.png",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-piedra-iv/",
//         "price": "Precio: 2600 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Concepción",
//         "baños": "2",
//         "tipo_subsidio": "DS19",
//         "tipo_de_proyecto": "En Verde",
//         "m2": "59.5 a 66.5"
//     },
//     {
//         "title": "Fuentes de Miguel Collao",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2024/02/imagen-destacada-Miguel-Collao.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-miguel-collao/",
//         "price": "Precio: 3.340 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Concepción",
//         "baños": "2",
//         "tipo_subsidio": "En Verde",
//         "tipo_de_proyecto": "Nuevo Proyecto",
//         "m2": "67.1 m2"
//     },
//     {
//         "title": "Fuentes de Porvenir 2",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2024/03/Fuentes-de-porvenir-2.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-porvenir-2/",
//         "price": "Precio: 1.600 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Chiguayante",
//         "baños": "1 a 2",
//         "tipo_subsidio": "En verde",
//         "tipo_de_proyecto": "Nuevo Proyecto",
//         "m2": "66,6 m2"
//     },
//     {
//         "title": "Edificio Peumayen",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/11/peumayén.png",
//         "link": "https://ciss.cl/Propiedades/edificio-peumayen-3/",
//         "price": "Precio: 4.790 UF",
//         "habitaciones": "Habitaciones 2 a 3",
//         "ciudad": "Lomas San Sebastián",
//         "baños": "2",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "En Verde",
//         "m2": "66.94 a 114.35 m2"
//     },
//     {
//         "title": "Parque Huertos",
//         "link": "https://ciss.cl/Propiedades/parque-huertos-2/",
//         "price": "Precio: 3.009 UF",
//         "habitaciones": "Habitaciones 1 a 3",
//         "ciudad": "Huertos Familiares",
//         "baños": "1 a 2",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "Venta en Verde",
//         "m2": "42.91 a 112.76"
//     },
//     {
//         "title": "Mirador Oceánico",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/07/mirador.png",
//         "link": "https://ciss.cl/Propiedades/mirador-oceanico/",
//         "price": "Precio: 3772 UF",
//         "habitaciones": "Habitaciones 1 a 3",
//         "ciudad": "Andalue",
//         "baños": "1 a 3",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "En Verde",
//         "m2": "58.32 a 168.12 m2"
//     },
//     {
//         "title": "Edificio Rozas Condell",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/07/Edificio-Rozas.jpg",
//         "link": "https://ciss.cl/Propiedades/edificio-rozas-condell/",
//         "price": "Precio: 2613 UF",
//         "habitaciones": "Habitaciones 1 a 3",
//         "ciudad": "Concepción",
//         "baños": "1 a 2",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "En Verde",
//         "m2": "34.02 a 67,3"
//     },
//     {
//         "title": "Edificio Roosevelt",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/Roosevelt-destacada-1024x671.jpg",
//         "link": "https://ciss.cl/Propiedades/edificio-roosevelt/",
//         "price": "Precio: 8.000 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Concepción",
//         "baños": "3",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "En Verde",
//         "m2": "111.65 a 189.33"
//     },
//     {
//         "title": "Fuentes de Porvenir",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/03/imagen-destacada.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-porvenir/",
//         "price": "Precio: 2.400 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Chiguayante",
//         "baños": "2",
//         "tipo_subsidio": "DS19",
//         "tipo_de_proyecto": "Entrega Inmediata",
//         "m2": "66,5 m2"
//     },
//     {
//         "title": "Fuentes de Rucalhue 2",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/imagen-destacada-2-1024x671.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-rucalhue-2/",
//         "price": "Precio: 2.480 UF",
//         "habitaciones": "Habitaciones 2 a 3",
//         "ciudad": "Hualpén",
//         "baños": "2",
//         "tipo_subsidio": "DS19",
//         "tipo_de_proyecto": "En verde",
//         "m2": "56,4 a 60,9m2"
//     },
//     {
//         "title": "Fuentes de San Pedro",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/JYG5732-1-1024x683.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-san-pedro/",
//         "price": "Precio: 2.100 UF",
//         "habitaciones": "Habitaciones 2 a 3",
//         "ciudad": "San Pedro de la Paz",
//         "baños": "2",
//         "tipo_subsidio": "DS19",
//         "tipo_de_proyecto": "Entrega Inmediata",
//         "m2": "56 a 60,8m2"
//     },
//     {
//         "title": "Edificio New Center",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/Roosevelt-destacada-1536x1006-1-1024x671.jpg",
//         "link": "https://ciss.cl/Propiedades/edificio-new-center/",
//         "price": "Precio: 3023 UF",
//         "habitaciones": "Habitaciones 1 a 2",
//         "ciudad": "Concepción",
//         "baños": "1 a 2",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "",
//         "m2": "Desde 41.31 a 71.8"
//     },
//     {
//         "title": "Fuentes de Prats",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2022/01/portada-1024x671.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-prats/",
//         "price": "Precio: 1.980 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Coronel",
//         "baños": "2",
//         "tipo_subsidio": "DS1-T3",
//         "tipo_de_proyecto": "Entrega Inmediata",
//         "m2": "61,6 a 67,2m2"
//     },
//     {
//         "title": "Fuentes de Aeroparque",
//         "thumbnail": "https://ciss.cl/wp-content/uploads/2024/04/Exterior-condominio-1024x576.jpg",
//         "link": "https://ciss.cl/Propiedades/fuentes-de-aeroparque/",
//         "price": "Precio: 3799 UF",
//         "habitaciones": "Habitaciones 3",
//         "ciudad": "Concepción",
//         "baños": "2",
//         "tipo_subsidio": "Inversión",
//         "tipo_de_proyecto": "Nuevo proyecto",
//         "m2": "73"
//     }
// ] // Asegúrate de que el JSON devuelto tenga este campo
// };
// */
// return response;
// }

// export default enviarGPT;