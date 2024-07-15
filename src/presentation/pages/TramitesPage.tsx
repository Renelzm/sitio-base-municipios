import { FolderOpenTwoTone, FolderTwoTone } from "@ant-design/icons";
import { Divider, Flex, Tabs } from "antd";
import type { TabsProps } from "antd";
import Title from "antd/es/typography/Title";
import { Grid } from "antd";
import { Tramite } from "../components/Tramite";
import { useEffect, useState } from "react";
import { TopLevel } from "../../interfaces/tramitesInterface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getTramites } from "../../store/slices/tramitesSlice/thunks";

const { useBreakpoint } = Grid;

const onChange = (key: string) => {
  console.log(key);
};

export const TramitesPage = () => {
  const screens = useBreakpoint();
  const dispatch = useDispatch<AppDispatch>();
  const [tramites, setTramite] = useState<TopLevel[]>([]);
  const [activeKey, setActiveKey] = useState<string>("1");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getTramites());
    };
    fetchData();
  }, []);

  const { data, isLoading } = useSelector((state: RootState) => state.tramites);

  useEffect(() => {
    if (!data) return;
    const fetchData = async () => {
      const items = data.map((doc) => {
        const data = doc as TopLevel;
        return {
          ...data,
          children: <Tramite data={data} />,
        };
      });

      setTramite(items);
    };
    fetchData();
  }, [data, isLoading]);

  // <FolderOpenTwoTone />
  const handleTabCange = (key: string) => {
    setActiveKey(key);
    onChange(key);
  };

  const getIcon = (key: string) => {
    if (key === activeKey) {
      return (
        <FolderOpenTwoTone
          twoToneColor="#0ba391"
          style={{ fontSize: "25px" }}
        />
      );
    } else {
      return (
        <FolderTwoTone twoToneColor="#eb2f96" style={{ fontSize: "25px" }} />
      );
    }
  };

  return (
    <>
      <Flex justify="center">
        <Title level={1}>Trámites</Title>
        {isLoading && <div className="loader"></div>}
      </Flex>
      <Divider />

      <Tabs
        defaultActiveKey="1"
        items={
          tramites.map((tramite) => ({
            ...tramite,
            icon: getIcon(tramite.key),
          })) as TabsProps["items"]
        }
        onChange={handleTabCange}
        tabPosition={screens.xs ? "top" : "left"}
        type="card"
        size="small"
      />
    </>
  );
};
