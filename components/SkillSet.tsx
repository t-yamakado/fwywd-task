import React from "react";

export const SkillSet: React.FC<{}> = ({}) => (
	<div>
		<p>ここにテキストを書く</p>
		<h1 className="pl-10 pt-2 sm:pt-5 text-black sm:pl-20 pt-5 ">
			JavaScript <span className="text-xs text-yellow-400">60%</span>
		</h1>
		<div className="mt-2 ml-10 sm:ml-20 h-4 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-yellow-400 sm:bg-green-500 absolute"
				style={{ width: "60%" }}
			></div>
		</div>
		<h1 className="pl-10 pt-2 sm:pt-5 text-black sm:pl-20  pt-5 ">
			TypeScript <span className=" text-xs text-red-500">70%</span>
		</h1>
		<div className="mt-2 ml-10 sm:ml-20 h-4 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-red-500 sm:bg-yellow-400 absolute"
				style={{ width: "70%" }}
			></div>
		</div>
		<h1 className="pl-10 pt-2 sm:pt-5 text-black sm:pl-20  pt-5 ">
			Next <span className=" text-xs text-green-500">60%</span>
		</h1>
		<div className="mt-2 ml-10 sm:ml-20 h-4 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-green-500 sm:bg-red-500 absolute"
				style={{ width: "60%" }}
			></div>
		</div>
		<h1 className="pl-10 pt-2 sm:pt-5 text-black sm:pl-20  pt-5 ">
			React/Redux <span className=" text-xs text-gray-600">70%</span>
		</h1>
		<div className="mt-2 ml-10 sm:ml-20 h-4 relative w-60 rounded-full overflow-hidden">
			<div className=" w-full h-full bg-gray-200 absolute "></div>
			<div
				className=" h-full bg-gray-600 sm:bg-indigo-500 absolute"
				style={{ width: "70%" }}
			></div>
		</div>
	</div>
);
