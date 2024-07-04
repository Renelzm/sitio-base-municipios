import "../../App.css";
import { Layout, theme } from "antd";

import { MenuBar } from "../components/MenuBar";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { NavegadorBotonera } from "../components/NavegadorBotonera";
const { Header, Content, Footer } = Layout;

function AppLayout() {
  // const [count, setCount] = useState(0)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Logo />
      <Header style={{ display: "flex", alignItems: "center" }}>
        <MenuBar />
      </Header>
      <NavegadorBotonera />

      <Content style={{ padding: "0 10px", flex: "1" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "calc(90vh - 200px)",
            padding: 20,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} SEAC - USI
      </Footer>
    </Layout>
  );
}

export default AppLayout;
