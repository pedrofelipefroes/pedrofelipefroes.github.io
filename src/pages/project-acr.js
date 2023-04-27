import * as React from "react";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import ProjectHeader from "../components/project-header/project-header";
import ProjectBody from "../components/project-body/project-body";
import Figure from "../components/figure/figure";
import { StaticImage } from "gatsby-plugin-image";
import ProjectFooter from "../components/project-footer/project-footer";

import { getProject } from "../../project-data";
import NextProject from "../components/next-project/next-project";

const ProjectACRPage = () => (
	<Layout>
		<Seo title={getProject("acr").title} />
		<article className="article s-inset-inline u-divider">
			<ProjectHeader title={getProject("acr").title} />
			<ProjectBody
				company={getProject("acr").company}
				subhead={getProject("acr").subhead}
				tags={getProject("acr").tags}
				title={getProject("acr").title}
			>
				<div className="s-stack-10 txt-1to3-col">
					<p className="body txt-sans-serif">
						<span className="dropcap txt-serif">A</span>fter ten years in the
						market, seven offices around the globe, and 400+ consultants, Avenue
						Code&thinsp;&mdash;&thinsp;a San Francisco-based IT
						consultancy&thinsp;&mdash;&thinsp;sought to refresh its brand to
						represent how diverse the company had become over the years, both
						people and&nbsp;solution-wise.
					</p>
					<p className="body txt-sans-serif">
						Opportunities to improve Avenue Code past brand identity were
						identified via research at the start of a 3-stage process to refresh
						it. With scalability and visual cohesiveness identified as action
						points, the 2nd stage began with concept exploration, eventually
						leading us to colorful visuals inspired by street art and
						urban&nbsp;life.
					</p>
					<p className="body txt-sans-serif">
						With an expanded color palette, a new typeface based on highway
						signage, and communication guidelines, the project's last stage
						started by scaling the core brand concepts to multiple mediums:
						presentation decks, notebooks, shirts, websites, posts, and even
						office artwork. The new brand was rolled out via the One Avenue Code
						campaign and concluded with positive engagement on the company's
						Glassdoor. In addition, employee attrition was lowered by eight
						months after the campaign release when comparing the
						previous&nbsp;year.
					</p>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 1
						</small>
						<h3 className="headline headline--dense">Inspiration</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Understand the company's history, brand, values, and pain points
							through interviews and secondary research to define goals
							and&nbsp;metrics.
						</p>
					</div>
				</div>
				<Figure
					animateOnce
					animateOut=""
					className="l-media-grid l-media-grid-1 s-stack-1"
				>
					<StaticImage
						alt="The Avenue Code logo is featured on top of a black background."
						src={"../images/projects/acr/inspiration-0.jpg"}
					/>
				</Figure>
				<figure className="l-stack u-align-items-end">
					<div className="l-media-grid l-media-grid-2 l-media-grid-4--506 s-stack-1 s-stack-2--992">
						<Figure animateOnce animateOut="">
							<StaticImage
								alt="The Avenue Code logo is featured on top of a purple-filtered picture of San Francisco's Golden Gate bridge."
								src={"../images/projects/acr/inspiration-1.jpg"}
							/>
						</Figure>
						<Figure animateOnce animateOut="">
							<StaticImage
								alt="Avenue Code's old brand guidelines banner is divided into four sections: Voice, Logo, Font, and Colors, each against a different colored gradient."
								src={"../images/projects/acr/inspiration-2.jpg"}
							/>
						</Figure>
						<Figure animateOnce animateOut="">
							<StaticImage
								alt="The Avenue Code logo is followed by a headline decorated with the company's brand gradients and brush strokes featuring the copy '10 years.'"
								src={"../images/projects/acr/inspiration-3.jpg"}
							/>
						</Figure>
						<Figure animateOnce animateOut="">
							<StaticImage
								alt="Piece of social media using Avenue Code old brand gradients"
								src={"../images/projects/acr/inspiration-4.jpg"}
							/>
						</Figure>
					</div>
					<figcaption className="caption caption--media l-stack u-border-box txt-sans-serif">
						<span className="s-stack-1">
							The previous branding featured a limited amount of
							colors&thinsp;&mdash;&thinsp;each associated with an internal
							squad&thinsp;&mdash;&thinsp;and Lato as its primary&nbsp;typeface.
						</span>
						<span className="s-stack-1">
							Before ideating on Avenue Code's new brand looks, we interviewed
							its leadership team to discover how they perceived the company and
							the company's identity&nbsp;origins.
						</span>
						<span>
							For example, the Avenue Code logo was something the CEO was very
							fond of and wasn't open to changing&thinsp;&mdash;&thinsp;so we
							sought a visual identity that could complement and strengthen the
							logo's street art&nbsp;style.
						</span>
					</figcaption>
				</figure>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 2
						</small>
						<h3 className="headline headline--dense">Ideation</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Visual exploration to translate research findings into colors,
							typography, and themes to create a brand&nbsp;concept.
						</p>
					</div>
				</div>
				<Figure
					animateOnce
					animateOut=""
					className="l-media-grid l-media-grid-1 s-stack-1"
				>
					<StaticImage alt="1" src={"../images/projects/acr/ideation-0.png"} />
				</Figure>
				<Figure
					animateOnce
					animateOut=""
					className="l-media-grid l-media-grid-1 s-stack-1"
				>
					<StaticImage alt="1" src={"../images/projects/acr/ideation-1.jpg"} />
				</Figure>
				<Figure
					animateOnce
					animateOut=""
					className="l-media-grid l-media-grid-1 s-stack-1"
				>
					<StaticImage alt="1" src={"../images/projects/acr/ideation-3.jpg"} />
				</Figure>
				<div className="d-flex">
					<Figure
						animateOnce
						animateOut=""
						className="l-media-grid l-media-grid-1 s-stack-1"
					>
						<StaticImage
							alt="1"
							src={"../images/projects/acr/ideation-4.jpg"}
						/>
					</Figure>
					<figure className="l-stack">
						<Figure
							animateOnce
							animateOut=""
							className="l-media-grid l-media-grid-1 s-stack-1"
						>
							<StaticImage
								alt="1"
								src={"../images/projects/acr/ideation-5.jpg"}
							/>
						</Figure>
					</figure>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 3
						</small>
						<h3 className="headline headline--dense">Implementation</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Create and scale brand guidelines to develop an identity system,
							roll out the new brand, and measure&nbsp;results.
						</p>
					</div>
				</div>
				<ProjectFooter
					credits={getProject("acr").credits}
					summary={getProject("acr").summary}
				/>
			</ProjectBody>
		</article>
		<NextProject
			subhead={getProject("sep").subhead}
			title={getProject("sep").title}
			url={getProject("sep").url}
		/>
	</Layout>
);

export default ProjectACRPage;
