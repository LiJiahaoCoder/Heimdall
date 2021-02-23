import { Back, FullScreenOne } from "@icon-park/react";

import styles from "./index.scss";

const Header = () => (
  <section className={styles.header}>
    <Back
      className={styles.icon}
      theme="filled"
      fill="rgba(255, 255, 255, .9)"
    />
    <h1 className={styles.title}>Heimdall</h1>
    <FullScreenOne className={styles.icon} fill="rgba(255, 255, 255, .9)" />
  </section>
);

export default Header;
