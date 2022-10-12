import * as React from "react";
import PropTypes from "prop-types";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Figure = ({ animateIn, animateOut, children, ...other }) => (
	<figure {...other}>
		<AnimationOnScroll animateIn={animateIn} animateOut={animateOut}>
			{children}
		</AnimationOnScroll>
	</figure>
);

Figure.propTypes = {
	animateIn: PropTypes.string,
	animateOut: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Figure.defaultProps = {
	animateIn: "animate__fadeIn",
	animateOut: "animate__fadeOut",
};

export default Figure;
