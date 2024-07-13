import {  Row } from "antd";
import { collection, getDocs, query, where  } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { notasInterface } from "../../interfaces/notaInterface";
import { NotaCompleta } from "../components/NotaCompleta";

export const NotaPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const [data, setData] = useState<notasInterface>();
  

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // Verifica si el id está presente

      const q = query(collection(db, "publicaciones"), where("id", "==", Number(id))); // Asegúrate de que el id es de tipo number
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const item = querySnapshot.docs[0].data() as notasInterface; // Obtén el primer documento
        setData(item);
        
      }

    };
    fetchData();
    }, [id]);


 

  return (

      <Row justify="center">
        
     {  data
      ? <NotaCompleta titulo={data.titulo} img = {data.imagen} contenido = {data.contenido}/>
      : (<div className="loader"></div>)
      }
    
  
     
          
        
      </Row>
 
  );
};
