import { Card, Col, Flex, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

interface NoticiasCardProps {
    title?: string;
    descripcion?: string;
    img?: string;
    date?: string;
    to?: string;
    id: number;
}

export const NoticiasCard: React.FC<NoticiasCardProps> = ({ title = "Nota", descripcion = "...", img = "https://significado.com/wp-content/uploads/not.jpg", date = "??/??/????", to = "/noticias", id }) => {
    const navigate = useNavigate();

    return (
        <Col
            span={12}
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            xxl={{ span: 6 }}
            style={{ marginTop: 20 }}
        >
            <Flex justify="center">
                <Card
                    onClick={() => navigate(`${to}/${id}`)}
                    hoverable
                    bordered={false}
                    style={{ 
                        width: 340, 
                        backgroundColor: "#f0f2f5", 
                        borderRadius: 20, 
                        overflow: "hidden",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                    }}
                    cover={
                        <img 
                            alt="imagen nota" 
                            src={img} 
                            style={{ 
                                height: 200, 
                                objectFit: 'cover' 
                            }} 
                        />
                    }
                >
                    <Meta 
                        title={<Text style={{ color: '#001529', fontWeight: 'bold', fontSize: '1.2em' }}>{title}</Text>} 
                        description={<Text style={{ color: '#595959', fontSize: '1em' }}>{descripcion}</Text>} 
                        style={{ height: 100 }} 
                    />
                    <Text italic strong type="secondary" style={{ display: 'block', marginTop: 10 }}>
                        <span style={{ color: '#8c8c8c' }}>Fecha: {date}</span>
                    </Text>
                </Card>
            </Flex>
        </Col>
    );
};