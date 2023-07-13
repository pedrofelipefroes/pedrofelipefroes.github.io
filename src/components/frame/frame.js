import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

const Frame = ({ children, orientation, ...other }) => {
	return (
		<section
			className={c("frame sans-serif", "frame__" + orientation)}
			{...other}
		>
			{children}
		</section>
	);
};

Frame.defaultProps = {
	orientation: "landscape",
};

Frame.propTypes = {
	children: PropTypes.node.isRequired,
	orientation: PropTypes.string.isRequired,
};

export default Frame;
