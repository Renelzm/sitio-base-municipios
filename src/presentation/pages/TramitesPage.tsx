import { FolderOpenTwoTone, FolderTwoTone } from "@ant-design/icons";
import {  Divider, Flex,  Tabs } from "antd";
import type { TabsProps } from "antd";
import Title from "antd/es/typography/Title";
import { Grid } from 'antd';
import { Tramite } from "../components/Tramite";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { TopLevel } from "../../interfaces/tramitesInterface";

const { useBreakpoint } = Grid;



const onChange = (key: string) => {
  console.log(key);
};


  
export const TramitesPage = () => {
  const screens = useBreakpoint();
  const [tramites, setTramite] = useState<TopLevel[]>([]);
  const [activeKey, setActiveKey] = useState<string>("1");



  useEffect(() => {
  
    const fetchData = async () => {
      
      const querySnapshot = await getDocs(collection(db, "tramites"));
      console.log("Base de datos consultada");
      const items = querySnapshot.docs.map((doc, index) => { 
        const data = doc.data() as TopLevel;
        return {
          ...data,
          key: (index + 1).toString(),
          label: data.nombre,
          children: <Tramite data={data}  />,
        };
      });
 
    
      setTramite(items);
    };
    fetchData();
    
  }, []);

// <FolderOpenTwoTone />
 const handleTabCange = (key: string) => {
   setActiveKey(key);
   onChange(key);
 }

 const getIcon = (key: string) => {
  if (key === activeKey) {
    return <FolderOpenTwoTone twoToneColor="#0ba391" style={{ fontSize: "25px" }} />;
  } else {
    return <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />;
  }
};

  return (
    <>
      <Flex justify="center">
        <Title level={1}>Trámites</Title>
      </Flex>
      <Divider/>

      <Tabs
        defaultActiveKey="1"
        items={tramites.map( (tramite) => ({
          ...tramite,
          icon: getIcon(tramite.key)
        })) as TabsProps["items"]}
        onChange={handleTabCange}
        tabPosition={ screens.xs ? "top" : "left"}
         type="card"
         size="small"
         
      />
    </>
  );
};