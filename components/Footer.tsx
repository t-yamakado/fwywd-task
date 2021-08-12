import React from "react";

export const Footer: React.VFC<{}> = () => (
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
);
