import Head from "next/head";
import Image from "next/image";
import { QueryApi } from "../helpers/QueryApi";

export default function Home({ content }) {
	return (
		<>
			<Head>
				<title>{content.title}</title>
			</Head>
			<div>
				<h1>{content.title}</h1>
				<p>{content.copy}</p>
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	let content = await QueryApi("http://localhost:3000/api/home");

	return {
		props: { content }, // will be passed to the page component as props
	};
}
