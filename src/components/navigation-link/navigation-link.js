import * as React from "react"
import c from "classnames"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { arrowhead, navigationLink } from "./navigation-link.module.css"

const NavigationLink = ({ classNames, children, to, ...other }) => {
    const internal = /^\/(?!\/)/.test(to)
    const defaultClasses = "color-on-bg font-medium font-monospace text-caption text-uppercase tracking-wider"
    const className = classNames ? c(navigationLink, classNames, defaultClasses) : c(navigationLink, defaultClasses)

    if (internal) {
        return (
            <Link className={className} to={to} {...other}>
                {children}
            </Link>
        )
    }

    return (
        <a className={className} href={to} {...other}>
            {children}
        </a>
    )
}

NavigationLink.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.node,
    to: PropTypes.string.isRequired,
}

export default NavigationLink