/** @format */

import { Link } from "react-router-dom";
import navicon from "../assets/navicon.svg";

const Navbar = () => {
	return (
		<div className="bg-primary text-white text-lg sticky z-50 top-0 inset-x-0 px-28 2xl:px-10 py-5 2xl:mx-auto 2xl:max-w-screen-xl">
			<header className="relative flex items-center  gap-20">
				<Link to={"/"}>
					<div className="flex items-center gap-2">
						<img src={navicon} />
						<h1 className="font-bold text-lg">HOSE MATCHLESS</h1>
					</div>
				</Link>

				<div className="navlinks__wrp flex gap-5">
					<Link to={""}>Home</Link>
					<Link to={""}>About Us</Link>
					<Link to={""}>Services</Link>
					<Link to={""}>Events</Link>
					<Link to={""}>Contact Us</Link>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
