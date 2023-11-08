import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PageHeadline = () => {
	return (
		<section className="page-headline">
			<div className="page-headline__title">
				<h1>
					Fr
					<span className="stylized-letter">
						o{" "}
						<span>
							<StaticImage
								alt="Hand drawn smiley to replace the letter 'o' from the name Froes."
								className="doodle-1"
								src="../../images/doodles/smile.png"
							/>
						</span>
					</span>
					{"\u00AD"}es De{"\u00AD"}signs Vis{"\u00AD"}u
					<span>
						{"\u00AD"}al
						<span className="stylized-letter">
							s
							<span>
								<StaticImage
									alt="Handwritten 's' to decorate the word 'visuals.'"
									className="doodle-2"
									src="../../images/doodles/s.png"
								/>
							</span>
						</span>
					</span>
				</h1>
			</div>
		</section>
	);
};

export default PageHeadline;
