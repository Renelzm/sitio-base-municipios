import { Divider } from "antd"
import { Image } from 'antd';


export const Fotogaleria = () => {
  return (
    <>
        <Divider>Lugares</Divider>
{/* https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/pueblos-magicos-coahuila.jpg?resize=1280%2C640&ssl=1 */}
<Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <Image height={200} src=" https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/pueblos-magicos-coahuila.jpg?resize=1280%2C640&ssl=1" />
    <Image
      height={200}
      src="https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Arteaga.jpg?w=700&ssl=1"
    />
     <Image
      height={200}
      src="https://as2.ftcdn.net/v2/jpg/05/40/79/27/1000_F_540792725_CDv1KU3Cuf3M0lKT9OsGwgneGhuktKz7.jpg"
    />
       <Image
      height={200}
      src="https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Candela.jpg?w=700&ssl=1"
    />
       <Image
      height={200}
      src="https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Cuatro_cienegas.jpg?w=700&ssl=1"
    />
       <Image
      height={200}
      src="https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2022/07/Muzquiz.jpg?w=700&ssl=1"
    />
  </Image.PreviewGroup>

        
        
        
        </>
  )
}
