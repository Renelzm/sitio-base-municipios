import { Divider } from "antd"
import type { StatisticProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp end={value as number} separator="," />
  );

interface PropsHabitantes {
  habitantes: number;
}


export const HabitantesComponent: React.FC<PropsHabitantes> = ({habitantes}) => {
  return (
    <>
    <Divider>Habitantes</Divider>
    <Row gutter={16}>
    <Col span={24}>
      <Statistic title="" value={habitantes} formatter={formatter} />
    </Col>
    
  </Row>
    </>
  )
}
