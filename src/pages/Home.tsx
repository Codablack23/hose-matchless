/** @format */

import { Link } from "react-router-dom";
import headerImage from "../assets/header-img.svg";

const Home = () => {
	return (
		<div className="mx-auto w-full max-w-screen-xl my-10 md:px-20">
			<div className="flex items-center justify-between gap-6 w-full">
				{/* ===> ===> HEADER LEFT ===> ===>  */}
				<div className="flex flex-col gap-5 w-[45%]">
					<h1 className="text-[64px] font-bold leading-[1]">
						Empowering Talent <span className="font-normal">and </span>
						Innovating Entertainment Globally
					</h1>

					<div className="flex flex-col gap-5">
						<Link
							to={""}
							className="flex items-center font-extrabold justify-center px-5 bg-primary text-white h-[50px] shadow-secondary shadow-md rounded-lg">
							Join Our Creator Network
						</Link>

						<Link
							to={""}
							className="flex items-center font-extrabold justify-center px-5 border border-solid border-primary text-primary h-[50px] shadow-secondary shadow-md rounded-lg">
							Explore Our Services
						</Link>
					</div>
				</div>

				{/* ===> ===> HEADER IMAGE ===> ===> */}
				<div className="h-full w-[55%]">
					<img src={headerImage} />
				</div>
			</div>
		</div>
	);
};

export default Home;
