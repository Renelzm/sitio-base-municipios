# Páginas Municipales

## PARA ENTIDADES MUNICIPALES SIN WEB OFFICIAL

Esta aplicación esta diseñada con React y Vite, con la finalidad de servir como sitio base para todas las entiodades que no cuenten con equipamiento ni infraestructura para albergar sus sitios web.

### Requerimientos iniciales

- Logotipo de la institución
- Proporcionar o crear correo de  gmail de la institución
- Nombre completo y oficial de la institución.
- Telefonos de contacto.
- Redes Sociales (Facebook, Instagram, Twitter) si cuentan con ellas.
- Contacto para: Conteniudo de notas y banners, contenido de transpoarencia, contenido de tramites.
- Correo para OIC buzon quejas y denuncias.

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

## DEPENDENCIAS ASOCIADAS

### Iconos

- <https://react-icons.github.io/react-icons/>

## SEED DATOS

1. banners: {
    "url" : "www.... (imagen )",
    "to" : "www.."
    }
2. fotoGaleria: {
   "src" : "url imagen"
}
3. notas : (Revisar notasInterface)
4. Tramite : (Revisar Tramite interface)
5. Seguridad :   {
        title: 'Policía',
        description: 'Contacto con la policía municipal para emergencias y reportes.',
        contact: '911',
        img: 'https://paginacentral.com.mx/wp-content/uploads/2019/12/polici%CC%81a-estatal-confiable-guanajuato.jpeg'
        }
6. Sitios:
   name: 'Museo del Desierto',
    description: 'Un lugar lleno de historia y cultura.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Museo_del_Desierto%2C_Saltillo%2C_Coahuila.jpg',
    features: ['Histórico', 'Educativo', 'Familiar']