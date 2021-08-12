import React from "react";
import { informationList } from "../definitions/commonDefinitions";
import { InformationCard } from "./InformationCard";

export const About: React.VFC<{}> = () => (
	<section className="overflow-hidden">
		<div
			style={{
				backgroundImage: "url(/bg-about.png)",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "local",
				backgroundSize: "100%",
			}}
		>
			<div className="container px-5 mx-auto pt-10">
				<h1 className="text-2xl text-center title-font font-medium">
					私について{" "}
					<span className="text-base text-blue-400">ABOUT</span>
				</h1>
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 mb-24">
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
			</div>
		</div>
	</section>
);
