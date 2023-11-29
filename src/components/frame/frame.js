import * as React from "react";
import c from "classnames";
import PropTypes from "prop-types";

const Frame = ({ align, children, justify, size, ...other }) => {
	return (
		<section
			className={c(
				"viewport viewport--fixed-height viewport--max-width",
				"frame--" + align,
				"frame--" + justify,
				"frame--" + size
			)}
			{...other}
		>
			<div className="frame__content">{children}</div>
		</section>
	);
};

Frame.defaultProps = {
	align: "top",
	justify: "start",
	size: "regular",
};

Frame.propTypes = {
	justify: PropTypes.string,
	children: PropTypes.node.isRequired,
	justify: PropTypes.string,
	size: PropTypes.string,
};

export default Frame;
