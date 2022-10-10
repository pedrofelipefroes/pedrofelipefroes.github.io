import * as React from "react";
import c from "classnames";

import Seo from "../components/seo/seo";
import Nav from "../components/nav/nav";
import NavigationLink from "../components/navigation-link/navigation-link";
import Footer from "../components/footer/footer";
import Cursor from "../components/cursor/cursor";

import Spotify from "../images/spotify.inline.svg";

import { container, notFound } from "../pages/404.module.css";

const NotFoundPage = () => (
	<div className={c(notFound, "l-stack")}>
		<Seo title="404: Not Found" />
		<Nav />
		<main
			className={c(
				container,
				"d-flex s-inline-auto u-align-items-center u-border-box u-flex-grow-1 w-max-container"
			)}
		>
			<section
				className={c(
					container,
					"section l-stack s-inset-inline txt-align-center"
				)}
			>
				<blockquote className="s-inset-stack-3">
					<h1 className="large-title s-stack-4 txt-serif">
						&ldquo;Not all those who wander are lost.&rdquo;
					</h1>
					<footer>
						<NavigationLink to="https://open.spotify.com/track/0Z3JiHn6mhcObPmKhV9WRW?si=DGv5aAaWQG6Vjr0DbF4VBw">
							&mdash;&thinsp;Lana Del Rey
							<Spotify />
						</NavigationLink>
					</footer>
				</blockquote>
			</section>
		</main>
		<Footer />
		<Cursor />
	</div>
);

export default NotFoundPage;
