
import Title from "antd/es/typography/Title"
import { NoticiasCard } from "../components/NoticiasCard"
import { Divider, Flex, Row } from "antd"


export const NoticiasPage = () => {
  
  const notas = []
  return (
    <>
    <Flex justify="center" >

    <Title level={1}>Noticias</Title>
     
    </Flex>
    <Divider>Notas</Divider>

    <Row justify="center" style={{padding: 20}}>
    {notas.map( (nota) => ( 
    
    <NoticiasCard title ={nota.descripcion} descripcion={nota.descripcion} img={nota.img} date={nota.fecha} key={nota.key}/> 
   
       
       
    ))}
    
 
    </Row>
    
    </>
  )
}
