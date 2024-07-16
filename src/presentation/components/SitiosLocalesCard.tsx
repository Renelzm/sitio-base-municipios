
import { Card, Col, Row, Typography, Tag, Image } from 'antd';

const { Title, Text } = Typography;

interface placeProps {
    place: {
        name: string;
        description: string;
        features: string[];
        image: string;
    }
}

export const SitiosLocalesCard: React.FC<placeProps> = ({place }) => {
  return (
    <>
    
    <Card style={{ margin: '20px' }}>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Image
            src={place.image}
            alt={place.name}
            style={{ width: '100%', borderRadius: '80px' }}
          />
        </Col>
        <Col xs={24} md={16}>
          <Title level={4}>{place.name}</Title>
          <Text>{place.description}</Text>
          <div style={{ marginTop: '10px' }}>
            {place.features.map((feature, index) => (
              <Tag color="blue" key={index}>
                {feature}
              </Tag>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
    
    </>
  )
}
