import { Carrousel } from "../components/Carrousel"


export const LandingPage = () => {

  const setBanners = [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202024-04-30%20at%2010.08.48.jpeg?alt=media&token=8c4ebaf9-716d-462f-85db-6cc7550e9716",
        },
        {
          url: "https://www.cpccoahuila.org.mx/_nuxt/img/banner-iniciativa.c23be4d.jpg"
        }
        ,
        {
          url: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/pagina_web%2FbannerDibujaTusValores2023.jpeg?alt=media&token=d27126e2-e7a1-4f42-a847-9d070d958398"
        }
    ]
  return (
    <>
    
    <Carrousel bannersData = {setBanners}/>
    
    </>
  )
}
