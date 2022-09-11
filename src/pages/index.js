import React, { useState } from "react"
import c from "classnames"
import { Parallax } from "react-scroll-parallax"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import NavigationLink from "../components/navigation-link/navigation-link"
import Button from "../components/button/button"
import ExperienceCard from "../components/experience-card/experience-card"
import Contact from "../components/contact/contact"

import { about, exp, expIsExpanded, header, summary, summaryIsHidden } from "./index.module.css"

const IndexPage = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Layout>
      <Seo title=" " />
      <header className={c(header, "align-items-end grid-golden-ratio sp-inset-x sp-inset-stack-lg")}>
        <h1 className="text-ms-1">
          Froes is a designer and engineer with a knack for <span className="text-nowrap">systematic design.</span>
        </h1>
        <div>
          <NavigationLink to="/#about" className="sp-stack-xs">About</NavigationLink>
          <br />
          <NavigationLink to="/#contact">Contact</NavigationLink>
        </div>
      </header>
      <section id="about" className={c(about, "divider")}>
        <div>
          <div className={c(summary, { [summaryIsHidden]: isExpanded }, "align-items-end grid-golden-ratio sp-inset-x w-max-container")}>
            <Parallax speed={-5}>
              <h2 className="text-ms-3">Current Head of Design Systems at Postclick. Former Design Lead at Avenue Code.</h2>
            </Parallax>
            <div className="justify-self-end text-ms-0">
              <p className="sp-inset-stack-xs">I'm a designer and computer engineer with over six years of experience who really (<em>really</em>) enjoys working in the intersection between creativity and <span className="text-nowrap">analytical thinking.</span></p>
              <p>This means I take a systematic approach to design, being at home when dealing with design systems, developing in <span className="text-smcps">HTML</span>, <span className="text-smcps">CSS</span> &amp; JavaScript, crafting typography scales, writing documentation, and finding patterns everywhere&thinsp;&mdash;&thinsp;both in <span className="text-nowrap">design and code.</span></p>
            </div>
            <div>
              <Button>
                <Link to="/about">More Info</Link>
              </Button>
              <Button onClick={handleClick}>
                <span>Info</span>
              </Button>
            </div>
          </div>
          <div className={c(exp, { [expIsExpanded]: isExpanded }, "align-items-start grid-golden-ratio grid-golden-ratio--reverse sp-inset-x w-max-container")}>
            <div>
              <Parallax speed={2.5}>
                <h2 className="sp-stack-xs text-ms-3">Skillset &amp; Experi&shy;ence</h2>
              </Parallax>
              <Parallax speed={5}>
                <p className="text-ms-1">I had the opportunity to work under different hats in Design, Marketing, and Product teams and deliver end-to-end solutions encompassing both concept and development.&nbsp;</p>
              </Parallax>
            </div>
            <div className="grid-3 sp-inset-stack-md">
              <ExperienceCard role="Head of Design Systems">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
              <ExperienceCard role="Design Lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
              <ExperienceCard role="Marketing Designer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
              <ExperienceCard role="Product Designer" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
              <ExperienceCard role="UI Engineer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </ExperienceCard>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}

export default IndexPage
