import styles from "./index.module.css";
import me from "../../../src/assets/images/me.jpg";
import ColorModeToggle from "../color-mode-toggle";

interface HeaderProps {
	hideIntro?: boolean;
}

const AppHeader = ({ hideIntro }: HeaderProps) => {
	return (
		<header className={`${styles.header} flow`}>
			<div className={styles.headerContainer}>
				<a href='/'>
					<img className={styles.avatar} src={me} alt='' />
				</a>
				<ColorModeToggle />
			</div>
			<h1 className={styles.name}>
				<a href='/'>Brian Maier Jr.</a>
			</h1>
			<h2 className={styles.title}>
				<a href='/'>Design Engineer</a>
			</h2>
			{!hideIntro && (
				<p className={styles.intro}>
					I'm a design engineer in Louisville, Kentucky that believes
					in empowering users through simple experiences. I work with
					multiple frameworks on design systems and patterns that help
					developers and marketers build great sites and products.
				</p>
			)}
		</header>
	);
};

export default AppHeader;
