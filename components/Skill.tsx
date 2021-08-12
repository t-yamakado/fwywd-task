import React from "react";
import Image from "next/image";
import { SkillSet } from "./SkillSet";

export const Skill: React.VFC<{}> = () => (
	<section className="overflow-hidden relative -top-16">
		<div
			style={{
				backgroundImage: "url(/bg-skills.png)",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "local",
				backgroundSize: "100%",
			}}
		>
			<div className="container px-5 py-24 pt-10 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="w-full lg:w-1/2 lg:h-auto">
						{/* NOTE: 下のDOMに合わせて文言を配置するために空の要素を入れている */}
					</div>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className="text-2xl title-font font-medium mb-1">
							スキル{" "}
							<span className="text-base text-blue-400">
								SKILL
							</span>
						</h1>
					</div>
				</div>
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded">
						<Image
							src={require("../public/skill.png")}
							alt="skill image"
						/>
					</div>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:-mt-5">
						<SkillSet />
					</div>
				</div>
			</div>
		</div>
	</section>
);
