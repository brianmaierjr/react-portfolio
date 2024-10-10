import AppFooter from "../components/app-footer";
import AppHeader from "../components/app-header";

const Uses = () => {
	return (
		<div className='container flow'>
			<AppHeader hideIntro />
			<main>
				<div className='flow section'>
					<h1>Uses</h1>
					<p>
						Nullam id dolor id nibh ultricies vehicula ut id elit.
						Nulla vitae elit libero, a pharetra augue. Nullam quis
						risus eget urna mollis ornare vel eu leo. Curabitur
						blandit tempus porttitor.
					</p>
				</div>
			</main>
			<AppFooter />
		</div>
	);
};

export default Uses;
