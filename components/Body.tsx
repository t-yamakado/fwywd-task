import React from "react";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Values } from "../components/Values";
import { Future } from "../components/Future";

export const Body: React.VFC<{}> = () => (
	<div className="">
		<main className="flex-1">
			<About />
			<Skill />
			<Values />
			<Future />
		</main>
	</div>
);
