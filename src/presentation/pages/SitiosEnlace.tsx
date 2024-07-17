import { Divider, Flex } from "antd";
import { SitiosLocalesCard } from "../components/SitiosLocalesCard"
import Title from "antd/es/typography/Title";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";








export const SitiosEnlace = () => {
  const { lugaresTuristicos} = useSelector(((state: RootState) => state.municipal ));

  return (
    <>
    <Flex justify="center">
        <Title level={1}>Conoce nuestro municipio </Title>
        {/* {isLoading && <div className="loader"></div>} */}
      </Flex>
      <Divider ></Divider>
    {lugaresTuristicos.map((place, index) => (
        <SitiosLocalesCard key={index} place={place} />
      ))}
    </>
  )
}

