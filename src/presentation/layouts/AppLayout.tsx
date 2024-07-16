import "../../App.css";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Logo, NavegadorBotonera, MenuBar } from "../components/landingPage/";
import { FooterComponent } from "../components/landingPage/FooterComponent";


const { Header, Content } = Layout;

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
          <FooterComponent/>
    </Layout>
  );
}

export default AppLayout;
