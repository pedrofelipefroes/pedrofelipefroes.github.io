const data = [
	{
		url: "/project-bds",
		title: "Postclick Block Design System",
		tags: ["Design\u00A0System", "Front-end", "Marketing", "UI\u00A0Design"],
		subhead:
			"A conversion-driven landing page design system rooted in continuous optimization.",
		company: "Produced at Postclick, from 2020 to\u00A02022.",
		summary: [
			"Postclick wanted a dynamic landing page design system that would be continuously optimized to find better conversion\u00A0rates;",
			"The Block Design System was born through a 4-stage approach, reducing a 400 static block scope to 18 dynamic ones in the\u00A0process;",
			"Blocks were able to interchange between mode, position, and radius, as well as button styling, typographic scale, and depth in later\u00A0versions;",
			"The first version of the system shipped landing pages with a 16% conversion rate and 56% conversion lift to four billion+ users\u00A0served.",
		],
		credits: [
			"I was the leading designer of the project during its first and second versions, responsible for the blocks' design and consulting on its front-end\u00A0architecture. Ongoing collaboration with Vitória Feitosa (Product Design\u00A0Intern).",
			"First version collaborators include Mike Perla (Head of Product Insights), Martin Lasarga (Group Product Manager), Uldis Leiterts (Chief Design Officer), Nathan Friemel (Tech Lead), Kelvin Campos (Scrum Master), and Matheus Garcia (Front-end Engineer). Feature development by Arcadio Quintero, Dawson Turechek, Jacob Trump, and Jonathan\u00A0 Rodrigues.",
			"Second version collaborators include Diego Makarausky (Senior Product Manager), Evan Dierlam (Senior Product Manager), Nathan Wheeler (Tech Lead), and Adrian Haynes (Senior Front-end Engineer). Feature development by Emerson Silvério, Josh Mabry, Joel Corrales, Justin Green, and Matheus Franco. Quality assurance by Bruna Vaz and Murillo\u00A0Carvalho.",
			"Ongoing collaboration with Postclick's Product Design team (led by Nicolai Doreng-Stearns, Director of Product Design) and Machine Learning and Data Science teams. \u220E",
		],
	},
	// {
	// 	url: "/about",
	// 	title: "Design System Rebrand\u00ADing",
	// 	tags: ["Design\u00A0System"],
	// 	img: coverPDS,
	// 	imgRotation: {
	// 		z: [-8, 2],
	// 	},
	// 	subhead:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// 	credit: "Produced at Postclick, 2022.",
	// },
	{
		url: "/project-acr",
		title: "Rebrand\u00ADing Avenue Code",
		tags: ["Branding", "Marketing\u00A0Design"],
		subhead:
			"Refreshing Avenue Code brand with diversity, cohesiveness, and\u00A0scalability in\u00A0mind.",
		company: "Produced at Avenue Code, 2019.",
		summary: [
			"Avenue Code sought to refresh its brand as part of a business strategy to represent its position in the\u00A0market;",
			"A brand refresh was done via a 3-stage process, which included research to understand pain points, concept exploration, and a rollout\u00A0campaign;",
			"We implemented a cohesive and scalable brand system: starting with brand guidelines and scaling down to emails, presentation templates, t-shirts, notebooks, landing pages, social media, and even office\u00A0artwork;",
			"Employees posted unsolicited, positive feedback on the company's Glassdoor during the campaign's first week of\u00A0release;",
			"Compared to the company's previous year, there were eight months of lower attrition after the campaign\u00A0release.",
		],
		credits: [
			"This project was co-led by myself in close collaboration with Avenue Code Director of Creative Services and Head of\u00A0Design.",
			"Research and concept by Holly Camponez (Director of Creative Services), Bernardo Matos (Head of Design), and Froes (Design Lead). Brand artwork and collaterals by Froes, Marina Ferreira (Visual Designer), and Aurelízia Lemos (Product\u00A0Designer).",
			"Further brand scaling by Marina Ferreira. Landing pages and email development by Froes. Rollout campaign by Avenue Code Marketing and HR\u00A0teams. \u220E",
		],
	},
	{
		url: "/project-sep",
		title: "Responsive\u00ADness at Sephora",
		tags: ["Front-end", "UX\u00A0Research"],
		subhead:
			"Researching how responsive design impacts Sephora's web experience.",
		company: "Produced at Sephora, 2018. Employment via Avenue Code.",
		summary: [
			"Sephora wanted to research the value of transitioning from a separate URLs pattern to a responsive design\u00A0one;",
			"Partnering up with Sephora's Director of Front-end Engineering, I researched responsiveness' impact on customer experience, performance, and \uA731\u1D07\u1D0F, as well as where Sephora stood when compared to its\u00A0competitors;",
			"We delivered an interactive research deck detailing responsiveness impact considering Sephora's\u00A0context;",
			"In addition, we designed a tentative strategy to transition to responsive design for Sephora's Design, Front-end, and Product\u00A0teams.",
		],
		credits: [
			"I was the leading researcher of the project, responsible for collecting data, performing audits on websites, and designing the interactive deck. Ongoing collaboration with David Frick, Sephora's Director of Front-end\u00A0Engineering. \u220E",
		],
	},
];

export const getProject = (id) => {
	if (id === "bds") return data[0];
	if (id === "pds") return data[3];
	if (id === "acr") return data[1];
	if (id === "sep") return data[2];
};

export const getAllProjects = () => {
	return data;
};
