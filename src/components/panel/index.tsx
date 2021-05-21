import { Close } from "@icon-park/react";
import { ComponentName, Status, STATUS_TEXT } from "@/constants";
import { Detail } from "@/types";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
  detail?: Detail;
  onSetPanelVisibility: (name: ComponentName) => void;
}

const Panel = ({ visible, detail, onSetPanelVisibility }: Props) => (
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
      <h2 className={styles.name}>{detail?.name}</h2>
      <div className={styles.status}>
        <span>状态：{STATUS_TEXT[detail?.status ?? Status.Normal]}</span>
        <span className={styles.status} />
      </div>
      <p className={styles.description}>描述：{detail?.description}</p>
    </div>
  </section>
);

export default Panel;
