import { Col, Image, Row, Typography } from "antd";

const { Title } = Typography;

export const Logo = () => {

  const data = {
    name: "Municipio de Matamoros Coahuila",
    img: "https://www.matamoroscoahuila.gob.mx/wp-content/uploads/2022/11/cropped-cropped-cropped-logo-GOBIERNOmpal-1024x277-1-1-e1691610713688-1.png",
  };
  
  return (
   
    <>
      <Row  style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', background: "#001529"}}>
        <Col span={24} 
         style={{ color: "white", textAlign: "center" , marginTop: 12}}
        >
          <Image
            width={200}
            src={data.img}
          />
          <Title 
          style={{ color: "white", marginLeft: 12, textAlign: "center" }}
          level={1}
          >
            {data.name}
          </Title>
        </Col>
      </Row>
    </>
  );
};
