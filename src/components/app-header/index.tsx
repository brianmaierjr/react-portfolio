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
					I'm a Design Engineer that has been empowering users through
					simple experiences for the last 12 years. I enjoy bridging
					the gap between Design &amp; Code with carefully crafted
					Design Systems.
				</p>
			)}
		</header>
	);
};

export default AppHeader;
