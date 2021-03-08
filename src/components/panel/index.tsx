import { Close } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
  onSetPanelVisibility: (name: ComponentName) => void;
}

const Panel = ({ visible, onSetPanelVisibility }: Props) => (
  <section
    className={`${styles.panel} ${visible ? styles.visible : styles.invisible}`}
  >
    <Close
      className={styles.icon}
      fill={ICON_COLOR}
      onClick={() => {
        onSetPanelVisibility(ComponentName.Panel);
      }}
    />
    <div className={styles.content}>
      <h2 className={styles.title}>Content</h2>
    </div>
  </section>
);

export default Panel;
