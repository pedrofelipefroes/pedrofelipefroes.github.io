module.exports = {
	flags: {
		DEV_SSR: true,
	},
	siteMetadata: {
		title: `FROES.DESIGN`,
		description: `Froes is a designer and engineer with a knack for systematic design. This is his portfolio.`,
		author: `Froes`,
		siteUrl: `https://froes.design/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `froes.design`,
				short_name: `FROES`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `minimal-ui`,
				icon: `src/images/froesdesign-icon.png`,
			},
		},
		`gatsby-plugin-sass`,
	],
	pathPrefix: "/",
};
