// import React, { useEffect } from "react";
import React, { useState } from "react";
import c from "classnames";
import Slider from "react-slick";

// import Frame from "../components/frame/frame";
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
	const projects = [
		{
			id: "ppt",
			name: "Designing Perspective",
			description:
				"An AI-powered app to help you capture all of your moments and build a rich record of your\u00A0life.",
			tags: ["Visual Design", "Product Design", "Branding"],
			start: "2022",
			end: "Ongoing",
		},
		{
			id: "bds",
			name: "Block Design System",
			description:
				"A conversion-driven landing page design system rooted in continuous\u00A0optimization.",
			tags: ["Product Design", "Visual Design", "Front-end Development"],
			start: "2020",
			end: "2022",
		},
		{
			id: "acr",
			name: "Rebranding Avenue Code",
			description:
				"Refreshing Avenue Code brand with diversity, cohesiveness, and scalability in\u00A0mind.",
			tags: ["Visual Design", "Branding"],
			start: "2019",
			end: "2020",
		},
		{
			id: "cdr",
			name: "Creative Direction",
			description:
				"Portfolio and concepts created for the Creative Direction course from Condé Nast College of Fashion &\u00A0Design.",
			tags: ["Creative Direction", "Visual Design"],
			start: "2019",
			end: "ONGOING",
		},
		{
			id: "pst",
			name: "Poster Collection",
			description:
				"Translating inspiring song lyrics into sleek poster\u00A0design.",
			tags: ["Visual Design"],
			start: "2019",
			end: "ONGOING",
		},
	];

	const [grayscale, setGrayscale] = useState(true);

	const removeBlendMode = (current) => {
		if (current !== 0) {
			setGrayscale(false);
		} else {
			setGrayscale(true);
		}
	};

	const projectCarouselSettings = {
		afterChange: (current) => removeBlendMode(current),
		arrows: true,
		centerMode: true,
		centerPadding: "2ex",
		className: "center",
		draggable: true,
		dots: true,
		easing: "ease-out",
		infinite: false,
		slidesToShow: 1.5,
		// swipeToSlide: true,
	};

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
					<li className="project-list__item">
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[0].end}
								durationStart={projects[0].start}
								subhead={projects[0].description}
								title={projects[0].name}
								tags={projects[0].tags}
							/>
						</div>
						<figure className={c({ "slider--is-grayscale": grayscale })}>
							<Slider {...projectCarouselSettings}>
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-9.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
							</Slider>
						</figure>
					</li>
					<li className="project-list__item">
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[1].end}
								durationStart={projects[1].start}
								subhead={projects[1].description}
								title={projects[1].name}
								tags={projects[1].tags}
							/>
						</div>
						<figure>
							<Slider {...projectCarouselSettings}>
								<StaticImage alt="teste" src="../images/mvp/avenuecode-1.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-9.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
							</Slider>
						</figure>
					</li>
					<li className="project-list__item">
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[2].end}
								durationStart={projects[2].start}
								subhead={projects[2].description}
								title={projects[2].name}
								tags={projects[2].tags}
							/>
						</div>
						<figure>
							<Slider {...projectCarouselSettings}>
								<StaticImage alt="teste" src="../images/mvp/avenuecode-1.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-9.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
							</Slider>
						</figure>
					</li>
					<li className="project-list__item">
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[3].end}
								durationStart={projects[3].start}
								subhead={projects[3].description}
								title={projects[3].name}
								tags={projects[3].tags}
							/>
						</div>
						<figure>
							<Slider {...projectCarouselSettings}>
								<StaticImage alt="teste" src="../images/mvp/avenuecode-1.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-9.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
							</Slider>
						</figure>
					</li>
					<li className="project-list__item">
						<div className="viewport viewport--max-width">
							<ProjectDescription
								durationEnd={projects[4].end}
								durationStart={projects[4].start}
								subhead={projects[4].description}
								title={projects[4].name}
								tags={projects[4].tags}
							/>
						</div>
						<figure>
							<Slider {...projectCarouselSettings}>
								<StaticImage alt="teste" src="../images/mvp/avenuecode-1.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-9.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-4.png" />
								<StaticImage alt="teste" src="../images/mvp/postclick-5.png" />
							</Slider>
						</figure>
					</li>
					{/* <li className="project-list__item">
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
					</li> */}
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
