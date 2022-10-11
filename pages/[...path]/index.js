import Head from "next/head";
import { QueryApi } from "../../helpers/QueryApi";

export default function Page({ content }) {
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

// Make Static Paths
export async function getStaticPaths() {
	// get list of pages from API endpoint...
	const routes = await QueryApi("http://localhost:3000/api/pages/");

	// Array to store paths
	let paths = [];

	// Cycle Pages...
	routes.pages.map((item) => {
		// Get the route node, split into array and filter empty vals
		let path = item.path.split("/").filter((item) => {
			return item != "";
		});

		// Sanity check for path...
		if (path) paths.push({ params: { path: path } });
	});

	// Pass paths to router
	return {
		paths: paths,
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps(context) {
	// Search for API endpoint for page...
	const content = await QueryApi(
		// Derive api endpoint from path...
		"http://localhost:3000/api/" + context.params.path.join("/")
	);

	// Return the content
	return {
		props: { content },
	};
}
