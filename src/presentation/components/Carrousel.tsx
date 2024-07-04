import { Carousel, Col, Row, Image} from "antd";

interface CarrouselProps {
    bannersData: { url: string }[];
  }
  
  export const Carrousel: React.FC<CarrouselProps> = ({ bannersData }) => {
    const banners = bannersData
  return (
    <Row justify="center" >
      <Col id="container" span={24} style={{ padding: 10}}  lg={{ span: 24 }} xl={{ span: 18}}>
        <Carousel arrows style={{ alignItems: "center", width: "100%"}} adaptiveHeight autoplay>
        {banners.map((banner, index) => (
            <Col key={index} >
                <Image src={banner.url} alt={`Banner ${index + 1}`} width="100%"/>
            </Col>
        ))}     
        </Carousel>
      </Col>
    </Row>
  );
};
