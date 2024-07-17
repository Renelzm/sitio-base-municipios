
import Title from "antd/es/typography/Title";
import { SeguridadCard } from "../components/SeguridadCard"
import { Divider, Flex, Row } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const SeguridadPage = () => {

const { seguridadData } = useSelector((state: RootState) => state.municipal)


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
