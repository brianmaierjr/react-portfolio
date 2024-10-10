import "./App.css";
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
]);

function App() {
	return (
		<div className='app flow'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
