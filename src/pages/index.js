import * as React from "react";
import c from "classnames";

import Seo from "../components/seo/seo";

const IndexPage = () => {
	return (
		<main>
			<Seo title="FROES.DESIGN" />
			<header>
				<h1>
					Froes is a seasoned designer with 7+ years of delivering solutions via
					systematic and detailed&nbsp;work.
				</h1>
			</header>
			<footer>
				<h2>Portfolio available here.</h2>
				<div>
					<span>(For now.)</span>
					<span>
						Say <a href="mailto:hello@froes.design">hello at froes.design</a> /{" "}
						<a href="https://www.linkedin.com/in/froesdesign">LinkedIn</a>.
					</span>
				</div>
			</footer>
		</main>
	);
};

export default IndexPage;
