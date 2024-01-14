// import React, { useEffect } from "react";
import React, { useState } from "react";
import c from "classnames";
import Slider from "react-slick";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import PageHeadline from "../components/page-headline/page-headline";
// import PosterCarousel from "../components/poster-carousel/poster-carousel";
import ProjectDescription from "../components/project-description/project-description";
import Seo from "../components/seo/seo";

import { StaticImage } from "gatsby-plugin-image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
	const posterSliderSettings = {
		arrows: false,
		autoplay: true,
		dots: false,
		draggable: false,
		infinite: true,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1,
		swipe: false,
	};

	const projects = [
		{
			id: "ppt",
			name: "Perspective",
			description:
				"An AI-powered app to help you capture all of your moments and build a rich record of your\u00A0life.",
			tags: ["Branding", "Product Design", "Visual Design"],
			start: "2022",
			end: "Ongoing",
		},
		{
			id: "bds",
			name: "Block\u000ADesign\u000ASystem",
			description:
				"A conversion-driven landing page design system rooted in continuous\u00A0optimization.",
			tags: ["Front-end", "Product Design", "Visual Design"],
			start: "2020",
			end: "2022",
		},
		{
			id: "acr",
			name: "Avenue Code\u000ABrand Refresh",
			description:
				"Refreshing Avenue Code brand with diversity, cohesiveness, and scalability in\u00A0mind.",
			tags: ["Branding", "Visual Design"],
			start: "2019",
			end: "2020",
		},
	];

	return (
		<>
			<Seo title="Froes designs concepts and visuals for brands, products, and music" />
			<main>
				<Header projects={projects} />
				<PageHeadline />
				<section id="poster-gallery" className="poster-gallery">
					<div className="section-name">
						<h2>Posters</h2>
					</div>
					<Slider {...posterSliderSettings}>
						<div className="viewport viewport--max-width">
							<figure className="poster-slider project-cover">
								<StaticImage
									src="../../images/artwork/poster_blue-banisters.jpg"
									alt="Blue Banisters"
								/>
							</figure>
							<div className="call-to-action">
								<small>Featuring</small>
								<small>Poster Name</small>
								<small>and more.</small>
							</div>
						</div>
						<div className="viewport viewport--max-width">
							<figure className="poster-slider project-cover">
								<StaticImage
									src="../../images/artwork/poster_cruel-world.jpg"
									alt="Cruel World"
								/>
							</figure>
							<div className="call-to-action">
								<small>Featuring</small>
								<small>Poster Name</small>
								<small>and more.</small>
							</div>
						</div>
						<div className="viewport viewport--max-width">
							<figure className="poster-slider project-cover">
								<StaticImage
									src="../../images/artwork/poster_cinnamon-girl.jpg"
									alt="Cinnamon Girl"
								/>
							</figure>
							<div className="call-to-action">
								<small>Featuring</small>
								<small>Poster Name</small>
								<small>and more.</small>
							</div>
						</div>
						<div className="viewport viewport--max-width">
							<figure className="poster-slider project-cover">
								<StaticImage
									src="../../images/artwork/poster_money-power-glory.jpg"
									alt="Money Power Glory"
								/>
							</figure>
							<div className="call-to-action">
								<small>Featuring</small>
								<small>Poster Name</small>
								<small>and more.</small>
							</div>
						</div>
						<div className="viewport viewport--max-width">
							<figure className="poster-slider project-cover">
								<StaticImage
									src="../../images/artwork/poster_a-w.jpg"
									alt="A&W"
								/>
							</figure>
							<div className="call-to-action">
								<small>Featuring</small>
								<small>Poster Name</small>
								<small>and more.</small>
							</div>
						</div>
					</Slider>
				</section>
				<section id="design-work">
					<ul className="project-list">
						<li className="project-list-item">
							<div className="viewport viewport--max-width">
								<div className="project-cover">
									<h2>{projects[0].name}</h2>
									<figure></figure>
								</div>
								<ProjectDescription
									durationEnd={projects[0].end}
									durationStart={projects[0].start}
									subhead={projects[0].description}
									title={projects[0].name}
									tags={projects[0].tags}
								/>
							</div>
						</li>
						<li className="project-list-item">
							<div className="viewport viewport--max-width">
								<div className="project-cover">
									<h2>{projects[1].name}</h2>
									<figure></figure>
								</div>
								<ProjectDescription
									durationEnd={projects[1].end}
									durationStart={projects[1].start}
									subhead={projects[1].description}
									title={projects[1].name}
									tags={projects[1].tags}
								/>
							</div>
						</li>
						<li className="project-list-item">
							<div className="viewport viewport--max-width">
								<div className="project-cover">
									<h2>{projects[2].name}</h2>
									<figure></figure>
								</div>
								<ProjectDescription
									durationEnd={projects[2].end}
									durationStart={projects[2].start}
									subhead={projects[2].description}
									title={projects[2].name}
									tags={projects[2].tags}
								/>
							</div>
						</li>
					</ul>
				</section>
				<section id="about" className="about viewport viewport--max-width">
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
							Digital{"\u00A0"}Marketing.
						</small>
						<small>
							Playing with typography and scaling visual systems are things I
							{"\u2019"}m passionate about{"\u00A0"}
							{"\u2661"}
						</small>
						<small>
							I{"\u2019"}m currently based in São Paulo, Brazil, but open to
							relocation. Reach out for a chat and let{"\u2019"}s explore how we
							can{"\u00A0"}collaborate.
						</small>
						{/* <small>
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
						</small> */}
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
