import styles from "./index.module.css";

const CurrentFocus = () => {
	return (
		<section className='section flow' aria-label='Current Focus'>
			<h2>Now</h2>
			<ul>
				<li>Transitioning from Vue to React</li>
				<li>Building out Clover Learning Design System</li>
				<li>Converting Long Haul Theme to Astro</li>
				<li>Lifting Weights 6+ days a week</li>
				<li>Practicing Guitar 1 hour each day</li>
			</ul>
		</section>
	);
};

export default CurrentFocus;
