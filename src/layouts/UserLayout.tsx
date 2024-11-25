/** @format */
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default UserLayout;