import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";
import Header from "@/components/header";
import Sider from "@/components/sider";
import Panel from "@/components/panel";
import Main from "@/components/main";

import "./app.scss";

const App = () => (
  <IconProvider
    value={{
      ...DEFAULT_ICON_CONFIGS,
      size: 24,
    }}
  >
    <Header />
    <Sider />
    <Panel />
    <Main />
  </IconProvider>
);

export default App;
