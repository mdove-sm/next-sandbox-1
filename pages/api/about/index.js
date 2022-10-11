// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json({
		id: "002",
		path: "/about",
		slug: "about",
		title: "About Page",
		copy: "Velit sit est laborum nostrud velit ea. Ipsum reprehenderit deserunt dolore voluptate eu tempor et sint duis commodo Lorem ea voluptate magna. Nostrud consequat do eu proident nulla. Sunt eiusmod occaecat do sint exercitation. Eu labore amet nostrud anim adipisicing nisi ut do Lorem esse qui.",
	});
}
