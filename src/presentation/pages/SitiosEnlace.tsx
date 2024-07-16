import { SitiosLocalesCard } from "../components/SitiosLocalesCard"

const places = [
  {
    name: 'Museo del Desierto',
    description: 'Un lugar lleno de historia y cultura.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Museo_del_Desierto%2C_Saltillo%2C_Coahuila.jpg',
    features: ['Histórico', 'Educativo', 'Familiar']
  },
  {
    name: 'Palacio',
    description: 'Ícono de la vida cultural del Estado, es la institución más antigua dedicada a la enseñanza superior en Coahuila. Las obras murales que decoran el vestíbulo fueron creación de Salvador Toscano y Miguel Santana. Este recinto ha marcado la vida de los coahuilenses, su imagen forma parte del escudo de armas de Saltillo. Aloja una sala de historia natural, una sala de arte colonial y una pinacoteca de arte mexicano con una magnífica colección de obras de grandes pintores. Lleva este nombre porque Saltillo fue nombrada la Atenas de México por su fomento a las artes y la ciencia.',
    image: 'https://viveloensaltillo.com/wp-content/uploads/2018/08/1254x851palaciogob-768x521.png',
    features: ['Gobierno', 'Arquitectura']
  }
];

export const SitiosEnlace = () => {
  return (
    <>
    
    {places.map((place, index) => (
        <SitiosLocalesCard key={index} place={place} />
      ))}
    </>
  )
}

