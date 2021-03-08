import { Loading as LoadingIcon } from "@icon-park/react";
import { ICON_COLOR } from "@/constants/styles";

import styles from "./index.scss";

interface Props {
  visible: boolean;
}

const Loading = ({ visible }: Props) => (
  <div
    className={`${styles.loadingMask} ${visible ? styles.show : styles.hidden}`}
  >
    <LoadingIcon fill={ICON_COLOR} size={64} className={styles.loading} />
  </div>
);

export default Loading;
