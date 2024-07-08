import { Card, Col, Flex, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
const { Text } = Typography;
interface NoticiasCardProps {
    title?: string;
    descripcion?: string;
    img?: string;
    date?: string;
    to?: string;
  }

export const NoticiasCard: React.FC<NoticiasCardProps> = ({ title = "Nota", descripcion = "...", img = "https://significado.com/wp-content/uploads/not.jpg", date = "??/??/????", to = "/noticias"}) => {
  return (
    <>
<Col span={12} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 8}} xxl={{ span: 6 }}
style={{marginTop: 20}}>
<Flex justify="center" >
<Card
  onClick={ () =>{window.location.href = `${to}/${title}`}}
  hoverable
  style={{ width: 340, padding: 2, background: "#001529",borderRadius: 40 }}
  cover={<img alt="imagen nota" src={img} style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 40, padding:4}} />}
>
  <Meta  title={<span style={{ color: '#d5e6ec' }}>{title}</span>} description={<span style={{ color: 'white' }}>{descripcion} </span>}style={{ height: 100}} />
  <Text italic strong type="secondary" ><span style={{ color: 'white' }}>Fecha: {date}</span></Text>
</Card>
</Flex>
</Col>
   
    
    

    </>
  )
}
