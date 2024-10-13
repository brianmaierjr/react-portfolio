import "./App.css";
import Colophon from "./pages/colophon";
import Home from "./pages/home";
import Uses from "./pages/uses";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/uses",
		element: <Uses />,
	},
	{
		path: "/colophon",
		element: <Colophon />,
	},
]);

function App() {
	return (
		<div className='app flow'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
