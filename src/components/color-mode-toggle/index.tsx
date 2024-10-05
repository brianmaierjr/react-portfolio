import { SunIcon } from "@heroicons/react/24/outline";
import styles from "./index.module.css";

const ColorModeToggle = () => {
	return <button className={styles.button}>
        <SunIcon className={styles.icon} />
    </button>;
};

export default ColorModeToggle;
