import React from "react";
import { valueList } from "../definitions/commonDefinitions";
import { InformationCard } from "./InformationCard";

export const Values: React.VFC<{}> = () => (
	<section className="overflow-hidden relative z-10">
		<div className="container px-5 mx-auto">
			<h1 className="text-2xl text-center title-font font-medium mb-1">
				価値観 <span className="text-base text-blue-400">VALUES</span>
			</h1>
			<div className="lg:w-4/5 mx-auto flex flex-wrap">
				<div className="divide-x-0 sm:divide-x-0 lg:divide-x-2 divide-green-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
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
		</div>
	</section>
);
