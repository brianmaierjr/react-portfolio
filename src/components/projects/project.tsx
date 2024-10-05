import { ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";

interface ProjectProps {
	name: string;
	description: string;
	href: string;
}

const Project = ({ name, description, href }: ProjectProps) => {
	return (
		<a className={styles.project} href={href} target='_blank'>
			<div className={styles.projectText}>
				<h3>{name}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.projectIcon}>
				<ChevronRightIcon className={styles.icon} />
			</div>
		</a>
	);
};

export default Project;
