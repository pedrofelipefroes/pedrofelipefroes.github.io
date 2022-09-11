import React from "react"
import c from "classnames"
import PropTypes from "prop-types"

import { button } from "./button.module.css"

const Button = ({ children, ...props }) => {
    return (
        <button className={c(button, "color-on-bg js-interactable-button text-ms-0")} {...props}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button