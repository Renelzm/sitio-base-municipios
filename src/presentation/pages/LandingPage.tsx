import { Row } from "antd"
import { Fotogaleria, Carrousel } from "../components/landingPage"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";



export const LandingPage = () => {

const {banners} = useSelector((state: RootState) => state.municipal);
 
  return (
    <>
    
   
    <Row justify="center" >
    <Carrousel bannersData = {banners}/>
    <Fotogaleria/>
    </Row>
    </>
  )
}
