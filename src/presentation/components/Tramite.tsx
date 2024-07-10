import { Button, Col, QRCode, Row, Space } from "antd";
import Title from "antd/es/typography/Title";

export const Tramite = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col
          span={12}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
          style={{ textAlign: "left" }}
        >
          <Title level={2}>Liciencia de uso de suelo:</Title>
          <h3>Descripción:</h3>
          <p>
            Liciencia de uso de suelo tramitado por el departamento de
            urbanismos
          </p>

          <p>Requisitos:</p>

          <ol>
            <li>Costo de la licencia</li>
            <li>Uso de suelo</li>
          </ol>
        </Col>
        <Col
          span={12}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
          style={{ textAlign: "center" }}
        >
          <Title level={3}>Código QR</Title>
          <Space direction="vertical" align="center">
            <QRCode value={"https://www.seacoahuila.org.mx/"} />
          </Space>
          <Title level={3}>Documento para acreditar ..</Title>
          <Button type="primary">Descargar</Button>
        </Col>

        <Col
          span={12}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
          style={{ textAlign: "center" }}
        >
          <Title level={3}>Código QR</Title>
          <Space direction="vertical" align="center">
            <QRCode value={"https://www.seacoahuila.org.mx/"} />
          </Space>
          <Title level={3}>Licencia de ...</Title>
          <Button type="primary">Descargar</Button>
        </Col>
        <Col
          span={12}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
          style={{ textAlign: "center" }}
        >
          <Title level={3}>Código QR</Title>
          <Space direction="vertical" align="center">
            <QRCode value={"https://www.seacoahuila.org.mx/"} />
          </Space>
          <Title level={3}>
            Constancia de elementos para acreditar uso general
          </Title>
          <Button type="primary">Descargar</Button>
        </Col>
      </Row>
    </>
  );
};
