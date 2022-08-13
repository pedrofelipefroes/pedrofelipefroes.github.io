import React, { useRef, useState } from "react"
import c from "classnames"

import NavigationLink from "../navigation-link/navigation-link"

const Nav = () => {
    const ref = useRef(null)
    const [expanded, setExpanded] = useState(false)

    return (
        <nav className={c("c-nav", { "c-nav--expanded": expanded })}>
            <div className="c-nav__header">
                <NavigationLink to="/">froes.design</NavigationLink>
                <svg className={c("icon c-nav__icon", { "c-nav__icon--expanded": expanded })} ref={ref} onClick={() => setExpanded(!expanded)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="9.5" x2="23" y2="9.5" />
                    <line x1="1" y1="13.5" x2="23" y2="13.5" />
                </svg>
                <div className="c-nav__items">
                    <NavigationLink to="#about">About</NavigationLink>
                    <NavigationLink to="#contact">Contact</NavigationLink>
                </div>
            </div>
            <div className="c-nav__content">
                <NavigationLink to="#about"><h2 className="text-title-2">About</h2></NavigationLink>
                <NavigationLink to="#contact"><h2 className="text-title-2">Contact</h2></NavigationLink>
            </div>
            <div className="c-nav__footer">
                <p className="text-body">São Paulo, Brazil.</p>
                <p className="text-body">Froes © 2022.</p>
            </div>
        </nav>
    )
}

export default Nav