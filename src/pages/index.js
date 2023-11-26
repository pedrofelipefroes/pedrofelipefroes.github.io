import React, { useEffect } from "react";

import Frame from "../components/frame/frame";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProjectTitle from "../components/project-description/project-description";
import Seo from "../components/seo/seo";

import { navItemIsSelected } from "../components/nav-item/nav-item.module.css";
import { StaticImage } from "gatsby-plugin-image";
import PosterCarousel from "../components/poster-carousel/poster-carousel";
import PageHeadline from "../components/page-headline/page-headline";
import ProjectDescription from "../components/project-description/project-description";

// import NavigationLink from "../components/navigation-link/navigation-link";
// import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	const projects = [
		{
			id: "pst",
			name: "Poster Collection",
			description:
				"A collection of posters themed after diverse music artists and their inspiring\u00A0songs.",
			tags: ["Art Direction", "Visual Design"],
			start: 2020,
			end: 2023,
		},
		{ id: "bds", name: "Block Design System" },
		{ id: "acr", name: "Rebranding Avenue Code" },
		{ id: "abt", name: "About Froes \u00B7 Design" },
	];

	useEffect(() => {
		let observer = new IntersectionObserver(projectChange, {
			rootMargin: "30px",
			threshold: 0.5,
		});

		function clearSelected() {
			document.querySelectorAll("[id$=trigger]").forEach((item) => {
				item.classList.remove(navItemIsSelected);
			});
		}

		function projectChange(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					clearSelected();

					if (
						entry.target.id.includes("start") ||
						entry.target.id.includes("end")
					) {
						let id = entry.target.id.split("-")[0] + "-trigger";
						let el = document.getElementById(id);
						if (el) el.classList.add(navItemIsSelected);
					}
				}
			});
		}

		document
			.querySelectorAll('[id$="start"], [id$="end"], [id^="author"]')
			.forEach((item) => {
				if (item) {
					observer.observe(item);
				}
			});
	}, []);

	return (
		<>
			<Seo title="Froes designs concepts and visuals for brands, products, and music" />
			<main>
				<PageHeadline />
				<section className="page-subhead">
					<div className="viewport viewport--max-width">
						<div className="subhead">
							<small>
								Former Head of Design Systems at Instapage and Design Lead at
								Avenue Code, now Founding Designer at{"\u00A0"}Perspective. 7+
								years creating captivating, systematic, and detail-oriented user
								{"\u00A0"}experiences.
							</small>
						</div>
					</div>
				</section>
				<Header projects={projects} />
				<ul className="project-list">
					<li className="project-list__item viewport viewport--max-width viewport--fixed-height">
						<StaticImage
							alt="teste"
							src="../images/projects/bds/branded-landing-pages.jpg"
						/>
						<ProjectDescription
							durationEnd={projects[0].end}
							durationStart={projects[0].start}
							subhead={projects[0].description}
							title={projects[0].name}
							tags={projects[0].tags}
						/>
					</li>
					<li className="project-list__item viewport viewport--max-width viewport--fixed-height">
						<StaticImage
							alt="teste"
							src="../images/projects/bds/branded-landing-pages.jpg"
						/>
						<ProjectDescription
							durationEnd={projects[0].end}
							durationStart={projects[0].start}
							subhead={projects[0].description}
							title={projects[0].name}
							tags={projects[0].tags}
						/>
					</li>
					<li className="project-list__item viewport viewport--max-width viewport--fixed-height">
						<StaticImage
							alt="teste"
							src="../images/projects/bds/branded-landing-pages.jpg"
						/>
						<ProjectDescription
							durationEnd={projects[0].end}
							durationStart={projects[0].start}
							subhead={projects[0].description}
							title={projects[0].name}
							tags={projects[0].tags}
						/>
					</li>
					<li className="project-list__item">
						<PosterCarousel />
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[0].end}
								durationStart={projects[0].start}
								subhead={projects[0].description}
								title={projects[0].name}
								tags={projects[0].tags}
							/>
						</div>
					</li>
				</ul>
				<section className="about viewport viewport--max-width">
					<div className="about__headline">
						<h2 className="display">
							Froes de{"\u00AD"}signs vis{"\u00AD"}uals for prod{"\u00AD"}ucts,
							brands, and
							{"\u00A0"}mu{"\u00AD"}sic.
						</h2>
					</div>
					<div className="about__body">
						<small>
							I{"\u2019"}m a seasoned designer with 7+ years of experience
							skilled at Visual Design, Product & UI Design, and design for
							Digital Marketing.
						</small>
						<small>
							Playing with typography and scaling visual systems are things I
							{"\u2019"}m passionate about{"\u00A0"}
							{"\u2661"}
						</small>
						<small>
							I{"\u2019"}m currently based in São Paulo, Brazil, but open to
							relocation. Reach out for a chat and let{"\u2019"}s explore how we
							can collaborate.
						</small>
						<small>
							Experience
							<svg
								width="2.5ex"
								height="2.5ex"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="3" y1="15" x2="27" y2="15" />
								<line x1="15" y1="3" x2="15" y2="27" />
							</svg>
						</small>
						<small>
							Education
							<svg
								width="2.5ex"
								height="2.5ex"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line x1="3" y1="15" x2="27" y2="15" />
								<line x1="15" y1="3" x2="15" y2="27" />
							</svg>
						</small>
					</div>
					<small className="about__footnote">
						Designed and developed by Froes.
					</small>
				</section>
				<Footer />
			</main>
		</>
	);
};

export default IndexPage;
