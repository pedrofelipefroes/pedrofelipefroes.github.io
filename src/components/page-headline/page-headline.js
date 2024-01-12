import React from "react";

const PageHeadline = () => {
	return (
		<section className="viewport viewport--max-width page-headline">
			<div className="page-headline__subhead">
				<small>
					Former Head of Design Systems at Instapage and Design Lead at Avenue
					Code, now Founding Designer at{"\u00A0"}Perspective. 7+ years creating
					captivating, systematic, and detail-oriented user{"\u00A0"}
					experiences.
				</small>
			</div>
			<menu className="page-headline__menu">
				<ol>
					<li>
						<a href="/#poster-gallery">Poster Gallery</a>
					</li>
					<li>
						<a href="/#design-work">Design Work</a>
					</li>
					<li>
						<a href="/#courswork">Coursework</a>
					</li>
					<li>
						<a href="/#about">About</a>
					</li>
				</ol>
			</menu>
		</section>
	);
};

export default PageHeadline;
