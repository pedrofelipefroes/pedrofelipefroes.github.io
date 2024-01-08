import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PageHeadline = () => {
	let headline = ["Froes", "\u2003", "Designs", "\u2003", "Visuals"];

	return (
		<section className="viewport viewport--max-width page-headline">
			<div className="page-headline__title">
				<h1>
					Fro{"\u00AD"}es De{"\u00AD"}signs Vis{"\u00AD"}u{"\u00AD"}als
				</h1>
			</div>
			<div className="page-headline__title page-headline__title--landscape">
				<h1>
					{headline.map((word) => {
						return word.split("").map((letter, i) => {
							return <span key={i}>{letter}</span>;
						});
					})}
				</h1>
			</div>
		</section>
	);
};

export default PageHeadline;
