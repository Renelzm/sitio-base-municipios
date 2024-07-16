
import { Layout, Row, Col, Typography, Divider } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { Image } from 'antd';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const { Text , Title} = Typography


const {  Footer } = Layout;


export const FooterComponent = () => {
 
  const {email, telefono, direccion, redesSociales, sitiosInteres} = useSelector((state: RootState) => state.municipal);
  
  const centerCoordinates: LatLngExpression = [25.528049,-103.2305507];

    return (
      <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '40px', marginTop: 40}}>
        <Divider
          style={{ border: '1px solid white', margin: 0}}></Divider>
         
        {/* <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha384-xodZBNTC5n17Xt2JyDBaSM1ykpDydk7KR4e1o0hyBD1f1F0Q6wE6wr5Kwl9UYNfi"
            crossOrigin=""
          />
        </Helmet> */}
      
        <Row gutter={[16, 16]} justify="center">
  
          <Col xs={24} sm={12} md={6} style={{textAlign: "left"}}>
          
            <Title level={3} style={{ color: 'white' }}>Contacto</Title>
            <Text style={{ color: 'white' }}>Teléfono: {telefono}</Text>
            <br />
            <Text style={{ color: 'white' }}>Dirección: {direccion}</Text>
            <br />
            <Text style={{ color: 'white' }}>Email: {email}</Text>
            <Title level={3} style={{ color: 'white' }}>Redes Sociales</Title>
          {
            redesSociales.facebook && (<><Text style={{ color: 'white' }}><a href={redesSociales.facebook} style={{ color: 'white' }}><FacebookOutlined /> Facebook </a></Text>  <br /></>)
          }
          {
            redesSociales.twitter && (<><Text style={{ color: 'white' }}><a href={redesSociales.twitter} style={{ color: 'white' }}></a><TwitterOutlined /> Twitter </Text>  <br /></>)
          }
          {
            redesSociales.instagram && (<><Text style={{ color: 'white' }}><a href={redesSociales.instagram} style={{ color: 'white' }}><InstagramOutlined /> Instagram </a></Text>  <br /></>)
          }

          </Col>
         

                   
          <Col xs={24} sm={12} md={6} style={{textAlign: "center"}}>
            <Title level={3} style={{ color: 'white' }}>Mapa</Title>
            <MapContainer center={centerCoordinates} zoom={13} style={{ height: '230px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* <Marker position={markerCoordinates}>
                <Popup>
                  Aquí estamos.
                </Popup>
              </Marker> */}
            </MapContainer>
          </Col>
          <Col xs={24} sm={12} md={6}  style={{textAlign: "left", marginLeft: 60}}>

          <Title level={3} style={{ color: 'white' }}>Sitios de interés</Title>
          {sitiosInteres.map((sitio, index) => (
            <div key={index} ><Text  style={{ color: 'white' }}>
              <Image
              height={20}
              src={sitio.logo}
              /> 
              <a href={sitio.url} style={{ color: 'white' }}> {sitio.nombre}</a>
            </Text> <br /></div>
          ))}

          </Col>
         
          <Col span={24} style={{textAlign:"center"}}>
          <Divider
          style={{ border: '2px solid white'}}></Divider>
           ©{new Date().getFullYear()} Creado por SEA Coahuila
          </Col>
        </Row>
      </Footer>
    );
  };
  
