import { Back, HandleLeft, HandleRight } from "@icon-park/react";
import { ComponentName } from "@/constants";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
  onClickFullScreen: (name?: ComponentName) => void;
}

const Header = ({ visible, onClickFullScreen }: Props) => (
  <section
    className={`${styles.header} ${visible ? styles.unfold : styles.fold}`}
  >
    {visible ? (
      <>
        <Back className={styles.icon} theme="filled" fill={ICON_COLOR} />
        <h1 className={styles.title}>Heimdall</h1>
        <HandleLeft
          className={styles.icon}
          fill={ICON_COLOR}
          onClick={() => {
            onClickFullScreen(undefined);
          }}
        />
      </>
    ) : (
      <HandleRight
        className={styles.icon}
        fill={ICON_COLOR}
        onClick={() => {
          onClickFullScreen(undefined);
        }}
      />
    )}
  </section>
);

export default Header;
