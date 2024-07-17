# Páginas Municipales

## PARA ENTIDADES MUNICIPALES SIN WEB OFFICIAL

Esta aplicación esta diseñada con React y Vite, con la finalidad de servir como sitio base para todas las entidades que no cuenten con equipamiento ni infraestructura para albergar sus sitios web..

### Requerimientos iniciales

- Logotipo de la institución
- Proporcionar o crear correo de  gmail de la institución
- Nombre completo y oficial de la institución.
- Telefonos de contacto.
- Redes Sociales (Facebook, Instagram, Twitter) si cuentan con ellas.
- Contacto para: Conteniudo de notas y banners, contenido de transpoarencia, contenido de tramites.
- Correo para OIC buzon quejas y denuncias.
- Ubicación geografica en el mapa

## Pasos de instalación

1. Clonar o instalar desde el repositorio
2. Ejecutar el comando:

    ```bash
    npm install
    ```

3. Correr la aplicación

    ```bash
    npm run dev
    ```

## DATOS INICIALES DE LA APLICACION

src\store\slices\municipalSlice.ts

- nombreInstitucion: '',
- logoUrl: "",
- email: '',
- telefono: '',
- direccion: "",
- habitantes: number,
- redesSociales:
  - facebook: '',
  - twitter: '',
  - instagram: '',
- sitiosInteres:
   [
  - id: "",
  - nombre '',
  - url: '',
  - logo: ''
        ],
- banners: [
  - to: '',
  - url: ''
        ],
- fotoGaleria: [
  - src:''
  ]
- lugaresTuristicos: [
  - name: '',
  - description: '',
  - image: '',
  - features: [],
        ],

- seguridadData: [
  - title: '',
  - description: '',
  - contact: '',
  - img: ''
        ],

Tomar en cuenta los datos de localizacion del mapa

### Iconos

- <https://react-icons.github.io/react-icons/>

## MODULOS

- Home page
- Noticias
- Trasparencia
- Tramites (Con generación de cógigos qr por cada enlace y documento)
- Sitios Turisticos
- Seguridad y bienestar

### DATOS ADICIONALES

- Contacto
- Sitios de Interes
- Ubicacion Geografica
- Redes Sociales

## SEED DATOS

1. banners: "url" , "to"  
2. fotoGaleria: "src" : "url imagen"
3. notas : (Revisar notasInterface)
4. Tramite : (Revisar Tramite interface)
5. Seguridad : title, description, contact, img
6. Sitios: name, description, image, features[]