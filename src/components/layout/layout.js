import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";
import { ParallaxProvider } from "react-scroll-parallax";

import Cursor from "../cursor/cursor";
import Footer from "../footer/footer";
import Nav from "../nav/nav";

import { container, layout } from "./layout.module.css";

const Layout = ({ children, hasOverflow }) => {
	return (
		<ParallaxProvider>
			<Nav />
			<main className={container}>
				<div className={c(layout, { ["no-overflow"]: !hasOverflow })}>
					{children}
				</div>
			</main>
			<Footer />
			<Cursor />
		</ParallaxProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	hasOverflow: PropTypes.bool,
};

Layout.defaultProps = {
	hasOverflow: false,
};

export default Layout;
