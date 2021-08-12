import Head from "next/head";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Body } from "../components/Body";

export default function Home() {
	return (
		<body>
			<Head>
				<title>Takana Mayo App</title>
				<meta name="description" content="Welcome to Takana Mayo app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Navigation />
			<Body />
		</body>
	);
}
