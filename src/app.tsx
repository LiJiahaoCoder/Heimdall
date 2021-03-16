import { useState, useEffect } from "react";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { getFloors } from "@/apis";
import Header from "@/components/header";
import Sider from "@/components/sider";
import Panel from "@/components/panel";
import Main from "@/components/main";
import Loading from "@/components/loading";

import "./app.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [visibilities, setVisibilities] = useState({
    header: true,
    sider: true,
    panel: false,
  });

  const getData = async () => {
    setLoading(true);
    try {
      await getFloors();
      setLoading(false);
    } catch {}
  };

  const handleSetVisibilities = (name?: ComponentName) => {
    if (!name) {
      const visibility = !visibilities.header;
      setVisibilities({
        header: visibility,
        sider: visibility,
        panel: visibilities.panel,
      });
      return;
    }

    setVisibilities({
      ...visibilities,
      [name]: !visibilities[name],
    });
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
        visible={visibilities.sider}
        onSetSiderVisibility={handleSetVisibilities}
      />
      <Panel
        visible={visibilities.panel}
        onSetPanelVisibility={handleSetVisibilities}
      />
      <Main />
      <Loading visible={loading} />
    </IconProvider>
  );
};

export default App;
