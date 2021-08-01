import Head from "next/head";
import Image from "next/image";
import { InformationCard } from "../components/InformationCard";
import { SkillSet } from "../components/SkillSet";
import { Share } from "../components/Share";
import { informationList, valueList } from "../definitions/commonDefinitions";

export default function Home() {
	return (
		<body>
			<Head>
				<title>Takana Mayo App</title>
				<meta name="description" content="Welcome to Takana Mayo app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
			<nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-green-700 bg-opacity-60">
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<div className="text-left inline-block">
							<h1 className="text-white text-2xl font-semibold uppercase md:text-3xl pl-20">
								Main title
							</h1>
							<h2 className="text-white text-xl font-semibold uppercase md:text-2xl pl-20 text-opacity-70">
								Sub title
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
			<div className="">
				<main className="py-20 flex-1">
					<h1 className="text-center text-6xl">
						Welcome to{" "}
						<span className="text-green-500">Takana Mayo Page</span>
					</h1>
					<div
						className="py-20"
						style={{
							backgroundImage: "url(/bg-about.png)",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "local",
							backgroundSize: "100%",
						}}
					>
						<p className="text-center leading-normal text-2xl pt-6">
							私について{" "}
							<span className="text-blue-400">ABOUT</span>
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
							{informationList.map((info) => {
								return (
									<InformationCard
										imageUrl={info.imageUrl}
										title={info.title}
										content={info.content}
										key={info.type}
									/>
								);
							})}
						</div>
					</div>
					<div
						className="py-20 relative bottom-20"
						style={{
							backgroundImage: "url(/bg-skills.png)",
							backgroundRepeat: "no-repeat",
							backgroundAttachment: "local",
							backgroundSize: "100%",
						}}
					>
						<p className="text-center leading-normal text-2xl pt-6">
							スキル <span className="text-blue-400">SKILLS</span>
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-4 w-2/3">
							<div>
								<Image
									src={require("../public/skill.png")}
									alt="skill image"
									className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal mt-4 lg:mt-0"
								/>
							</div>
							<SkillSet />
						</div>
					</div>
					<section className="overflow-hidden relative -top-10">
						<div className="container px-5 py-24 mx-auto">
							<h1 className="text-2xl text-center title-font font-medium mb-1">
								価値観{" "}
								<span className="text-base text-blue-400">
									VALUES
								</span>
							</h1>
							<div className="divide-x-2 divide-green-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
								{valueList.map((info) => {
									return (
										<InformationCard
											imageUrl={info.imageUrl}
											title={info.title}
											content={info.content}
											key={info.type}
										/>
									);
								})}
							</div>
						</div>
					</section>
					<section className="overflow-hidden relative -top-10">
						<div
							className="pt-32 relative z-0"
							style={{
								backgroundImage: "url(/bg-future.png)",
								backgroundRepeat: "no-repeat",
								backgroundAttachment: "local",
								backgroundSize: "100%",
							}}
						>
							<div className="container px-5 py-24 mx-auto">
								<div className="lg:w-4/5 mx-auto flex flex-wrap">
									<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
										<h1 className="text-2xl title-font font-medium mb-1">
											３年後にやりたいこと{" "}
											<span className="text-base text-blue-400">
												FUTURE
											</span>
										</h1>
										<p className="leading-relaxed pr-5">
											ここにテキストここにテキストここにテキストここにテキストここにテキスト
											ここにテキストここにテキストここにテキストここにテキストここにテキスト
											ここにテキストここにテキストここにテキストここにテキストここにテキスト
										</p>
									</div>
									<div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
										<Image
											src={require("../public/future.png")}
											alt="future image"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<Share
					text="profile page"
					url="https://fwywd-task.vercel.app/"
				/>
				<footer className="w-screen border-b-2 border-green-500">
					<div className="mx-auto px-6">
						<div className="border-t-2 border-gray-300 flex flex-col items-center">
							<div className="sm:w-2/3 text-center py-6">
								<p className="text-sm text-green-500 font-bold mb-2">
									© 2021 by Takana Mayo
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</body>
	);
}
