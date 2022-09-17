import * as React from "react"
import c from "classnames"
import PropTypes from "prop-types"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { cover, selectedWork } from "./selected-work.module.css"

const SelectedWork = ({ description, img, speed, tags, title }) => {

    return (
        <div className={c(selectedWork, "sp-inset-x")}>
            <h2 className="text-break-word text-ms-3to4">{title}</h2>
            <ParallaxBanner className={cover}>
                <ParallaxBannerLayer image={img} speed={speed} />
            </ParallaxBanner>
            <div className="sp-stack-xxs">
                {tags.map((item) => (
                    <small key={item} className="font-500 font-monospace text-ms-1neg text-uppercase">{item}</small>
                ))}
            </div>
            <p className="text-ms-0">{description}</p>
        </div>
    )
}

SelectedWork.propTypes = {
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}

export default SelectedWork