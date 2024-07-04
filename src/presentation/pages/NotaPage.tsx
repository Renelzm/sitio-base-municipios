import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useParams } from "react-router-dom";

export const NotaPage = () => {
  const notaParam = useParams();
 
  const isLoading = false;

  return (
    <>
     
     { isLoading && (<Flex justify="center">    <div className="loader"></div> </Flex>)}
    
  
      <Flex justify="center">
          
   
        <Title level={1}>{notaParam.id}</Title>
        
      </Flex>
  
    </>
  );
};
