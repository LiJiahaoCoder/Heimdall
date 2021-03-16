import { MenuFoldOne, MenuUnfoldOne } from "@icon-park/react";
import { Position } from "@/types";
import { ComponentName } from "@/constants";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  menus: Position[];
  visible: boolean;
  onSetSiderVisibility: (name: ComponentName) => void;
}

const Sider = ({ menus, visible, onSetSiderVisibility }: Props) => (
  <section
    className={`${styles.sider} ${visible ? styles.unfold : styles.fold}`}
  >
    <div className={styles.content}>
      <h2 className={styles.title}>楼层列表</h2>
      <li className={styles.menuList}>
        {menus.map((menu) => (
          <ol key={menu.id} className={styles.menuItem}>
            {menu.name}
          </ol>
        ))}
      </li>
    </div>
    <div className={styles.toggle}>
      {visible ? (
        <MenuUnfoldOne
          className={styles.icon}
          fill={ICON_COLOR}
          onClick={() => {
            onSetSiderVisibility(ComponentName.Sider);
          }}
        />
      ) : (
        <MenuFoldOne
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
