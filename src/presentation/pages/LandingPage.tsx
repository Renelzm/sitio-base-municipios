import { Row } from "antd"
import { Fotogaleria, Carrousel, HabitantesComponent } from "../components/landingPage"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";




export const LandingPage = () => {

const {banners, habitantes} = useSelector((state: RootState) => state.municipal);
 
  return (
    <>
    
   
    <Row justify="center" >
    <Carrousel bannersData = {banners}/>
    <HabitantesComponent habitantes = {habitantes}/>
    <Fotogaleria/>
    </Row>
    </>
  )
}
