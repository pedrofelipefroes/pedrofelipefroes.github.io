import * as React from "react";
import c from "classnames";

import Signature from "../../images/signature.inline.svg";

import { footer, legal } from "./footer.module.css";

const Footer = () => {
	return (
		<footer
			className={c(
				footer,
				"l-golden-ratio s-inline-auto s-inset-inline s-inset-stack-2 u-align-items-end u-border-box w-max-container"
			)}
		>
			<div>
				<p className="caption d-inline">
					This site was fully designed and developed by myself.{" "}
					<a
						href="https://open.spotify.com/playlist/0fAnZehFEjglZCHOiGGNcY?si=dae1004bfdf44b20"
						className="js-link"
					>
						This was playing in the&nbsp;background.
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
