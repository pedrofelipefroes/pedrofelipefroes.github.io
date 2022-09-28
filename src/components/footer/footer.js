import * as React from "react";
import c from "classnames";

import Signature from "../../images/signature.inline.svg";

import { legal } from "./footer.module.css";

const Footer = () => {
	return (
		<footer className="l-golden-ratio s-inline-auto s-inset-inline s-inset-stack-2 txt-ms-0 u-align-items-end u-border-box w-max-container">
			<p>
				This site was fully designed and developed by myself, coffee, and{" "}
				<a
					href="https://open.spotify.com/playlist/0fAnZehFEjglZCHOiGGNcY?si=dae1004bfdf44b20"
					className="js-interactable-link"
				>
					a playlist filled with visual&nbsp;songs.
				</a>
			</p>
			<div className={c(legal, "l-stack u-justify-content-space-between")}>
				<address className="s-inline-3">São Paulo, Brazil.</address>
				<div className="d-flex u-flex-grow-1 u-justify-content-space-between">
					<p className="s-inline-3">Froes © 2022.</p>
					<Signature className="u-flex-shrink-0" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
