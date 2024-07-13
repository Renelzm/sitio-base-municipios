import {
  Button,
  Col,
  QRCode,
  Row,
  Space,
  Typography,
  List,
  Divider,
} from "antd";
import Title from "antd/es/typography/Title";
import { TramiteProps } from "../../interfaces/tramitesInterface";
import { DownloadOutlined } from "@ant-design/icons";

const { Text } = Typography;

export const Tramite: React.FC<TramiteProps> = ({ data }) => {

  return (
    <>
      <Row justify="center" align="middle">
        <Col span={24} style={{ textAlign: "left" }}>
          <Col span={24} style={{ textAlign: "left" }}>
            <Title level={2}>{data.nombre}</Title>
            <Text type="secondary">
              Unidad Administrativa: {data.unidad_administrativa}
            </Text>
            <br />
            <Text type="secondary">Clave: {data.clave}</Text>
          </Col>
          <Divider orientation="left">Descripción</Divider>

          <Text>{data.descripcion}</Text>
          <Divider orientation="left">Costo</Divider>

          <Text>{data.costo}</Text>

          <Divider orientation="left"> Datos Generales</Divider>

          <Col style={{}}>
            <Text strong>Duración: </Text> <Text>{data.duracion}</Text> <br />
            <Text strong>Tipo:</Text>{" "}
            <Text>{data.presencial ? "Presencial" : "En linea"}</Text> <br />
            <Text strong>Quien puede solicitarlo:</Text>{" "}
            <Text>{data.puede_solicitar}</Text> <br />
            <Text strong>Vigencia:</Text> <Text>{data.vigencia}</Text> <br />
          </Col>

          <List
            style={{ marginTop: "10px", padding: 10 }}
            dataSource={data.procedimiento}
            size="small"
            bordered
            header={
              <Text strong style={{ color: "#408080" }}>
                Procedimiento:
              </Text>
            }
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Typography.Text>{index + 1} - </Typography.Text> {item}
              </List.Item>
            )}
          ></List>

          <List
            style={{ marginTop: "10px", padding: 10 }}
            dataSource={data.requisitos}
            size="small"
            bordered
            header={
              <Text strong type="warning" underline>
                Requisitos:
              </Text>
            }
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Typography.Text>{index + 1} - </Typography.Text> {item}
              </List.Item>
            )}
          ></List>
        </Col>

        {data.descargas.map((descarga, index) => (
          
          <Col
            key={index}
            span={12}
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
            xxl={{ span: 8}}
            style={{ textAlign: "center" }}
          >
            <Title level={5}>{descarga.nombre}</Title>
       
            <Text >Escanear código QR</Text><br />
            <Space direction="vertical" align="center">
              <QRCode value={descarga.url} />
            </Space> <br />
            <Button ghost  type="primary" shape="round" icon={<DownloadOutlined />} onClick={() =>window.location.href = descarga.url } > Descargar</Button>
           
          
          </Col>
       
        ))}

      </Row>
    </>
  );
};
