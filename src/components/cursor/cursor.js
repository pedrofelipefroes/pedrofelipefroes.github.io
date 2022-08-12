import React, { useEffect, useRef, useState } from "react"

const Cursor = () => {
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

        const handleMouseMove = ({ x, y }) => {
            if (!cursorLocked) {
                cursor.style.setProperty("--cursor-top", y + "px")
                cursor.style.setProperty("--cursor-left", x + "px")
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

        const handleTextMouseOut = () => {
            cursor.style.setProperty("--cursor-width", defaultCursorSize);
            cursor.style.setProperty("--cursor-height", defaultCursorSize);
        }

        const handleTextMouseOver = ({ target }) => {
            const lineHeight = getComputedStyle(target).lineHeight

            cursor.style.setProperty("--cursor-width", "0.15em");
            cursor.style.setProperty("--cursor-height", "calc(" + lineHeight + " + 0.3em)");
        }

        document.addEventListener("mousedown", handleMouseDown)
        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)

        document.querySelectorAll(".text-link").forEach((link) => {
            link.addEventListener("mouseenter", handleLinkMouseEnter, { passive: true })
            link.addEventListener("mouseleave", handleLinkMouseLeave, { passive: true })
            link.addEventListener("mousemove", handleLinkMouseMove, { passive: true })
        })

        document.querySelectorAll(".text-title-1, .text-title-2, .text-body").forEach((text) => {
            text.addEventListener("mouseout", handleTextMouseOut, { passive: true })
            text.addEventListener("mouseover", handleTextMouseOver, { passive: true })
        })

        return () => {
            document.removeEventListener("mousedown", handleMouseDown)
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)

            document.querySelectorAll(".text-link").forEach((link) => {
                link.removeEventListener("mouseenter", handleLinkMouseEnter)
                link.removeEventListener("mouseleave", handleLinkMouseLeave)
                link.removeEventListener("mousemove", handleLinkMouseMove)
            })

            document.querySelectorAll(".text-title-1, .text-title-2, .text-body").forEach((text) => {
                text.removeEventListener("mouseout", handleTextMouseOut)
                text.removeEventListener("mouseover", handleTextMouseOver)
            })
        }

    }, [cursorLocked])

    return (
        <div className="c-cursor" ref={ref}>
            <div className="c-cursor__content" />
        </div>
    )
}

export default Cursor


// const cursor = document.querySelector("#cursor");

// const DEFAULT_CURSOR_SIZE = cursor.style.getPropertyValue("--height");

// let isCursorLocked = false;

// document.addEventListener("mousedown", () => {
//     if (!isCursorLocked) {
//         cursor.style.setProperty("--scale", 0.9);
//     }
// });

// document.addEventListener("mouseup", () => {
//     if (!isCursorLocked) {
//         cursor.style.setProperty("--scale", 1);
//     }
// });

// document.addEventListener("mousemove", ({ x, y }) => {
//     if (!isCursorLocked) {
//         cursor.style.setProperty("--top", y + "px");
//         cursor.style.setProperty("--left", x + "px");
//     }
// });

// document.querySelectorAll("a").forEach((a) => {
//     let rect = null;

//     a.addEventListener(
//         "mouseenter",
//         ({ target }) => {
//             isCursorLocked = true;

//             rect = target.getBoundingClientRect();

//             cursor.classList.add("is-locked");
//             cursor.style.setProperty("--top", rect.top + rect.height / 2 + "px");
//             cursor.style.setProperty("--left", rect.left + rect.width / 2 + "px");
//             cursor.style.setProperty("--width", rect.width + "px");
//             cursor.style.setProperty("--height", rect.height + "px");

//             target.style.setProperty("--scale", 1.05);
//         },
//         { passive: true }
//     );

//     a.addEventListener(
//         "mousemove",
//         ({ target }) => {
//             const halfHeight = rect.height / 2;
//             const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
//             const halfWidth = rect.width / 2;
//             const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

//             cursor.style.setProperty("--translateX", `${leftOffset * 3}px`);
//             cursor.style.setProperty("--translateY", `${topOffset * 3}px`);

//             target.style.setProperty("--translateX", `${leftOffset * 6}px`);
//             target.style.setProperty("--translateY", `${topOffset * 4}px`);
//         },
//         { passive: true }
//     );

//     a.addEventListener(
//         "mouseleave",
//         ({ target }) => {
//             isCursorLocked = false;

//             cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
//             cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
//             cursor.style.setProperty("--translateX", 0);
//             cursor.style.setProperty("--translateY", 0);

//             target.style.setProperty("--translateX", 0);
//             target.style.setProperty("--translateY", 0);
//             target.style.setProperty("--scale", 1);

//             setTimeout(() => {
//                 if (!isCursorLocked) {
//                     cursor.classList.remove("is-locked");
//                 }
//             }, 100);
//         },
//         { passive: true }
//     );
// });

// document.querySelectorAll("p").forEach((p) => {
//     p.addEventListener(
//         "mouseover",
//         () => {
//             cursor.style.setProperty("--width", "0.2em");
//             cursor.style.setProperty("--height", "1.5em");
//         },
//         { passive: true }
//     );

//     p.addEventListener(
//         "mouseout",
//         () => {
//             cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
//             cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
//         },
//         { passive: true }
//     );
// });