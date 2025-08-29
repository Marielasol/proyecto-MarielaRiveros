import { imagenes }  from '../assets/imagenes.js'

 const productos = [
    {
        id: 1,
        name: "Kapping",
        price: 20400,
        categoria: "uñas",
        img: imagenes.imgkapping,
        descripcion: "Tratamiento...",
    
    },

     {
        id: 2,
        name: "Esmaltado Semi-permanente",
        price: 15000,
        categoria: "uñas",
        img: imagenes.imgsemi,
        descripcion: "Tratamiento...",
        
    },
     {
        id: 3,
        name: "Esmaltado simple",
        price: 10500,
        categoria: "uñas",
        img: imagenes.imgcomun,
        descripcion: "Tratamiento...",
    },
     {
        id: 4,
        name: "Soft gel",
        price: 26000,
        categoria: "uñas",
        img: imagenes.imgsoftgel,
        descripcion: "Tratamiento...",
        
    },
     {
        id: 5,
        name: "Lifting de pestañas",
        price: 20000,
        categoria: "pestañas",
        img: imagenes.imgpestanas,
        descripcion: "Tratamiento...",
        
    },
     {
        id: 6,
        name: "Perfilado de cejas",
        price: 10500,
        categoria: "pestañas",
        img: imagenes.imgperfilado,
        descripcion: "Tratamiento...",
        
    },
     {
        id: 7,
        name: "Extension de pestañas",
        price: 25000,
        categoria: "pestañas",
        img: imagenes.imgextension,
        descripcion: "Tratamiento...",
        
    },
     {
        id: 8,
        name: "Laminado y perfilado de cejas",
        price: 21000,
        categoria: "pestañas",
        img: imagenes.imglaminadoperfilado,
        descripcion: "Tratamiento...",
       
    },
     {
        id: 9,
        name: "Alisado con formol",
        price: 20000,
        categoria: "cabello",
        img: imagenes.imgalisadosinformol,
        descripcion: "Tratamiento...",
       
    },
     {
        id: 10,
        name: "Alisado sin formol",
        price: 23000,
        categoria: "cabello",
        img: imagenes.imgalisadosinformol,
        descripcion: "Tratamiento...",
       
    },
     {
        id: 11,
        name: "Botox con keratina",
        price: 18000,
        img: imagenes.imgbotoxcapilar,
        descripcion: "Tratamiento...",
    
    },
     {
        id: 12,
        name: "Botox con celulas madre",
        price: 20000,
        categoria: "cabello",
        img: imagenes.imgbotoxcapilar,
        descripcion: "Tratamiento...",
    
    },
    {
        id: 13,
        name: "Dermaplaning",
        price: 20000,
        categoria: "Piel",
        img: imagenes.imgdermaplaning,
        descripcion: "Tratamiento...",
       
    },
    {
        id: 14,
        name : "Limpieza facial",
        price: 18000,
        categoria: "piel",
        img: imagenes.imglimpiezafacial,
        descripcion: "Tratamiento...",
        
    },
    {
        id: 15,
        name: "Depilacion corporal y facial",
        price: 10500,
        categoria: "piel",
        img: imagenes.imgdepi,
        descripcion: "Tratamiento...",
        
    },
    {
        id: 16,
        name: "Promo 2 zonas",
        price: 12000,
        categoria: "piel",
        img: imagenes.imgdepicorporal,
        descripcion: "Tratamiento...",
       
    },
];
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
export const getProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productoEncontrado = productos.find((p) => p.id === parseInt(id));
      resolve(productoEncontrado || null);
    }, 500); 
  });
};
export default productos