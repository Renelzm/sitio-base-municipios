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
];import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export const TramitesPage = () => {
  return (
    <div>TramitesPage</div>
  )
}
