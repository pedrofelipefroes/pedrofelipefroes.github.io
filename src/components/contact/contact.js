import React from "react"
import c from "classnames"
import { Parallax } from "react-scroll-parallax";
import { contact } from "./contact.module.css"

import NavigationLink from "../navigation-link/navigation-link"

const Contact = () => {
    const headlineCopy = "Reach Out"

    let headlineParallax = headlineCopy.split("").map((i) => {
        return (
            <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateX={[headlineCopy.indexOf(i) * -20 - 20, 0]}>
                <span>{i}</span>
            </Parallax>
        )
    })

    return (
        <section className={c(contact, "grid-golden-ratio spacing-inset-squish-lg")}>
            <h2 className="font-regular font-sans-serif text-large-title tracking-narrow">
                {headlineParallax}
            </h2>
            <div>
                <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateY={[50, 0]}>
                    <NavigationLink classNames={"spacing-stack-sm"} to="mailto:hello@froes.design">hello@froes.design</NavigationLink>
                </Parallax>
                <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateY={[75, 0]}>
                    <NavigationLink classNames={"spacing-stack-sm"} to="https://www.linkedin.com/in/froesdesign/">in/froesdesign</NavigationLink>
                </Parallax>
                {/* <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateY={[80, 0]}>
                    <NavigationLink classNames={"spacing-stack-sm"} to="https://www.instagram.com/pedrofelipefroes/">Working Not Working</NavigationLink>
                </Parallax> */}
                <Parallax easing="easeOutQuad" shouldAlwaysCompleteAnimation translateY={[100, 0]}>
                    <NavigationLink to="https://www.instagram.com/pedrofelipefroes/">@pedrofelipefroes</NavigationLink>
                </Parallax >
            </div>
        </section>
    )
}

export default Contact