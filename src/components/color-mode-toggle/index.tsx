import { useEffect } from "react";
import useThemeStore from "../../store/themeStore";

const ColorModeToggle = () => {
	const { isDarkMode, toggleTheme } = useThemeStore();

	useEffect(() => {
		document.body.classList.toggle("dark", isDarkMode);
	}, [isDarkMode]);

	return (
		<div className='toggle-container'>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default ColorModeToggle;
