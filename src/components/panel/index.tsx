import { useState } from "react";
import { Close } from "@icon-park/react";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

const Panel = () => {
  const [visible, setVisible] = useState(true);

  const onClosePanel = () => {
    setVisible(false);
  };

  return (
    <section
      className={`${styles.panel} ${
        visible ? styles.visible : styles.invisible
      }`}
    >
      <Close className={styles.icon} fill={ICON_COLOR} onClick={onClosePanel} />
      <div className={styles.content}>
        <h2 className={styles.title}>Content</h2>
      </div>
    </section>
  );
};

export default Panel;
