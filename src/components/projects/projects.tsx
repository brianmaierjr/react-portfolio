import styles from "./index.module.css";

const Projects = ({ children }: any) => {
	return (
		<section aria-label='Projects' className='section flow'>
			<h2>Personal Projects</h2>
			<div className={styles.projectList}>{children}</div>
		</section>
	);
};

export default Projects;
