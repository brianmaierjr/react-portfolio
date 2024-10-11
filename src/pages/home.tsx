import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";
import Career from "../components/career";
import CurrentFocus from "../components/current-focus";
import Project from "../components/projects/project";
import Projects from "../components/projects/projects";

const Home = () => {
	return (
		<div className='container'>
			<AppHeader />
			<main>
				<Career />
				<CurrentFocus />
				<Projects>
					<Project
						name='147 Colors'
						description='Astro site created to showcase all of the CSS color names that are available.'
						href='https://147colors.com'
					/>
					<Project
						name='Arbitrary Awards'
						description='One page website that pokes fun at the atrocity that are award websites.'
						href='https://arbitraryawards.com'
					/>
					<Project
						name='Long Haul Theme'
						description='Minimal, type-focused, blogging theme built for Jekyll. Astro version coming soon.'
						href='https://brianmaierjr.com/long-haul'
					/>
				</Projects>
			</main>
			<AppFooter />
		</div>
	);
};

export default Home;
