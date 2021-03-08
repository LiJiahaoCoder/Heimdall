import { MenuFoldOne, MenuUnfoldOne } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
  onSetSiderVisibility: (name: ComponentName) => void;
}

const Sider = ({ visible, onSetSiderVisibility }: Props) => (
  <section
    className={`${styles.sider} ${visible ? styles.unfold : styles.fold}`}
  >
    <div className={styles.content}>
      <h2 className={styles.title}>Content</h2>
    </div>
    <div className={styles.toggle}>
      {visible ? (
        <MenuFoldOne
          className={styles.icon}
          fill={ICON_COLOR}
          onClick={() => {
            onSetSiderVisibility(ComponentName.Sider);
          }}
        />
      ) : (
        <MenuUnfoldOne
          className={styles.icon}
          fill={ICON_COLOR}
          onClick={() => {
            onSetSiderVisibility(ComponentName.Sider);
          }}
        />
      )}
    </div>
  </section>
);

export default Sider;
