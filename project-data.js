import coverBDS from "./src/images/projects/bds/cover.jpg";
import coverPDS from "./src/images/projects/pds/cover.jpg";
import coverACR from "./src/images/projects/acr/cover.jpg";
import coverSEP from "./src/images/projects/sep/cover.jpg";

const data = [
	{
		url: "/project-bds",
		title: "Postclick Block Design System",
		tags: ["Design\u00A0System", "Front-end", "Marketing\u00A0Design"],
		img: coverBDS,
		imgRotation: {
			z: [-5, 5],
		},
		subhead:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		url: "/about",
		title: "Rebranding Postclick Design System",
		tags: ["Design\u00A0System"],
		img: coverPDS,
		imgRotation: {
			z: [-8, 2],
		},
		subhead:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		url: "/project-acr",
		title: "Rebranding Avenue Code",
		tags: ["Branding", "Marketing\u00A0Design"],
		subhead:
			"Refreshing Avenue Code brand with diversity, cohesiveness, and\u00A0scalability in\u00A0mind.",
		img: coverACR,
		imgRotation: {
			z: [-7, 2],
		},
	},
	{
		url: "/about",
		title: "Responsive Design at Sephora",
		tags: ["Front-end", "UX\u00A0Research"],
		img: coverSEP,
		imgRotation: {
			z: [7, -2],
		},
		subhead:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const getProject = (id) => {
	if (id === "bds") return data[0];
	if (id === "pds") return data[1];
	if (id === "acr") return data[2];
	if (id === "sep") return data[3];
};

export const getAllProjects = () => {
	return data;
};
