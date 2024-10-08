import "./App.css";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import Career from "./components/career";
import ColorModeToggle from "./components/color-mode-toggle";
import CurrentFocus from "./components/current-focus";
import Project from "./components/projects/project";
import Projects from "./components/projects/projects";
import useLocalStorage from "use-local-storage";

function App() {
	const preference = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const [isDark, setIsDark] = useLocalStorage("isDark", preference);

	return (
		<div className='app flow' data-theme={isDark ? "dark" : "light"}>
			<div className='container'>
				<AppHeader />
				<ColorModeToggle
					isChecked={isDark}
					handleChange={() => setIsDark(!isDark)}
				/>
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
		</div>
	);
}

export default App;
