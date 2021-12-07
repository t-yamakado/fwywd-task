import React from "react";
import Image from "next/image";

export const Navigation: React.VFC<{}> = () => (
	<nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-green-700 bg-opacity-60">
		<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
			<div className="text-sm lg:flex-grow">
				<div className="text-left inline-block">
					<h1 className="text-white text-2xl font-semibold uppercase md:text-3xl pl-20">
						T-Yamakado Page
					</h1>
					<h2 className="text-white text-xl font-semibold uppercase md:text-2xl pl-20 text-opacity-70">
						Welcome
					</h2>
				</div>
			</div>
			<div>
				<Image
					src={require("../public/hero.png")}
					alt="hero image"
					className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal mt-4 lg:mt-0"
				/>
			</div>
		</div>
	</nav>
);
