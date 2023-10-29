import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PosterCarousel = () => {
	const settings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		centerMode: true,
		className: "center",
		dots: false,
		infinite: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 3,
				},
			},
		],
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 3000,
		cssEase: "cubic-bezier(0.16, 1, 0.3, 1)",
	};

	return (
		<div className="poster-carousel">
			<Slider {...settings}>
				<div>
					<StaticImage
						src="../../images/artwork/poster_blue-banisters.jpg"
						alt="Blue Banisters"
					/>
				</div>
				<div>
					<StaticImage
						src="../../images/artwork/poster_cinnamon-girl.jpg"
						alt="Cinnamon Girl"
					/>
				</div>
				<div>
					<StaticImage
						src="../../images/artwork/poster_cruel-world.jpg"
						alt="Cruel World"
					/>
				</div>
				<div>
					<StaticImage
						src="../../images/artwork/poster_money-power-glory.jpg"
						alt="Money Power Glory"
					/>
				</div>
				<div>
					<StaticImage src="../../images/artwork/poster_a-w.jpg" alt="A&W" />
				</div>
			</Slider>
		</div>
	);
};

export default PosterCarousel;
