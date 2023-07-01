import React, { useEffect } from "react";

import BackToTop from "../components/back-to-top/back-to-top";
import NavItem from "../components/nav-item/nav-item";
import Seo from "../components/seo/seo";

import { navItemIsSelected } from "../components/nav-item/nav-item.module.css";

import NavigationLink from "../components/navigation-link/navigation-link";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
	useEffect(() => {
		let observer = new IntersectionObserver(projectChange, {
			rootMargin: "30px",
			threshold: 0.5,
		});

		function clearSelected() {
			document.querySelectorAll("[id^=trigger]").forEach((item) => {
				item.classList.remove(navItemIsSelected);
			});
		}

		function projectChange(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					clearSelected();

					if (entry.target.id.includes("start-")) {
						let id = "trigger-" + entry.target.id.split("start-")[1];
						let el = document.getElementById(id);
						el.classList.add(navItemIsSelected);
					}
				}
			});
		}

		document.querySelectorAll("[id^=start], [id^=author]").forEach((item) => {
			if (item) {
				observer.observe(item);
			}
		});
	}, []);

	return (
		<>
			<Seo title="Visual Systems, UI, Branding & Technology" />
			<div className="viewport">
				<aside>
					<div className="mono sidebar txt-light-primary">
						<header>
							<p>FROES.DESIGN</p>
							<BackToTop />
						</header>
						<menu>
							<NavItem id="trigger-ldr" section="start-ldr">
								27 Days Until Lana Del Rey
							</NavItem>
							<NavItem id="trigger-bds" section="start-bds">
								Postclick{"\u2019"}s Block Design System
							</NavItem>
							<NavItem id="trigger-rac" section="start-rac">
								Rebranding Avenue Code
							</NavItem>
							<NavItem id="trigger-cre" section="start-cre">
								Condé Nast{"\u2019"}s Creative Direction
							</NavItem>
							<NavItem id="trigger-spt" section="start-spt">
								Spotify Wrapped with AI
							</NavItem>
							<NavItem id="trigger-msc" section="start-msc">
								The Year in Music
							</NavItem>
						</menu>
						<address>
							<a href="https://linkedin.com/in/froesdesign">
								LinkedIn{"\u2009"}
								{"\u2197"}
							</a>
							<a href="mailto:hello@froes.design">hello@froes.design</a>
						</address>
					</div>
				</aside>
				<main>
					<section
						id="author-1"
						className="frame frame--cover sans-serif txt-light-primary"
					>
						<div>
							<h1>
								The Aesthetic Adventures of Froes{" "}
								<span className="txt-light-secondary">
									{"\u0028"}or... {"\u201C"}Designer with 7+ years of experience
									has some projects pictured below.{"\u201D"}
									{"\u0029"}
								</span>
							</h1>
						</div>
						<div>
							<h3>Written and designed by Froes</h3>
							<h3>Director{"\u2019"}s Cut</h3>
						</div>
					</section>
					<div id="author-2" className="frame">
						<p>Author</p>
					</div>
					<div id="author-3" className="frame">
						<p>Author</p>
					</div>
					<div id="start-ldr" className="frame ldr">
						<p>27 Days Until Lana Del Rey</p>
					</div>
					<div className="frame ldr">
						<p>27 Days Until Lana Del Rey</p>
					</div>
					<div className="frame ldr">
						<p>27 Days Until Lana Del Rey</p>
					</div>
					<div id="start-bds" className="frame">
						<p>Postclick's Block Design System</p>
					</div>
					<div id="start-rac" className="frame">
						<p>Rebranding Avenue Code</p>
					</div>
					<div id="start-cre" className="frame">
						<p>Condé Nast's Creative Direction</p>
					</div>
					<div id="start-spt" className="frame">
						<p>Spotify Wrapped with AI</p>
					</div>
					<div id="start-msc" className="frame">
						<p>The Year in Music</p>
					</div>
				</main>
			</div>
		</>
	);
};

export default IndexPage;
