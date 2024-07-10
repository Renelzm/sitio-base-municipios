import { DesktopOutlined, PaperClipOutlined, ReadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';



export const NavegadorBotonera = () => {
    const buttonData = [
    {
      key: "1",
      label: "Noticias",
      icon: <ReadOutlined />,
      link: "/noticias"
    },
    {
      key: "2",
      label: "Trámites",
      icon: <PaperClipOutlined />,
      link: "/tramites"
    },
    {
      key: "3",
      label: "Transparencia",
      icon: <SearchOutlined />,
      link: "/transparencia"
    },
    {
      key: "4",
      label: "Sitios de interes",
      icon: <DesktopOutlined />,
      link: "/sitios"
    },
  ];
  return (
    <Row justify="center" >
      
      {buttonData.map((button) => (
        <Col span={24} xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} key={button.key} style={{ padding: 5 }}>
          <Link to={button.link}>
          <Button icon={button.icon} size="large" block >
            {button.label}
          </Button>
          </Link>
        </Col>
      ))}

    </Row>
  );
};