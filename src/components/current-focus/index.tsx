import styles from "./index.module.css";

const CurrentFocus = () => {
	return (
		<section className='section flow' aria-label='Current Focus'>
			<h2>Now</h2>
			<ul className={styles.list}>
				<li>Transitioning from Vue(Nuxt) to React</li>
				<li>Building out the Clover Learning Design System</li>
				<li>Converting Long Haul Jekyll Theme to Astro</li>
				<li>Lifting Weights 6+ days a week</li>
				<li>Practicing Guitar 1 hour each day</li>
				<li>Reading the Bible every day</li>
			</ul>
		</section>
	);
};

export default CurrentFocus;
