import React from "react";

const PageHeadline = () => {
	const wordmark = "Visuals";

	return (
		<section className="page-headline">
			<div className="page-headline__subtitle">
				<h3>
					<span className="label-1">Froes </span>
					<span className="label-2">Designs</span>
				</h3>
			</div>
			<div className="page-headline__title">
				<h1>
					{wordmark.split("").map((char) => (
						<>{char}</>
					))}
				</h1>
			</div>
			<div className="page-headline__subtitle">
				<h3>
					<span className="label-1">and Concepts</span>
					<span className="label-2">
						for Brands, Products &{"\u00A0"}Systems
					</span>
				</h3>
			</div>
		</section>
	);
};

export default PageHeadline;
