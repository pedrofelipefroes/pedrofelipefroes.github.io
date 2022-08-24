import * as React from "react"
import c from "classnames"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { arrowhead, navigationLink } from "./navigation-link.module.css"

const NavigationLink = ({ classNames, children, hasIcon, to, ...other }) => {
    const internal = /^\/(?!\/)/.test(to)
    const defaultClasses = "color-on-bg font-medium font-monospace text-caption text-uppercase tracking-wider"
    const className = classNames ? c(navigationLink, classNames, defaultClasses) : c(navigationLink, defaultClasses)

    const icon = hasIcon ?
        <svg className="icon spacing-inline-sm" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="11.5" x2="23" y2="11.5" />
            <g className={arrowhead}>
                <path d="M15.5 16C15.5 16 15.5 11.5 21.5 11.5H23" />
                <path d="M15.5 7C15.5 7 15.5 11.5 22 11.5H23" />
            </g>
        </svg>
        : null

    if (internal) {
        return (
            <Link className={className} to={to} {...other}>
                {icon} {children}
            </Link>
        )
    }

    return (
        <a className={className} href={to} {...other}>
            {icon} {children}
        </a>
    )
}

NavigationLink.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
    to: PropTypes.string.isRequired,
}

export default NavigationLink