import * as React from "react";
import PropTypes from "prop-types";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Figure = ({ animateIn, animateOnce, animateOut, children, ...other }) => (
	<figure {...other}>
		<AnimationOnScroll
			animateIn={animateIn}
			animateOnce={animateOnce}
			animateOut={animateOut}
		>
			{children}
		</AnimationOnScroll>
	</figure>
);

Figure.propTypes = {
	animateIn: PropTypes.string,
	animateOnce: PropTypes.bool,
	animateOut: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Figure.defaultProps = {
	animateIn: "animate__fadeIn",
	animateOnce: false,
	animateOut: "animate__fadeOut",
};

export default Figure;
