import {  Col, Image, Row } from "antd";
import Title from "antd/es/typography/Title"
import parse from 'html-react-parser';

interface NotaCompletaProps {
    titulo: string;
    contenido: string;
    img?: string;
  }


export const NotaCompleta: React.FC<NotaCompletaProps>= ({titulo, img, contenido }) => {
  return (
    <>
    <Title level={2} style={{ textAlign: "center"}}>{titulo} </Title>
    <Image
      width={"80%"}
      src={img}
    />
    <Col >
    <Row justify="center">
    {parse(contenido)}

    </Row>
     

    </Col>
   
 

     
    </>
   
  )
}
