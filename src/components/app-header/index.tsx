import styles from "./index.module.css";
import me from "../../../src/assets/images/me.jpg";
import ColorModeToggle from "../color-mode-toggle";
import { NavLink } from "react-router-dom";

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
								<NavLink to='/'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/uses'>Uses</NavLink>
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
					I'm a Design Engineer that believes in empowering users
					through simple experiences. I work with multiple frameworks
					on design systems and patterns that help developers and
					marketers build great sites and products.
				</p>
			)}
		</header>
	);
};

export default AppHeader;
