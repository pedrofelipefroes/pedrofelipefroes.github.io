import * as React from "react";
import c from "classnames";

import Spotify from "../../images/spotify.inline.svg";
import Signature from "../../images/signature.inline.svg";

import { footer, legal, spotify } from "./footer.module.css";

const Footer = () => {
	return (
		<footer
			className={c(
				footer,
				"l-golden-ratio s-inline-auto s-inset-inline s-inset-stack-2 u-align-items-end u-border-box w-100 w-max-container"
			)}
		>
			<div>
				<p className="caption d-inline">
					This site was designed and developed by all by myself.{" "}
					<Spotify className={spotify} />{" "}
					<a
						href="https://open.spotify.com/playlist/0fAnZehFEjglZCHOiGGNcY?si=dae1004bfdf44b20"
						className="d-inline js-link"
					>
						This was often playing in the&nbsp;background.
					</a>
				</p>
			</div>
			<div
				className={c(
					legal,
					"d-flex u-justify-content-space-between u-justify-content-end--992"
				)}
			>
				<address className="caption s-inline-1 s-inline-3--1366">
					São Paulo Brazil
				</address>
				<div className="d-flex">
					<p className="caption s-inline-1 s-inline-3--1366">Froes © 2022</p>
					<Signature className="u-flex-shrink-0" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
