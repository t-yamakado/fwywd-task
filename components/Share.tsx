import React from "react";
import {
	TwitterIcon,
	TwitterShareButton,
	FacebookIcon,
	FacebookShareButton,
} from "react-share";

export const Share: React.VFC<{
	text: string;
	url: string;
}> = ({ text, url }) => {
	return (
		<ul className="flex justify-center list-none">
			<li className="mr-2">
				<TwitterShareButton url={url} title={text}>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</li>
			<li>
				<FacebookShareButton url={url}>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
			</li>
		</ul>
	);
};
