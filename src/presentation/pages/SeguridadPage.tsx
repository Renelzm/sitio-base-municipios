
import Title from "antd/es/typography/Title";
import { SeguridadCard } from "../components/SeguridadCard"
import { Divider, Flex, Row } from 'antd';
const seguridadData = [
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
];

export const SeguridadPage = () => {
  return (
    <>  

<Flex justify="center">
        <Title level={1}>Seguridad y Bienestar</Title>
        {/* {isLoading && <div className="loader"></div>} */}
      </Flex>
      <Divider >Sitios de apoyo y emergencia</Divider>

    <Row gutter={[16, 16]} justify="center">
            {seguridadData.map((item, index) => (
                <SeguridadCard 
                    key={index} 
                    title={item.title} 
                    description={item.description} 
                    contact={item.contact} 
                    img={item.img}
                />
            ))}
        </Row>
        
    
    </>
  )
}
