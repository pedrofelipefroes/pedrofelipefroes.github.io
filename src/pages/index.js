import * as React from "react";

import Seo from "../components/seo/seo";

const IndexPage = () => {
	return (
		<main className="viewport">
			<Seo title="FROES.DESIGN" />
			<header className="header">
				<h1 className="headline">
					Froes is a seasoned designer with 7+ years of delivering solutions via
					systematic and detailed&nbsp;work.
				</h1>
			</header>
			<footer className="footer">
				<div className="footer__content">
					<h2 className="headline">
						<span>Portfolio</span>{" "}
						<a href={`../froesdesign-portfolio.pdf`}>available here</a>.
					</h2>
					<div className="links">
						<span className="subhead">
							Connect on{" "}
							<a href="https://www.linkedin.com/in/froesdesign">LinkedIn</a>.
						</span>
						<span className="subhead">
							Say <a href="mailto:hello@froes.design">hello at froes.design</a>.
						</span>
					</div>
				</div>
			</footer>
		</main>
	);
};

export default IndexPage;
