import { Card, Col, Flex, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
const { Text } = Typography;
import { useNavigate } from 'react-router-dom';

interface NoticiasCardProps {
    title?: string;
    descripcion?: string;
    img?: string;
    date?: string;
    to?: string;
    id: number
  }

export const NoticiasCard: React.FC<NoticiasCardProps> = ({ title = "Nota", descripcion = "...", img = "https://significado.com/wp-content/uploads/not.jpg", date = "??/??/????", to = "/noticias", id}) => {
  
  const navigate = useNavigate();
  return (
    <>
<Col span={12} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8}} xxl={{ span: 6 }}
style={{marginTop: 20}}>
<Flex justify="center" >
<Card
  onClick={ () => navigate(`${to}/${id}` )}
  hoverable
  bordered={false}
  style={{ width: 340, background: "#25415B",  borderRadius: 50}}
  cover={<img alt="imagen nota" src={img} style={{ height: 250, objectFit: 'cover', borderTopLeftRadius: 40}} />}
>
  <Meta  title={<span style={{ color: '#d5e6ec' }}>{title}</span>} description={<span style={{ color: '#E0E5E9' }}>{descripcion} </span>}style={{ height: 100}} />
  <Text italic strong type="secondary" ><span style={{ color: 'white' }}>Fecha: {date}</span></Text>
</Card>

</Flex>
</Col>
   
    
    

    </>
  )
}
