import React from "react";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Skill } from "../components/Skill";
import { Values } from "../components/Values";
import { Future } from "../components/Future";
import { Share } from "../components/Share";

export const Body: React.VFC<{}> = () => (
	<div className="">
		<main className="flex-1">
			<About />
			<Skill />
			<Values />
			<Future />
		</main>
		<Share text="profile page" url="https://fwywd-task.vercel.app/" />
		<Footer />
	</div>
);
