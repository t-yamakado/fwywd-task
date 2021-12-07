import React from "react";

export const SkillSet: React.VFC<{}> = ({}) => (
	<>
		<p className="pl-10 sm:pl-10">
			フロントエンドからバックエンドまで一通り触れてきました。クラウド技術は軽く触る程度で知識が薄いですが、今後学んでいきたい技術の一つです。
			今ある技術を活かしつつも、必要に応じて他の技術も積極的に学んでいきたいと思っています。
		</p>
		<h1 className="pl-10 sm:pl-10 pt-1">
			JavaScript/TypeScript{" "}
			<span className="text-xs text-gray-600">80%</span>
		</h1>
		<div className="mt-1 ml-10 sm:ml-10 h-3 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-green-500 sm:bg-green-500 absolute"
				style={{ width: "80%" }}
			></div>
		</div>
		<h1 className="pl-10 sm:pl-10 pt-1">
			React/Redux <span className=" text-xs text-gray-600">70%</span>
		</h1>
		<div className="mt-1 ml-10 sm:ml-10 h-3 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-yellow-400 sm:bg-yellow-400 absolute"
				style={{ width: "70%" }}
			></div>
		</div>
		<h1 className="pl-10 sm:pl-10 pt-1">
			PostgreSQL <span className=" text-xs text-gray-600">60%</span>
		</h1>
		<div className="mt-1 ml-10 sm:ml-10 h-3 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-red-500 sm:bg-red-500 absolute"
				style={{ width: "50%" }}
			></div>
		</div>
		<h1 className="pl-10 sm:pl-10 pt-1">
			AWS <span className=" text-xs text-gray-600">30%</span>
		</h1>
		<div className="mt-1 ml-10 sm:ml-10 h-3 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-indigo-500 sm:bg-indigo-500 absolute"
				style={{ width: "30%" }}
			></div>
		</div>
	</>
);
