import { Back, FullScreenOne } from "@icon-park/react";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

const Header = () => (
  <section className={styles.header}>
    <Back className={styles.icon} theme="filled" fill={ICON_COLOR} />
    <h1 className={styles.title}>Heimdall</h1>
    <FullScreenOne className={styles.icon} fill={ICON_COLOR} />
  </section>
);

export default Header;
