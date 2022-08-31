import React, { useEffect, useState } from "react"
import c from "classnames"
import NavigationLink from "../navigation-link/navigation-link"
import { nav, navContent, navFooter, navHeader, navIcon, navIsExpanded, navIsVisible, navLink } from "./nav.module.css"


const Nav = () => {
    const [expanded, setExpanded] = useState(false)
    const [scrolled, setScrolled] = useState(null)
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setExpanded(!expanded)
        document.querySelector("body").style.overflow = "revert"

        if (!expanded) {
            document.querySelector("body").style.overflow = "hidden"
        }
    }

    const menuIcon = <svg className={c(navIcon + " icon", { [navIsExpanded]: expanded })} onClick={handleClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="9.5" x2="23" y2="9.5" />
        <line x1="1" y1="13.5" x2="23" y2="13.5" />
    </svg>

    useEffect(() => {
        const handleScroll = () => {
            const previousScrollPos = scrolled
            const currentScrollPos = window.pageYOffset

            setVisible(previousScrollPos > currentScrollPos || currentScrollPos <= 0)
            setScrolled(currentScrollPos)
        }

        setScrolled(window.pageYOffset)

        document.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scrolled])

    return (
        <nav className={c(nav, { [navIsExpanded]: expanded, [navIsVisible]: visible })}>
            <div className={c(navHeader, "color-bg height-8 spacing-inset-squish-md", { [navIsExpanded]: expanded })}>
                <NavigationLink to="/">froes.design</NavigationLink>
                {menuIcon}
                <ul>
                    <li>
                        <NavigationLink classNames="spacing-inline-md" to="#about">About</NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to="#contact">Contact</NavigationLink>
                    </li>
                </ul>
            </div>
            <div className={c(navContent, "height-full", { [navIsExpanded]: expanded })}>
                <NavigationLink to="#about" onClick={handleClick}><h2 className={c(navLink, "height-fulls text-center text-title-1 width-full", { [navIsExpanded]: expanded })}>About</h2></NavigationLink>
                <NavigationLink to="#contact" onClick={handleClick}><h2 className={c(navLink, "height-full text-center text-title-1 width-full", { [navIsExpanded]: expanded })}>Contact</h2></NavigationLink>
            </div>
            <div className={c(navFooter, "font-sans-serif text-body spacing-inset-squish-md", { [navIsExpanded]: expanded })}>
                <p className={c({ [navIsExpanded]: expanded })}>São Paulo, Brazil.</p>
                <p className={c("text-right", { [navIsExpanded]: expanded })}>Froes © 2022.</p>
            </div>
        </nav>
    )
}

export default Nav