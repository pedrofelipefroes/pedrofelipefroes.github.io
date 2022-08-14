import React, { useEffect, useRef, useState } from "react"

const Cursor = () => {
    const endX = useRef(window.innerWidth / 2)
    const endY = useRef(window.innerHeight / 2)
    const ref = useRef(null)
    const [cursorLocked, setCursorLocked] = useState(false)

    useEffect(() => {
        const cursor = ref.current
        const defaultCursorSize = "1em"

        const handleMouseDown = () => {
            if (!cursorLocked) {
                cursor.style.setProperty("--cursor-scale", .5)
            }
        }

        const handleMouseMove = e => {
            endX.current = e.pageX
            endY.current = e.pageY

            if (!cursorLocked) {
                cursor.style.setProperty("--cursor-top", endY.current + "px")
                cursor.style.setProperty("--cursor-left", endX.current + "px")
            }
        }

        const handleMouseUp = () => {
            if (!cursorLocked) {
                cursor.style.setProperty("--cursor-scale", 1)
            }
        }

        const handleLinkMouseEnter = ({ target }) => {
            setCursorLocked(true)

            document.removeEventListener("mousemove", handleMouseMove)

            cursor.classList.add("is-locked")

            let rect = target.getBoundingClientRect()

            cursor.style.setProperty("--cursor-top", rect.top + rect.height / 2 + "px")
            cursor.style.setProperty("--cursor-left", rect.left + rect.width / 2 + "px")
            cursor.style.setProperty("--cursor-width", "calc(" + rect.width + "px + 1.2em)")
            cursor.style.setProperty("--cursor-height", "calc(" + rect.height + "px + .8em)")

            target.style.setProperty("--cursor-scale", 1.05)
        }

        const handleLinkMouseLeave = ({ target }) => {
            setCursorLocked(false)

            document.addEventListener("mousemove", handleMouseMove)

            cursor.classList.remove("is-locked");

            cursor.style.setProperty("--cursor-width", defaultCursorSize)
            cursor.style.setProperty("--cursor-height", defaultCursorSize)
            cursor.style.setProperty("--cursor-translateX", 0)
            cursor.style.setProperty("--cursor-translateY", 0)

            target.style.setProperty("--cursor-translateX", 0)
            target.style.setProperty("--cursor-translateY", 0)
            target.style.setProperty("--cursor-scale", 1)
        }

        const handleLinkMouseMove = ({ target, x, y }) => {
            let rect = target.getBoundingClientRect()

            const halfHeight = rect.height / 2
            const topOffset = (y - rect.top - halfHeight) / halfHeight
            const halfWidth = rect.width / 2
            const leftOffset = (x - rect.left - halfWidth) / halfWidth

            cursor.style.setProperty("--cursor-translateX", `${leftOffset * 3}px`)
            cursor.style.setProperty("--cursor-translateY", `${topOffset * 3}px`)

            target.style.setProperty("--cursor-translateX", `${leftOffset * 6}px`)
            target.style.setProperty("--cursor-translateY", `${topOffset * 4}px`)
        }

        // const handleTextMouseOut = () => {
        //     cursor.style.setProperty("--cursor-width", defaultCursorSize);
        //     cursor.style.setProperty("--cursor-height", defaultCursorSize);
        // }

        // const handleTextMouseOver = ({ target }) => {
        //     const lineHeight = getComputedStyle(target).lineHeight

        //     cursor.style.setProperty("--cursor-width", "0.15em");
        //     cursor.style.setProperty("--cursor-height", "calc(" + lineHeight + " + 0.3em)");
        // }

        document.addEventListener("mousedown", handleMouseDown)
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)

        document.querySelectorAll(".text-link:not(.is-hidden), a").forEach((link) => {
            link.addEventListener("mouseenter", handleLinkMouseEnter, { passive: true })
            link.addEventListener("mouseleave", handleLinkMouseLeave, { passive: true })
            link.addEventListener("mousemove", handleLinkMouseMove, { passive: true })
        })

        // document.querySelectorAll(".text-title-1:not(.is-hidden), .text-title-2:not(.is-hidden), .text-body:not(.is-hidden)").forEach((text) => {
        //     text.addEventListener("mouseout", handleTextMouseOut, { passive: true })
        //     text.addEventListener("mouseover", handleTextMouseOver, { passive: true })
        // })

        return () => {
            document.removeEventListener("mousedown", handleMouseDown)
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)

            document.querySelectorAll(".text-link:not(.is-hidden), a").forEach((link) => {
                link.removeEventListener("mouseenter", handleLinkMouseEnter)
                link.removeEventListener("mouseleave", handleLinkMouseLeave)
                link.removeEventListener("mousemove", handleLinkMouseMove)
            })

            // document.querySelectorAll(".text-title-1:not(.is-hidden), .text-title-2:not(.is-hidden), .text-body:not(.is-hidden)").forEach((text) => {
            //     text.removeEventListener("mouseout", handleTextMouseOut)
            //     text.removeEventListener("mouseover", handleTextMouseOver)
            // })
        }

    }, [cursorLocked])

    return (
        <div className="c-cursor" ref={ref}>
            <div className="c-cursor__content" />
        </div>
    )
}

export default Cursor