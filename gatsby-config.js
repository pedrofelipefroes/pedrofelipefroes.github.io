module.exports = {
	flags: {
		DEV_SSR: true,
	},
	siteMetadata: {
		title: `FROES.DESIGN`,
		description: `Visual Systems, UI, Branding & Technology`,
		author: `Froes`,
		siteUrl: `https://froes.design/`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ["G-D758YV2LPX"],
				pluginConfig: {
					head: true,
				},
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `froes.design`,
				short_name: `FROES`,
				start_url: `/`,
				background_color: `#f5f5f5`,
				theme_color: `#f5f5f5`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
		},
	],
	pathPrefix: "/",
};
