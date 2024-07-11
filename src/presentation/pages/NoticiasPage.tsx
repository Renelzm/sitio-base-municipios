import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Title from "antd/es/typography/Title";
import { NoticiasCard } from "../components/NoticiasCard";
import { Divider, Flex, Row } from "antd";
import { notasInterface , At} from "../../interfaces/notaInterface";

const atToDate = (date: At): Date => {
  return new Date(date.seconds * 1000 + date.nanoseconds / 1000000);
};

export const NoticiasPage = () => {


  const [data, setData] = useState<notasInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "publicaciones"));
      const items = querySnapshot.docs.map((doc) => doc.data() as notasInterface);
      items.sort((a, b) => atToDate(b.publishAt).getTime() - atToDate(a.publishAt).getTime());
      setData(items);
    };
    fetchData();
  }, []);

 
  console.log(data);
  return (
    <div style={{ backgroundColor: "#f6f6f6", borderRadius: 30 }}>
      <Flex justify="center">
        <Title level={1}>Noticias</Title>
      </Flex>
      <Divider>Notas</Divider>

  
      <Row justify="center" style={{ padding: 20 }}>

      {data.map(({ titulo, excerpt, imagen, createdAt, id }, index) => {
          const dateString = atToDate(createdAt).toLocaleDateString(); // Convertir At a string
          return (
            <NoticiasCard
              title={titulo}
              descripcion={excerpt}
              img={imagen}
              key={index}
              date={dateString}
              id={id}
            /> );
          })}
     
      </Row>
    </div>
  );
};
