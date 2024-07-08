import { FolderTwoTone, PlusCircleTwoTone, WalletTwoTone } from "@ant-design/icons";
import {  Divider, Flex,  Tabs } from "antd";
import type { TabsProps } from "antd";
import Title from "antd/es/typography/Title";

import { Grid } from 'antd';
import { Tramite } from "../components/Tramite";

const { useBreakpoint } = Grid;

const onChange = (key: string) => {
  console.log(key);
};



const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Licencia de uso de suelo",
    children: <Tramite />,
    icon: <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />,
    disabled: false,
    
  },
  {
    key: "2",
    label: "Pago de predial",
    children: <Tramite />,
    icon: <WalletTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />,
    disabled: true
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
    icon: <PlusCircleTwoTone twoToneColor="#236487" style={{ fontSize: "25px" }}/>,
    disabled: false
  },
];

export const TramitesPage = () => {
  const screens = useBreakpoint();



  return (
    <>
      <Flex justify="center">
        <Title level={1}>Trámites</Title>
      </Flex>
      <Divider/>

      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        tabPosition={ screens.xs ? "top" : "left"}
         type="card"
         size="small"     
      />
    </>
  );
};
