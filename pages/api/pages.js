// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		pages: [
			{
				id: "000",
				path: "/",
				slug: "home",
				title: "Home Page",
			},
			{
				id: "002",
				path: "/about",
				slug: "about",
				title: "About Page",
			},
			{
				id: "012",
				path: "/about/abc1",
				slug: "abc1",
				title: "About Child 1",
			},
			{
				id: "004",
				path: "/contact",
				slug: "contact",
				title: "Contact Page",
			},
		],
	});
}
