import { Back, FullScreenOne } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
  onClickFullScreen: (name?: ComponentName) => void;
}

const Header = ({ visible, onClickFullScreen }: Props) => {
  return (
    <section
      className={`${styles.header} ${visible ? styles.unfold : styles.fold}`}
    >
      <Back className={styles.icon} theme="filled" fill={ICON_COLOR} />
      <h1 className={styles.title}>Heimdall</h1>
      <FullScreenOne
        className={styles.icon}
        fill={ICON_COLOR}
        onClick={() => {
          onClickFullScreen(undefined);
        }}
      />
    </section>
  );
};

export default Header;
