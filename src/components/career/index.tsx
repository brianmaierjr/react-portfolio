import styles from "./index.module.css";

const Career = () => {
	return (
		<section className='section flow' aria-label='Career'>
			<h2>Work</h2>
			<p>
				I currently work for{" "}
				<a
					className={styles.link}
					href='https://cloverlearning.com'
					target='_blank'>
					Clover Learning
				</a>{" "}
				as a Design Engineer. I work daily with React and Vue to create
				components and a design system that lets me and the other
				engineers build our app, marketing sites, and future mobile app.
			</p>
		</section>
	);
};

export default Career;
