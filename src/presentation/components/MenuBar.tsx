import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd"
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";


// import { useNavigate } from "react-router-dom";

const menuData = [
    { key: "/", label: 
        <Link to={"/"}>
            <HomeOutlined style={{ fontSize: '20px', color: 'white', marginRight: '10px'}}/>
            Home
        </Link>
    },
    { key: 'nosotros', label: <Link to={"/nosotros"}>Nosotros</Link> },
    { key: 'quienes_somos', label: <Link to={"/"}>Quienes somos</Link>},
    { key: 'contacto', label:  <Link to={"/contacto"}>Contacto</Link>}
    ];


export const MenuBar = () => {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState('/');
    useEffect(() => {
        setSelectedKey(location.pathname);
      }, [location]);
      
  return (
    <>
   

        <Menu
        // onClick = {({key}) => { navigate(key);}}

        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={menuData.map(item => ({
            ...item,
            style: { 
                borderRadius: item.key === selectedKey ? '30px' : '30px',
                backgroundColor: item.key === selectedKey ? "#2c323a" : 'inherit',
                padding: '0px 40px',
            
            }
          }))}
        style={{ flex: 1, minWidth: 0, alignItems: 'center', justifyContent: 'center'}}
        
        
        />
       

        
       
    </>
  )
}
