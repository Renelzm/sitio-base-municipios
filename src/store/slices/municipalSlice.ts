import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export const municipalSlice = createSlice({
  name: 'MunicipalInfo',
  initialState: {
    nombreInstitucion: 'Municipio de  Coahuila',
    logoUrl: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2022/11/cropped-cropped-cropped-logo-GOBIERNOmpal-1024x277-1-1-e1691610713688-1.png",
    email: 'municipio@matamoroscoahuila.com',
    telefono: '8441000000',
    direccion: "Av Mencionada #1250 Ejido el servidor, Coahuila México",
    habitantes: 124402,
    redesSociales: {
      facebook: 'https://www.facebook.com/municipiomatamoroscoahuila',
      twitter: 'https://twitter.com/MatamorosCoahuila',
      instagram: 'https://www.instagram.com/municipiomatamoroscoahuila/',
    },
    sitiosInteres: [
      {
        "id": "coahuila",
        "nombre": "Gobierno del Estado de Coahuila",
        "url": "https://coahuila.gob.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fcoahuila_C_white.png?alt=media&token=66f14d65-57a5-4b0c-8f98-258ac9a035e9"
      },
      {
        "id": "ase",
        "nombre": "Auditoría Superior del Estado",
        "url": "https://www.asecoahuila.gob.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fase-solid.png?alt=media&token=88d3eb07-d79b-4463-accc-b56c083ce6b3"
      },
      {
        "id": "congreso",
        "nombre": "H. Congreso del Estado de Coahuila",
        "url": "https://www.congresocoahuila.gob.mx/coahuila/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fcongreso_coah_white.png?alt=media&token=10d096d3-1e51-4fa5-9f6a-dba5a9d04674"
      },
      {
        "id": "cpc",
        "nombre": "Consejo de Participación Ciudadana",
        "url": "https://cpccoahuila.org.mx",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fcpc_white.png?alt=media&token=e27f1b59-70d8-4633-a4ad-dd07713a3284"
      },
      {
        "id": "fge",
        "nombre": "Fiscalía General del Estado",
        "url": "http://www.fiscaliageneralcoahuila.gob.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Ffge_white.png?alt=media&token=cafdfabe-0c29-4540-a671-a86ed35aaedc"
      },
      {
        "id": "icai",
        "nombre": "Instituto Coahuilense de Acceso a la Información",
        "url": "http://www.icai.org.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Ficai_white.png?alt=media&token=55624581-6851-4927-aed4-e28306c57b89"
      },
      {
        "id": "pjecz",
        "nombre": "Poder Judicial del Estado de Coahuila",
        "url": "https://www.pjecz.gob.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fpjecz_white.png?alt=media&token=4fbe20e9-2fc0-4b78-be16-d8eb8a637c80"
      },
      {
        "id": "seac",
        "nombre": "Sistema Estatal Anticorrupción",
        "url": "https://www.seacoahuila.org.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fseac_white.png?alt=media&token=8de71a66-f514-4b7b-a5ee-4618679f6576"
      },
      {
        "id": "sefirc",
        "nombre": "Secretaría de Fiscalización y Rendición de Cuentas",
        "url": "https://www.sefircoahuila.gob.mx/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Fsefirc_white.png?alt=media&token=332a00bd-7582-4e0e-a24a-29d4df80c568"
      },
      {
        "id": "tja",
        "nombre": "Tribunal de Justicia Administrativa",
        "url": "https://web2.tjacoahuila.org/",
        "logo": "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/logos_instituciones%2Ftja_white.png?alt=media&token=e97822b6-0e6d-4ba9-bd63-4202dfa296c7"
      }
    ],
    banners: [
      {
        to: "#",
        url: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202024-04-30%20at%2010.08.48.jpeg?alt=media&token=8c4ebaf9-716d-462f-85db-6cc7550e9716",
      },
      {
        to: "#",
        url: "https://www.cpccoahuila.org.mx/_nuxt/img/banner-iniciativa.c23be4d.jpg"
      }

    ],
    fotoGaleria: [
      { 'src': "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Muzquiz.jpg?w=700&ssl=1" },
      { 'src': " https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/pueblos-magicos-coahuila.jpg?resize=1280%2C640&ssl=1" },
      { 'src': "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Arteaga.jpg?w=700&ssl=1" },
      { 'src': "https://as2.ftcdn.net/v2/jpg/05/40/79/27/1000_F_540792725_CDv1KU3Cuf3M0lKT9OsGwgneGhuktKz7.jpg" },
      { 'src': "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Candela.jpg?w=700&ssl=1" },
      { 'src': "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Cuatro_cienegas.jpg?w=700&ssl=1" }
    ],
    lugaresTuristicos: [
      {
        name: 'Museo del Desierto',
        description: 'Un lugar lleno de historia y cultura.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Museo_del_Desierto%2C_Saltillo%2C_Coahuila.jpg',
        features: ['Histórico', 'Educativo', 'Familiar']
      },
      {
        name: 'Palacio',
        description: 'Ícono de la vida cultural del Estado, es la institución más antigua dedicada a la enseñanza superior en Coahuila. Las obras murales que decoran el vestíbulo fueron creación de Salvador Toscano y Miguel Santana. Este recinto ha marcado la vida de los coahuilenses, su imagen forma parte del escudo de armas de Saltillo. Aloja una sala de historia natural, una sala de arte colonial y una pinacoteca de arte mexicano con una magnífica colección de obras de grandes pintores. Lleva este nombre porque Saltillo fue nombrada la Atenas de México por su fomento a las artes y la ciencia.',
        image: 'https://viveloensaltillo.com/wp-content/uploads/2018/08/1254x851palaciogob-768x521.png',
        features: ['Gobierno', 'Arquitectura']
      }
    ],
    seguridadData: [
      {
        title: 'Policía',
        description: 'Contacto con la policía municipal para emergencias y reportes.',
        contact: '911',
        img: 'https://paginacentral.com.mx/wp-content/uploads/2019/12/polici%CC%81a-estatal-confiable-guanajuato.jpeg'
      },
      {
        title: 'Bomberos',
        description: 'Contacto con el cuerpo de bomberos para emergencias de incendios y rescates.',
        contact: '911',
        img: 'https://elheraldodesaltillo.mx/wp-content/uploads/2018/01/CONVOCAN-1024x678.jpg'
      },
      {
        title: 'Instituciones Médicas',
        description: 'Contacto con hospitales y clínicas para emergencias médicas.',
        contact: '911',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaWfYUau5mBcWYMkA3bgTWqNiXG7gwYZZ3g&s'
      },
      {
        title: 'Instituciones Médicas',
        description: 'Contacto con hospitales y clínicas para emergencias médicas.',
        contact: '911',
        img: 'https://cdn.milenio.com/uploads/media/2022/07/05/hospital-materno-infantil-especial.jpg'
      }
    ]
  },
  reducers: {

  },
})

