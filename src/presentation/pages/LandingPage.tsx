import { Row } from "antd"
import { Fotogaleria, Carrousel } from "../components/landingPage"



export const LandingPage = () => {

  const setBanners = [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202024-04-30%20at%2010.08.48.jpeg?alt=media&token=8c4ebaf9-716d-462f-85db-6cc7550e9716",
        },
        {
          url: "https://www.cpccoahuila.org.mx/_nuxt/img/banner-iniciativa.c23be4d.jpg"
        }
      
    ]
  return (
    <>
    
   
    <Row justify="center" >
    <Carrousel bannersData = {setBanners}/>
    <Fotogaleria/>
    </Row>
    </>
  )
}
