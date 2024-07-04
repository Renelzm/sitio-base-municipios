
import Title from "antd/es/typography/Title"
import { NoticiasCard } from "../components/NoticiasCard"
import { Divider, Flex, Row } from "antd"


export const NoticiasPage = () => {
  const notas = [
    {
      key:"1",
      title: "Nota Municipal",
      img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2024/07/449754230_993546496111071_3886469407814087726_n-300x200.jpg",
      descripcion: "El cabildo aprueba apoyos a ejidatarios",
      fecha: "07/03/2024"
    },
    {
      key:"2",
      title: "01 de Julio, Día del Ingeniero",
      img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2024/07/449705385_457618187013122_3343418204897998783_n-300x217.jpg",
      descripcion: "La conmemoración del día del Ingeniero en México se remonta a 1974."
    },
    {
      key:"3",
      title: "Nota Municipal",
      img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2024/07/449754230_993546496111071_3886469407814087726_n-300x200.jpg",
      descripcion: "El cabildo aprueba apoyos a ejidatarios"
    },
    {
      key:"4",
      title: "01 de Julio, Día del Ingeniero",
      img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2024/07/449705385_457618187013122_3343418204897998783_n-300x217.jpg",
      descripcion: "La conmemoración del día del Ingeniero en México se remonta a 1974."
    },
    {
      key:"5",
      title: "Nota Municipal",
      img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2024/07/449754230_993546496111071_3886469407814087726_n-300x200.jpg",
      descripcion: "El cabildo aprueba apoyos a ejidatarios"
    },
    
      
  ]
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
