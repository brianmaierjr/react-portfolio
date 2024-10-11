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
				<img className={styles.avatar} src={me} alt='' />
				<div className={styles.navContainer}>
					<nav>
						<ul>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/uses'>Uses</a>
							</li>
						</ul>
					</nav>
					<ColorModeToggle />
				</div>
			</div>
			<h1 className={styles.name}>Brian Maier Jr.</h1>
			<h2 className={styles.title}>Design Engineer</h2>
			{!hideIntro && (
				<p className={styles.intro}>
					I'm a Design Engineer in Louisville, Kentucky that believes
					in empowering users through simple experiences. I work with
					multiple frameworks on design systems and patterns that help
					developers and marketers build great sites and products.
				</p>
			)}
		</header>
	);
};

export default AppHeader;
