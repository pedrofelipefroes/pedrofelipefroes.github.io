import * as React from "react";

import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";
import ProjectHeader from "../components/project-header/project-header";
import ProjectBody from "../components/project-body/project-body";
import ProjectFooter from "../components/project-footer/project-footer";

import { getProject } from "../../project-data";
import NextProject from "../components/next-project/next-project";

const ProjectACRPage = () => (
	<Layout>
		<Seo title={getProject("sep").title} />
		<article className="article s-inset-inline u-divider">
			<ProjectHeader title={getProject("sep").title} />
			<ProjectBody
				company={getProject("sep").company}
				subhead={getProject("sep").subhead}
				tags={getProject("sep").tags}
				title={getProject("sep").title}
			>
				<div className="s-stack-10 txt-1to3-col">
					<p className="body txt-sans-serif">
						<span className="dropcap txt-serif">R</span>esponsiveness is a
						design pattern that provides the same level of user experience
						across different screen sizes. Even though it's a common practice
						nowadays, responsive design can be challenging to implement across a
						shipped product&thinsp;&mdash;&thinsp;a trial Sephora's design and
						engineering teams faced in early&nbsp;2019.
					</p>
					<p className="body txt-sans-serif">
						Despite responsiveness's clear benefits, transitioning to it
						requires an investment of time and effort from multiple teams. To
						give grounds for such investment, I partnered with Sephora's
						Director of Front-end Engineering to research the matter and raise
						awareness around it for Sephora's leadership&nbsp;team.
					</p>
					<p className="body txt-sans-serif">
						After weeks of competitive analysis and research around the
						responsiveness impact on the customer experience, site performance,
						and <span className="txt-smcps">SEO</span>, we delivered an
						interactive research dashboard displaying all the data collected.
						Sephora's main competitors were all tested against Google's
						Lighthouse and had their performance scored and displayed in the
						dashboard. Finally, we designed a tentative strategy to transition
						to responsiveness for Sephora's Design, Front-end, and
						Product&nbsp;teams.
					</p>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 1
						</small>
						<h3 className="headline headline--dense">Definition</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Understand goals and which kind of data would provide insight for
							Sephora's&nbsp;leadership.
						</p>
					</div>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 2
						</small>
						<h3 className="headline headline--dense">Data Gathering</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Research design patterns, benchmarking competitors, and
							synchronizing team&nbsp;efforts.
						</p>
					</div>
				</div>
				<div className="l-2col s-inset-stack-8">
					<div>
						<small className="caption txt-monospace txt-uppercase">
							Stage 3
						</small>
						<h3 className="headline headline--dense">Presentation</h3>
					</div>
					<div>
						<p className="body d-inline txt-sans-serif">
							Design the research deck and develop a companion
							interactive&nbsp;dashboard.
						</p>
					</div>
				</div>
				<ProjectFooter
					credits={getProject("sep").credits}
					summary={getProject("sep").summary}
				/>
			</ProjectBody>
		</article>
		<NextProject
			subhead={getProject("bds").subhead}
			title={getProject("bds").title}
			url={getProject("bds").url}
		/>
	</Layout>
);

export default ProjectACRPage;
