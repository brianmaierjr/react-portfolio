import styles from "./index.module.css";
import me from "../../../src/assets/images/me.jpg";

const AppHeader = () => {
	return (
		<header className={`${styles.header} flow`}>
			<div className={styles.headerContainer}>
				<img className={styles.avatar} src={me} alt='' />
				Toggle
			</div>
			<h1 className={styles.name}>Brian Maier Jr.</h1>
			<h2 className={styles.title}>
				Design Engineer at{" "}
				<a href='https://cloverlearning.com' target='_blank'>
					Clover Learning
				</a>
			</h2>
			<p className={styles.intro}>
				I'm a design engineer in Louisville, Kentucky that believes in
				empowering users through simple experiences. I work with
				multiple frameworks on design systems and patterns that help
				developers and marketers build great sites and products.
			</p>
		</header>
	);
};

export default AppHeader;
