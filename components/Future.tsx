import React from "react";
import Image from "next/image";

export const Future: React.VFC<{}> = () => (
	<section className="overflow-hidden relative -top-20">
		<div
			className="pt-32 relative z-0"
			style={{
				backgroundImage: "url(/bg-future.png)",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "local",
				backgroundSize: "100%",
			}}
		>
			<div className="container px-5 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className="text-2xl title-font font-medium mb-1">
							３年後にやりたいこと{" "}
							<span className="text-base text-blue-400">
								FUTURE
							</span>
						</h1>
						<p className="leading-relaxed pr-5">
							直近では、今持っているスキルについて理解を深めたいと考えており、その知識が活かせる開発をやりたいと考えています。
							一方で、それ以外に興味がないわけではなく、これまで触れてこなかった技術にも触れ、知識の幅を広げたいと考えています。
							3年後より先にも少し触れておくと、開発で得た知識を生かしてサービス設計をしたり、チームを牽引してきた経験を活かして
							チームマネジメントを行なったり、という分野も興味があるので、ゆくゆくはそのような業務にも取り組んでみたいです。
						</p>
					</div>
					<div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
						<Image
							src={require("../public/future.png")}
							alt="future image"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
);
