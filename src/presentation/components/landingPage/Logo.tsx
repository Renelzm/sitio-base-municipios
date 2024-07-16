import { Col, Image, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


const { Title } = Typography;

export const Logo = () => {


  const {nombreInstitucion, logoUrl} = useSelector((state: RootState) => state.municipal);

  return (
   
    <>
      <Row  style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', background: "#001529"}}>
  
        <Col span={24} 
         style={{ color: "white", textAlign: "center" , marginTop: 12}}
        >
          <Image
            width={200}
            src={logoUrl}
          />
          <Title 
          style={{ color: "white", marginLeft: 12, textAlign: "center" }}
          level={1}
          >
            {nombreInstitucion}
          </Title>
        </Col>
      </Row>
    </>
  );
};
