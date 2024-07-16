import { Divider } from "antd"
import { Image } from 'antd';
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";


export const Fotogaleria = () => {
  const {fotoGaleria} = useSelector((state: RootState) => state.municipal);
  return (
    <>
        <Divider>Lugares</Divider>

<Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    {
      fotoGaleria.map((foto, index) => (
        <Image key={index} height={200} src={foto.src} />
      ))
    }
  
   
  </Image.PreviewGroup>

        
        
        
        </>
  )
}
