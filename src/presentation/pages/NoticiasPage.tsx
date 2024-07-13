import { useEffect } from "react";
import Title from "antd/es/typography/Title";
import { NoticiasCard } from "../components/NoticiasCard";
import { Divider, Flex, Row } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchNoticias, setNotaId } from '../../store/slices/noticiasSlice';




export const NoticiasPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useSelector((state: RootState) => state.noticias);

  useEffect(() => {
    dispatch(fetchNoticias());
    dispatch(setNotaId("1")); // Resetear el id de la noticia seleccionada al cargar la página.
  }, [dispatch]);



  
  return (
    <>
  

      <div style={{ backgroundColor: "#f6f6f6", borderRadius: 30 }}>
            <Flex justify="center">
              <Title level={1}>Noticias</Title>
     
            </Flex>
            <Divider>Notas</Divider>

        
            <Row justify="center" style={{ padding: 20 }}>
            {
              isLoading && (<div className="loader"></div>)
            }

            {data.map(({ titulo, excerpt, imagen, createdAt, id }, index) => {
              
                return (
                  <NoticiasCard
                    title={titulo}
                    descripcion={excerpt}
                    img={imagen}
                    key={index}
                    date={createdAt}
                    id={id}
                  /> );
                })}
          
            </Row>
          </div>
    
    </>
    
  );
};
