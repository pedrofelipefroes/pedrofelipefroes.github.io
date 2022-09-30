import React from "react";
import c from "classnames";
import PropTypes from "prop-types";

import { button } from "./button.module.css";

const Button = ({ children, ...props }) => {
	return (
		<button
			className={c(
				button,
				"body d-inline-flex js-interactable-button p-relative u-align-items-center u-justify-content-center"
			)}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Button;
