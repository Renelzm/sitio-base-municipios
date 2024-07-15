import { Divider, Flex } from "antd"
import { BotonesTransparencia } from "../components/BotonesTransparencia"
import Title from "antd/es/typography/Title"



export const TransparenciaPage = () => {
  return (
    <>
    <Flex justify="center">
        <Title level={1}>Tranparencia</Title>
      
      </Flex>
      <Divider>Datos</Divider>
    
    
    <BotonesTransparencia titulo='Expedientes reservados'/>
    </>
  )
}
