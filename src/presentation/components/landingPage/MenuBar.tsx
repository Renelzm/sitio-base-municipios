import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const menuData = [
  {
    key: "/",
    label: (
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        <HomeOutlined style={{ fontSize: '20px', color: 'white', marginRight: '10px' }} />
        Inicio
      </NavLink>
    )
  },
  {
    key: "/nosotros",
    label: (
      <NavLink
        to="/nosotros"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Nosotros
      </NavLink>
    )
  },
  {
    key: "/Seguridad",
    label: (
      <NavLink
        to="/Seguridad"
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      >
        Seguridad y Bienestar
      </NavLink>
    )
  },
  // {
  //   key: "/contacto",
  //   label: (
  //     <NavLink
  //       to="/contacto"
  //       className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
  //     >
  //       Contacto
  //     </NavLink>
  //   )
  // }
];

export const MenuBar = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('/');

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
  
      items={menuData.map(item => ({
        ...item,
        style: {
          borderRadius: '30px',
          backgroundColor: item.key === selectedKey ? "#2c323a" : 'inherit',
          padding: '0px 30px',
          height: '50px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '13px',
        }
      }))}
      style={{ flex: 1, minWidth: 0, alignItems: 'center', justifyContent: 'center' }}
    />
  );
};
