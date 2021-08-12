import React from "react";

export const Header: React.VFC<{}> = () => (
	<header>
		<nav className="flex items-center justify-between flex-wrap bg-teal p-6">
			<div className="flex items-center flex-no-shrink text-white mr-6">
				<svg
					className="h-8 w-8 mr-2"
					width="54"
					height="54"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<span className="font-semibold text-xl tracking-tight text-black">
					Tailwind CSS
				</span>
			</div>
			<div className="w-full block lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
					>
						ABOUT
					</a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
					>
						SKILLS
					</a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
					>
						VALUES
					</a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
					>
						FUTURE
					</a>
				</div>
			</div>
		</nav>
	</header>
);
