import { useState, useEffect } from "react";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { Position, Detail } from "@/types";
import { getFloors, getFloorDetail } from "@/apis";
import Header from "@/components/header";
import Sider from "@/components/sider";
import Panel from "@/components/panel";
import Main from "@/components/main";
import Loading from "@/components/loading";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [positions, setPositions] = useState<Position[]>([]);
  const [detail, setDetail] = useState<Detail>();
  const [visibilities, setVisibilities] = useState({
    header: true,
    sider: true,
    panel: false,
  });

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await getFloors();
      setPositions(data);
      setLoading(false);
    } catch {}
  };

  const handleSetVisibilities = (name?: ComponentName, visible?: boolean) => {
    if (name === undefined) {
      if (visible === undefined) {
        const visibility = !visibilities.header;
        setVisibilities({
          header: visibility,
          sider: visibility,
          panel: visibilities.panel,
        });
      } else {
        setVisibilities({
          header: visible,
          sider: visible,
          panel: visible,
        });
      }
    } else if (visible === undefined) {
      setVisibilities({
        ...visibilities,
        [name]: !visibilities[name],
      });
    } else {
      setVisibilities({
        ...visibilities,
        [name]: visible,
      });
    }
  };

  const onClickItem = async (id: string) => {
    setLoading(true);
    try {
      setDetail(await getFloorDetail(id));
      handleSetVisibilities(ComponentName.Panel, true);
      setLoading(false);
    } catch {}
  };

  useEffect(() => {
    void getData();
  }, []);

  return (
    <IconProvider
      value={{
        ...DEFAULT_ICON_CONFIGS,
        size: 24,
      }}
    >
      <Header
        visible={visibilities.header}
        onClickFullScreen={handleSetVisibilities}
      />
      <Sider
        menus={positions}
        visible={visibilities.sider}
        onClickItem={onClickItem}
        onSetSiderVisibility={handleSetVisibilities}
      />
      <Panel
        detail={detail}
        visible={visibilities.panel}
        onSetPanelVisibility={handleSetVisibilities}
      />
      <Main />
      <Loading visible={loading} />
    </IconProvider>
  );
};

export default App;
