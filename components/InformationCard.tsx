import React from "react";

export const InformationCard: React.FC<{
	imageUrl: string;
	title: string;
	content: string;
}> = ({ imageUrl, title, content }) => (
	<div className="bg-white shadow p-3 rounded lg:w-64">
		<div>
			<div
				style={{ backgroundImage: `url(${imageUrl})` }}
				className="bg-cover bg-center bg-gray-300 h-32 rounded"
			></div>
		</div>
		<div className="mt-6">
			<p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
				{title}
			</p>
			<p className="text-sm text-gray-600 font-hairline">{content}</p>
		</div>
	</div>
);
