import * as React from "react";
import c from "classnames";

import { backToTop } from "./back-to-top.module.css";

const BackToTop = () => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button className={c(backToTop, "mono")} onClick={goToTop}>
			<div>
				<span>{"\u2191"}</span>
			</div>
		</button>
	);
};

export default BackToTop;
