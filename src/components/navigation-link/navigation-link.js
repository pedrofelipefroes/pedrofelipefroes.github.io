import * as React from "react";
import PropTypes from "prop-types";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import { navigationLink } from "./navigation-link.module.css";

const NavigationLink = ({ children, to, ...other }) => {
	const internal = /^\/(?!\/)/.test(to);

	if (internal) {
		return (
			<AnchorLink className={navigationLink} to={to} {...other}>
				{children}
			</AnchorLink>
		);
	}

	return (
		<OutboundLink className={navigationLink} href={to} {...other}>
			{children}
		</OutboundLink>
	);
};

NavigationLink.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string.isRequired,
};

export default NavigationLink;
