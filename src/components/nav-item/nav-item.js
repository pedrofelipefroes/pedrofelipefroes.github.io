import * as React from "react";
import PropTypes from "prop-types";

import { navItem } from "./nav-item.module.css";

const NavItem = ({ children, section, ...other }) => {
	const isBrowser = typeof document !== "undefined";

	const goToSection = (section) => {
		const el = isBrowser ? document.getElementById(section) : null;

		if (el) {
			window.scrollTo({
				behavior: "smooth",
				top:
					el.getBoundingClientRect().top -
					document.body.getBoundingClientRect().top -
					30,
			});
		}
	};

	return (
		<p className={navItem} onClick={() => goToSection(section)} {...other}>
			{children}
		</p>
	);
};

NavItem.propTypes = {
	children: PropTypes.node.isRequired,
	section: PropTypes.string.isRequired,
};

export default NavItem;
