/** @format */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./App.css";
import UserLayout from "./layouts/UserLayout";
import { Home } from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<UserLayout />}>
					<Route index element={<Home />} />
				</Route>
			</>,
		),
	);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
