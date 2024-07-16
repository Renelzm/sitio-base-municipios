
import { Layout, Row, Col, Typography } from 'antd';
// import {Helmet} from "react-helmet";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { Image } from 'antd';
const { Text , Title} = Typography


const {  Footer } = Layout;

export const FooterComponent = () => {
    const centerCoordinates: LatLngExpression = [25.528049,-103.2305507];
    // const markerCoordinates: LatLngExpression = [25.528049,-103.2305507];
  
    return (
      <Footer style={{ backgroundColor: '#001529', color: 'white', padding: '40px', marginTop: 40}}>
         
        {/* <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha384-xodZBNTC5n17Xt2JyDBaSM1ykpDydk7KR4e1o0hyBD1f1F0Q6wE6wr5Kwl9UYNfi"
            crossOrigin=""
          />
        </Helmet> */}
      
        <Row gutter={[16, 16]} justify="center">
        
          <Col xs={24} sm={12} md={6} style={{textAlign: "center"}}>
            <Title level={3} style={{ color: 'white' }}>Contacto</Title>
            <Text style={{ color: 'white' }}>Teléfono: +1 234 567 890</Text>
            <br />
            <Text style={{ color: 'white' }}>Dirección: Calle Falsa 123, Ciudad, País</Text>
            <br />
            <Text style={{ color: 'white' }}>Email: info@gobierno.com</Text>

          </Col>
         
          <Col xs={24} sm={12} md={6} style={{textAlign: "center"}}>
          <Title level={3} style={{ color: 'white' }}>Redes Sociales</Title>
            <Text style={{ color: 'white' }}>Facebook: <a href="https://facebook.com" style={{ color: 'white' }}>fb.com/gobierno</a></Text>
            <br />
            <Text style={{ color: 'white' }}>Twitter: <a href="https://twitter.com" style={{ color: 'white' }}>twitter.com/gobierno</a></Text>
            <br />
            <Text style={{ color: 'white' }}>Instagram: <a href="https://instagram.com" style={{ color: 'white' }}>instagram.com/gobierno</a></Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={3} style={{ color: 'white' }}>Mapa</Title>
            <MapContainer center={centerCoordinates} zoom={13} style={{ height: '200px', width: '100%' }}>
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
          <Col xs={24} sm={12} md={6}>

            <Title level={3} style={{ color: 'white' }}>Sitios de interés</Title>
            <Text style={{ color: 'white' }}> 
            
            <Image
                height={20}
                src="https://seeklogo.com/images/G/gobierno-de-coahuila-logo-EB7B72A25D-seeklogo.com.png"
                /> 
                
                <a href="https://twitter.com" style={{ color: 'white' }}> Gobierno del Estado de Coahuila de Zaragoza</a></Text> <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="https://www.seacoahuila.org.mx/_nuxt/img/sea-icon.c05bbee.png"
                /> 
                <a href="https://www.seacoahuila.org.mx/" style={{ color: 'white' }}> Sistema Estatal Anticorrupción del Estado de Coahuila</a></Text>
       
            <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="https://www.sefircoahuila.gob.mx/wp-content/uploads/2021/04/logo_coah_veda_2021_separado_gri.png"
                /> 
                <a href="https://www.sefircoahuila.gob.mx/" style={{ color: 'white' }}> Secretaría de Fiscalización y Rendición de Cuentas</a></Text>
       
            <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="http://www.icai.org.mx/images/images/logo_icai.png"
                /> 
                <a href="http://www.icai.org.mx/" style={{ color: 'white' }}>Instituto Coahuilense de Acceso a la Información</a></Text>
       
            <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="https://www.sefircoahuila.gob.mx/wp-content/uploads/2021/04/logo_coah_veda_2021_separado_gri.png"
                /> 
                <a href="https://www.pjecz.gob.mx/" style={{ color: 'white' }}> Poder Judicial del Estado de Coahuila</a></Text>
       
            <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="https://www.pjecz.gob.mx/theme/images/sitios-interes-congresocoah.png"
                /> 
                <a href="https://www.congresocoahuila.gob.mx/coahuila/" style={{ color: 'white' }}> Congreso del Estado de Coahuila</a></Text>
       
            <br />
            <Text style={{ color: 'white' }}>
            <Image
                height={20}
                src="https://redespoder.com/wp-content/uploads/2018/04/AUDTO.png"
                /> 
                <a href="https://www.asecoahuila.gob.mx/" style={{ color: 'white' }}> Auditoria Superior del Estado de Coahuila</a></Text>
       
            <br />
            
            
          </Col>
        </Row>
      </Footer>
    );
  };
  
