
import { Button, Col, Row } from 'antd';
import { BsNewspaper } from "react-icons/bs";
import { FcLandscape, FcSearch  } from "react-icons/fc";
import { IoQrCodeOutline } from "react-icons/io5";


import { Link } from 'react-router-dom';



export const NavegadorBotonera = () => {
    const buttonData = [
    {
      key: "1",
      label: "Noticias",
      icon: <BsNewspaper size="30" color="#008591"/>,
      link: "/noticias"
    },
    {
      key: "2",
      label: "Trámites",
      icon: <IoQrCodeOutline  size="30" color="orange"/>,
      link: "/tramites"
    },
    {
      key: "3",
      label: "Transparencia",
      icon: <FcSearch size="30" />,
      link: "/transparencia"
    },
    {
      key: "4",
      label: "Sitios",
      icon: <FcLandscape size="30"/>,
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