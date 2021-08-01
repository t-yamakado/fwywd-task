import React from "react";
import Image from "next/image";

export const InformationCard: React.FC<{
	imageUrl: string;
	title: string;
	content: string;
}> = ({ imageUrl, title, content }) => (
	<div>
		<div className="text-center">
			<Image src={require(`../public/${imageUrl}`)} alt={`${imageUrl}`} />
		</div>
		<div className="mt-6 p-4">
			<p className="text-lg text-center text-bold tracking-wide text-gray-600 mb-2">
				{title}
			</p>
			<p className="text-sm text-gray-600 font-hairline">{content}</p>
		</div>
	</div>
);
