import { Card, Col, Typography, Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

interface SeguridadCardProps {
    title: string;
    description: string;
    contact: string;
    img?: string;
}

export const SeguridadCard: React.FC<SeguridadCardProps> = ({ title, description, contact, img }) => {
    return (
        <Col
        span={12}
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
        xxl={{ span: 6 }}
        style={{ marginTop: 20,  display: 'flex', justifyContent: 'center' }}
    >
        <Card
            hoverable
            bordered={false}
            style={{
                width: 300,
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
           
            }}
            cover={img ? (
                <div style={{ position: 'relative' }}>
                    <img 
                        alt={title} 
                        src={img} 
                        style={{ 
                            height: 200, 
                            width: '100%', 
                            objectFit: 'cover',
                            transition: 'transform 0.3s',
                            borderRadius: '20px 20px 0 0'
                        }} 
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6))',
                        borderRadius: '20px 20px 0 0'
                    }} />
                </div>
            ) : null}
        >
            <Title level={4} style={{ color: '#001529', marginTop: 10 }}>{title}</Title>
            <Text style={{ color: '#595959', padding: '0 15px' }}>{description}</Text> <br />
            <Button 
                type="primary" 
                shape="round" 
                icon={<PhoneOutlined />} 
                style={{ marginTop: 20, backgroundColor: '#1890ff', borderColor: '#1890ff', color: '#fff' }}
            >
                {contact}
            </Button>
        </Card>
    </Col>
    );
};