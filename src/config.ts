import type { Site, SocialObjects, Talk } from "./types";

export const SITE: Site = {
	website: "https://baki.vercel.app",
	author: "Baki Jessy Justice Julien",
	desc: "Baki Jessy Justice Julien's personal website and blog. I write about web development, programming, and personal growth.",
	title: "Baki",
	ogImage: "baki-og.png",
	lightAndDarkMode: true,
	postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/blackdreamer15",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/jessy-justice-julien-baki/",
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/jessyjulien_",
		linkTitle: `${SITE.title} on Twitter`,
		active: true,
	},
];

// export const FEATURED_REPOS = [
// 	"username/reponame",
// ];

// export const TALKS: Talk[] = [
// 	{
// 		date: new Date("YYYY-MM-DD"),
// 		title: "TITLE",
// 		place: "LOCATION",
// 		url: "URL",
// 	},
// ];
