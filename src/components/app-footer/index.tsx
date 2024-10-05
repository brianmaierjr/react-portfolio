import styles from "./index.module.css";

const AppFooter = () => {
	return (
		<footer className={`${styles.footer} section`}>
			<p>&copy; {new Date().getFullYear()} Brian Maier Jr.</p>

			<nav className={styles.nav}>
				<ul>
					<li>
						<a href='/uses'>Uses</a>
					</li>
					<li>
						<a
							href='https://dribbble.com/brianmaierjr'
							target='_blank'>
							Dribbble
						</a>
					</li>
					<li>
						<a
							href='https://github.com/brianmaierjr'
							target='_blank'>
							GitHub
						</a>
					</li>
					<li>
						<a href='mailto:brianmaierjr@gmail.com' target='_blank'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default AppFooter;
