import {  Row } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotaCompleta } from "../components/NotaCompleta";
import { getNota } from "../../store/slices/noticiasSlice/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

export const NotaPage = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();


  const { notaData, isLoading } = useSelector((state: RootState) => state.noticias);



    
    useEffect(() => {
      if (!id) return;
      const param = +id
   
      dispatch( getNota(param)
     )
    }, [id, dispatch]);

    
 

  return (

      <Row justify="center">
   
        
     {  !isLoading
      ? <NotaCompleta titulo={notaData.titulo} img = {notaData.imagen} contenido = {notaData.contenido}/>
      : (<div className="loader"></div>)
      }
    
  
     
          
        
      </Row>
 
  );
};
