
import {  PiAirplaneTaxiingDuotone, PiArchiveFill, PiArchiveThin, PiArticleThin, PiBagSimpleBold, PiBookOpenText, PiBuilding, PiBulldozerThin, PiCalendar, PiCalendarPlusDuotone, PiCardsThreeBold
    , PiChatCircleSlashDuotone, PiChats, PiCirclesThreePlusDuotone, PiClipboardTextDuotone, PiCoffeeThin, PiComputerTowerLight,
     PiCubeTransparentLight, PiCurrencyDollarFill, PiDeskDuotone, PiDotsThreeOutline, PiExcludeDuotone, PiEyeDuotone, PiFactoryBold, 
     PiFolderSimpleDashedThin, PiFolderSimpleUserDuotone, PiFoldersLight, PiHandshakeLight, PiLampPendantFill, PiListPlusThin, PiNewspaperDuotone, 
     PiPlusCircleLight, PiScalesBold, PiTornado, PiUserCheckLight, PiUserListDuotone, PiUsersFourDuotone, PiWallet } from "react-icons/pi";
import { Card, List } from "antd"
import { useNavigate } from "react-router-dom";

interface TranparenciaProps {
    titulo: string;
}



const iconSize = 50
const fracciones = [{
    titulo: 'Estructura Orgánica',
    to: '21-1',
    icon: <PiUsersFourDuotone size={iconSize} color="purple" />
  },
  {
    titulo: 'Marco normativo',
    to: '21-2',
    icon: <PiScalesBold size={iconSize}/>
  },
  {
    titulo: 'Directorio de los servidores públicos',
    to: '21-3',
    icon: <PiUserListDuotone  size={iconSize} />
  },
  {
    titulo: 'Nombramientos, comisiones y licencias',
    to: '21-4',
    icon: <PiFoldersLight size={iconSize} color="gray" />
  },
  {
    titulo: 'Remuneración mensual',
    to: '21-5',
    icon: <PiCurrencyDollarFill  size={iconSize} color="green" />
  },
  {
    titulo: 'Declaración Patrimonial',
    to: '21-6',
    icon: <PiUserCheckLight  size={iconSize} color="gray" />
  },
  {
    titulo: 'Viáticos y gastos de representación',
    to: '21-7',
    icon: <PiAirplaneTaxiingDuotone  size={iconSize} color="orange" />
  },
  {
    titulo: 'Perfil de puestos y currículum',
    to: '21-8',
    icon:  <PiBookOpenText  size={iconSize} color="gray" />
  },
  {
    titulo: 'Convenios de colaboración',
    to: '21-9',
    icon: <PiExcludeDuotone  size={iconSize} color="cyan" />
  },
  {
    titulo: 'Condiciones generales de trabajo',
    to: '21-10',
    icon:  <PiCoffeeThin  size={iconSize} color="brown" />
  },
  {
    titulo: 'Planes, programas o proyectos',
    to: '21-11',
    icon:  <PiDotsThreeOutline  size={iconSize} color="red" />
  },
  {
    titulo: 'Servicios y trámites',
    to: '21-12',
    icon:  <PiClipboardTextDuotone  size={iconSize} color="gray" />
  },
  {
    titulo: 'Mecanismos de solicitudes, opiniones, quejas',
    to: '21-13',
    icon:  <PiChatCircleSlashDuotone  size={iconSize} color="gray" />
  },
  {
    titulo: 'Mecanismos de participación ciudadana',
    to: '21-14',
    icon:  <PiHandshakeLight    size={iconSize} color="gray" />
  },
  {
    titulo: 'Estímulos, apoyos y requisitos',
    to: '21-15',
    icon: <PiCirclesThreePlusDuotone  size={iconSize} color="purple" />
  },
  {
    titulo: 'Beneficiarios de subsidios, estímulos y apoyos',
    to: '21-16',
    icon: <PiCardsThreeBold  size={iconSize} color="pink" />
  },
  {
    titulo: 'Beneficiarios de programas sociales',
    to: '21-17',
    icon: <PiFolderSimpleUserDuotone  size={iconSize} color="gray" />
  },
  {
    titulo: 'Personas que utilizan recursos públicos',
    to: '21-18',
    icon: <PiFolderSimpleDashedThin  size={iconSize} color="blue" />
  },
  {
    titulo: 'Instituciones de beneficencia',
    to: '21-19',
    icon: <PiBuilding  size={iconSize} color="gray" />
  },
  {
    titulo: 'Presupuesto asignado',
    to: '21-20',
    icon: <PiWallet  size={iconSize} color="" />
  },
  {
    titulo: 'Calendario de reuniones públicas',
    to: '21-21',
    icon: <PiCalendar  size={iconSize} color="blue" />
  },
  {
    titulo: 'Unidad de transparencia y comité de transparencia',
    to: '21-22',
    icon: <PiCubeTransparentLight  size={iconSize} color="gray" />
  },
  {
    titulo: 'Catálogos documentales de archivos',
    to: '21-23',
    icon: <PiArchiveFill  size={iconSize} color="orange" />
  },
  {
    titulo: 'Solicitudes y respuestas',
    to: '21-24',
    icon: <PiChats  size={iconSize} color="gray" />
  },
  {
    titulo: 'Informes financieros y cuenta pública',
    to: '21-25',
    icon: <PiNewspaperDuotone  size={iconSize} color="gray" />
  },
  {
    titulo: 'Deuda pública',
    to: '21-26',
    icon: <PiComputerTowerLight  size={iconSize} color="gray" />
  },
  {
    titulo: 'Auditorías',
    to: '21-27',
    icon: <PiEyeDuotone  size={iconSize} color="gray" />
  },
  {
    titulo: 'Proveedores y contratistas',
    to: '21-28',
    icon: <PiFactoryBold  size={iconSize} color="gray" />
  },
  {
    titulo: 'Inspectores o visitadores',
    to: '21-29',
    icon: <PiUsersFourDuotone size={iconSize} color="blue" />
  },
  {
    titulo: 'Procedimientos de adjudicación directa, invitación restringida y licitación',
    to: '21-30',
    icon: <PiDeskDuotone  size={iconSize} color="blue" />
  },
  {
    titulo: 'Agenda de eventos culturales o deportivos',
    to: '21-31',
    icon: <PiUsersFourDuotone size={iconSize} color="blue" />
  },
  {
    titulo: 'Actas de entrega-recepción',
    to: '21-32',
    icon: <PiCalendarPlusDuotone  size={iconSize} color="blue" />
  },
  
  {
    titulo: 'Georreferenciación de obras públicas',
    to: '21-33',
    icon: <PiBulldozerThin  size={iconSize} color="gray" />
  },
  {
    titulo: 'Expedientes reservados',
    to: '21-34',
    icon: <PiBagSimpleBold  size={iconSize} color="" />
  },
  {
    titulo: 'Guía de archivos',
    to: '21-35',
    icon: <PiArchiveThin  size={iconSize} color="blue" />
  },
  {
    titulo: 'Concesiones, permisos y autorizaciones',
    to: '21-36',
    icon: <PiArticleThin  size={iconSize} color="blue" />
  },
  {
    titulo: 'Concesiones de transporte público',
    to: '21-37',
    icon: <PiUsersFourDuotone size={iconSize} color="blue" />
  },
//   {
//     titulo: 'Entrega de recursos públicos',
//     to: '21-38',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Sistemas pensionarios',
//     to: '21-39',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Informe de actividades',
//     to: '21-40',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Ingresos',
//     to: '21-41',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Información desclasificada',
//     to: '21-42',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Preguntas frecuentes',
//     to: '21-43',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
  {
    titulo: 'Catálogo de información adicional',
    to: '21-44',
    icon: <PiLampPendantFill  size={iconSize} color="blue" />
  },
  {
    titulo: 'Acciones realizadas por contingencias',
    to: '21-45',
    icon: <PiTornado  size={iconSize} color="gray" />
  },
  {
    titulo: 'Aportaciones nacionales o internacionales, para emergencia o desastre',
    to: '21-46',
    icon: <PiPlusCircleLight  size={iconSize} color="blue" />
  },
//   {
//     titulo: 'Servidores públicos con sanciones definitivas',
//     to: '21-47',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Listado del parque vehicular',
//     to: '21-48',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Información catastral',
//     to: '21-49',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Proceso catastral de valuación',
//     to: '21-50',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Mecanismos y resultados de evaluación',
//     to: '21-51',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
//   {
//     titulo: 'Resultados de evaluación',
//     to: '21-52',
//     icon: <PiUsersFourDuotone size={iconSize} color="blue" />
//   },
  {
    titulo: 'Otra información',
    to: '21-53',
    icon: <PiListPlusThin  size={iconSize} color="blue" />
  }
  ]

export const BotonesTransparencia: React.FC<TranparenciaProps>  = () => {
    const navigate = useNavigate();
  return (
    <>

<List
    grid={{ gutter: 3,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4,
     }}
     style={{padding: 15}}
    size="small"
    itemLayout="horizontal"
    dataSource={fracciones}
    renderItem={(item) => (
      <List.Item>
        
        <Card 
        onClick={ () => navigate(`/transparencia/${item.to}` )}
        hoverable
        bordered={false} 
        style={{ textAlign: "center"}} 
        title={item.icon}>{item.titulo}
        </Card>
      </List.Item>
    )}
  />
    
    </>
  )
}
