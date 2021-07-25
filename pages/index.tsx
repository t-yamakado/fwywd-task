import Head from "next/head";
import Image from "next/image";
import { InformationCard } from "../components/InformationCard";
import { SkillSet } from "../components/SkillSet";
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
				<div className="w-full bg-cover bg-center">
					<div className="flex items-center justify-left h-full w-full bg-green-700 bg-opacity-60">
						<div className="text-left inline-block">
							<h1 className="text-white text-2xl font-semibold uppercase md:text-3xl pl-20">
								Main title
							</h1>
							<h2 className="text-white text-xl font-semibold uppercase md:text-2xl pl-20 text-opacity-70">
								Sub title
							</h2>
						</div>
						<div className="pl-80">
							{/* FIXME: paddingで位置調整しているので、動的に右寄せにする */}
							<Image
								src={require("../public/hero.png")}
								alt="hero image"
							/>
						</div>
					</div>
				</div>
			</header>
			<div className="min-h-screen px-2 flex flex-col justify-center items-center">
				<main className="py-20 flex-1 flex flex-col justify-center items-center">
					<h1 className="text-center text-6xl">
						Welcome to{" "}
						<span className="text-green-500">Takana Mayo Page</span>
					</h1>

					<p className="text-center leading-normal text-2xl pt-6">
						私について <span className="text-blue-400">ABOUT</span>
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
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
					<p className="text-center leading-normal text-2xl pt-6">
						スキル <span className="text-blue-400">SKILLS</span>
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-4 w-full">
						<div
							style={{
								backgroundImage: `url(./skill.png)`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
							}}
						></div>
						<SkillSet />
					</div>
					<p className="text-center leading-normal text-2xl pt-6">
						価値観 <span className="text-blue-400">VALUES</span>
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
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
					<p className="text-center leading-normal text-2xl pt-6">
						３年後にやりたいこと{" "}
						<span className="text-blue-400">FUTURE</span>
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-4 gap-4">
						<div>
							<p>ここにテキスト</p>
						</div>
						<div
							style={{
								backgroundImage: `url(./future.png)`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
							}}
						></div>
					</div>
				</main>

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
