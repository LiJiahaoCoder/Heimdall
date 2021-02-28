import { useState } from "react";
import { MenuFoldOne, MenuUnfoldOne } from "@icon-park/react";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

const Sider = () => {
  const [fold, setFold] = useState(false);

  const onToggleSider = () => {
    setFold(!fold);
  };

  return (
    <section
      className={`${styles.sider} ${fold ? styles.fold : styles.unfold}`}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>Content</h2>
      </div>
      <div className={styles.toggle}>
        {fold ? (
          <MenuFoldOne
            className={styles.icon}
            fill={ICON_COLOR}
            onClick={onToggleSider}
          />
        ) : (
          <MenuUnfoldOne
            className={styles.icon}
            fill={ICON_COLOR}
            onClick={onToggleSider}
          />
        )}
      </div>
    </section>
  );
};

export default Sider;
