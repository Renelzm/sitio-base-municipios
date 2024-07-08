import { FolderTwoTone, PlusCircleTwoTone, WalletTwoTone } from "@ant-design/icons";
import { Button, Divider, Flex, QRCode, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import Title from "antd/es/typography/Title";

import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const onChange = (key: string) => {
  console.log(key);
};

const qr = (
  <>
    <h2>Liciencia de uso de suelo:</h2>
    <h3>Descripión:</h3>
    <p>
      {" "}
      Liciencia de uso de suelo tramitado por el departamento de urbanismos
    </p>
    <p>Requisitos:</p>
    <ol>
      <li>Costo de la licencia</li>
      <li>Uso de suelo</li>
    </ol>
    <span>Descargar documento:</span> <br />
    <Button type="primary">Descargar</Button>
    <br />
    <h3>Codigo qr para descargar el documento</h3>
    <Space direction="vertical" align="center">
      <QRCode value={"www.google.com"} />
    </Space>
  </>
);

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Licencia de uso de suelo",
    
    children: qr,
    icon: <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />,
  },
  {
    key: "2",
    label: "Pago de predial",
    children: qr,
    icon: <WalletTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />,
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
    icon: <PlusCircleTwoTone twoToneColor="#236487" style={{ fontSize: "25px" }}/>,
  },
];

export const TramitesPage = () => {
  const screens = useBreakpoint();


  console.log(screens.xs);

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
