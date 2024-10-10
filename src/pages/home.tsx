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
						description='Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.'
						href='https://147colors.com'
					/>
					<Project
						name='Arbitrary Awards'
						description='Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.'
						href='https://arbitraryawards.com'
					/>
					<Project
						name='Long Haul Theme'
						description='Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.'
						href='https://brianmaierjr.com/long-haul'
					/>
				</Projects>
			</main>
			<AppFooter />
		</div>
	);
};

export default Home;
