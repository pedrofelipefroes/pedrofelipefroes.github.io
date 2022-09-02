import * as React from "react"
import c from "classnames"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

import Contact from "../components/contact/contact"
import Cursor from "../components/cursor/cursor"
import Footer from "../components/footer/footer"
import Nav from "../components/nav/nav"
import NavigationLink from "../components/navigation-link/navigation-link"

import { indexAbout, indexHeader, indexHeaderLinks } from "./index.module.css"

const IndexPage = () => (
  <ParallaxProvider>
    <main>
      <header className={indexHeader}>
        <Nav />
        <div className="grid-golden-ratio">
          <h1 className="font-sans-serif text-title-2">Froes is a designer and engineer with a knack for <span className="text-nowrap">systematic design.</span></h1>
          <div className={indexHeaderLinks}>
            <NavigationLink classNames="spacing-stack-sm" to="#about">About</NavigationLink>
            <br />
            <NavigationLink to="#contact">Contact</NavigationLink>
          </div>
        </div>
      </header>
      <section className={c(indexAbout, "grid-golden-ratio spacing-inset-squish-lg")} id="#about">
        <Parallax speed={-3}>
          <h2 className="font-regular font-sans-serif text-title-1 tracking-narrow">
            Current <em className="">Head of Design Systems</em> at Postclick. Former <em className="">Design Lead</em> at Avenue Code.
          </h2>
        </Parallax>
        <div className="font-regular font-sans-serif text-body">
          <p className="spacing-stack-sm">I'm a designer and computer engineer with over six years of experience who really (really) enjoys a systematic approach <span className="text-nowrap">to design.</span></p>
          <p className="spacing-stack-sm">This means I'm right at home when dealing with design systems, developing <span className="font-medium font-smcps">CSS</span> architectures, crafting typography scales, writing documentation, and finding <span className="text-nowrap">patterns everywhere.</span></p>
          <p>Find below some work samples and <span className="text-nowrap">experience information.</span></p>
        </div>
        <div className="grid-golden-ratio--column-end">
          <NavigationLink classNames="spacing-stack-sm" to="https://www.dropbox.com/s/qrps0a0p1zc745k/Froes%20%E2%80%94%20Design%20Portfolio.pdf?dl=0">Samples (WIP)</NavigationLink>
          <br />
          <NavigationLink to="https://www.dropbox.com/s/s3ptwqbbnumlrn9/Designer_PedroFroes.pdf?dl=0">Resumé (WIP)</NavigationLink>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
    <Cursor />
  </ParallaxProvider>
)

export default IndexPage
