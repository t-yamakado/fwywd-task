import Head from "next/head";
import { InformationCard } from "../components/InformationCard";
import { SkillSet } from "../components/SkillSet";
import { informationList } from "../definitions/commonDefinitions";

export default function Home() {
	return (
		<div className="min-h-screen px-2 flex flex-col justify-center items-center">
			<Head>
				<title>Takana Mayo App</title>
				<meta name="description" content="Welcome to Takana Mayo app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

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
	);
}
