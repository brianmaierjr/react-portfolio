import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";
import Project from "../components/projects/project";
import Section from "../components/section";
const Home = () => {
	return (
		<div className='container'>
			<AppHeader />
			<main>
				<Section label='Work'>
					<h2>Work</h2>
					<p>
						I currently work for{" "}
						<a href='https://cloverlearning.com' target='_blank'>
							Clover Learning
						</a>{" "}
						as a Design Engineer. I work daily with React and Vue to
						create components and a design system that lets me and
						the other engineers build our app, marketing sites, and
						future mobile app.
					</p>
				</Section>
				<Section label='Now'>
					<h2>Now</h2>
					<ul className='list'>
						<li>Transitioning from Vue(Nuxt) to React</li>
						<li>Building out the Clover Learning Design System</li>
						<li>Converting Long Haul Jekyll Theme to Astro</li>
						<li>Lifting Weights 6+ days a week</li>
						<li>Practicing Guitar 1 hour each day</li>
						<li>Reading the Bible every day</li>
					</ul>
				</Section>
				<Section label='Projects'>
					<h2>Personal Projects</h2>
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
				</Section>
			</main>
			<AppFooter />
		</div>
	);
};

export default Home;
