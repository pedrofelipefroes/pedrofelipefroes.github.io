import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"

import Cursor from "../components/cursor/cursor"
import Nav from "../components/nav/nav"
import NavigationLink from "../components/navigation-link/navigation-link"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <>
    <header className="l-header">
      <Nav />
      <h1 className="l-header__headline text-title-2"><em>Froes</em> is a designer and computer engineer with a knack for systematic design.</h1>
      <div className="l-header__links">
        <NavigationLink to="#about">About</NavigationLink>
        <br />
        <NavigationLink to="#contact">Contact</NavigationLink>
      </div>
    </header>
    <div style={{ padding: "1em" }}>
      <h1 className="text-title-1">New portfolio.<br />Soon.  </h1>
      <br />
      <p className="text-body">Froes © 2022.</p>
      <NavigationLink to="https://froes.design">Home</NavigationLink>
      <p className="text-body" style={{ maxWidth: "512px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at laoreet nunc. Proin ut feugiat enim. Duis augue ipsum, auctor a lobortis sit amet, efficitur a augue. Aliquam dui ipsum, faucibus id lorem quis, pharetra accumsan velit. Nullam maximus elit scelerisque felis varius malesuada. Morbi euismod lectus eu consequat aliquet. Sed tempus, ante mollis fringilla tincidunt, ante lectus cursus sapien, eget egestas est velit quis risus. Ut cursus sapien vitae lorem egestas, et ultricies nisl lacinia.<br />
        Sed dictum velit sit amet mattis suscipit. Quisque eget eleifend sapien. Aliquam nec ornare orci. Maecenas lobortis sollicitudin justo, sed sagittis augue fermentum iaculis. Praesent ante mauris, scelerisque vel nulla vel, dapibus pulvinar lectus. Duis luctus malesuada velit, a consequat purus ultrices interdum. Curabitur eu ultricies tortor, vitae viverra lacus. Ut vitae ex sollicitudin, sodales urna sed, auctor sapien. Suspendisse nec diam sit amet leo mattis hendrerit quis et odio. Donec venenatis est vitae nisi convallis, vel suscipit dolor euismod. Pellentesque quis nibh at nisl faucibus dignissim. Nam et augue odio.<br />
        Vivamus venenatis, ipsum lacinia consequat tempor, nulla augue commodo dui, sit amet molestie neque nisi vel turpis. Nunc metus ligula, venenatis vel maximus et, molestie vulputate ex. Nulla rhoncus tortor a metus aliquam venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer auctor justo ligula, quis sollicitudin tellus ultrices a. Etiam dui mi, imperdiet in viverra ac, vestibulum fermentum ipsum. Cras ligula nisi, vestibulum eu fermentum vel, malesuada non velit. In hac habitasse platea dictumst. Sed arcu ligula, volutpat eget metus nec, blandit faucibus mi. Pellentesque imperdiet cursus commodo. Integer ac felis eu nibh euismod fermentum non sit amet enim.<br />
        Curabitur suscipit odio quis odio accumsan dignissim. Praesent et lobortis erat, non consectetur odio. Proin non neque vel lorem ultrices accumsan et ut risus. Suspendisse varius mauris in eros pretium bibendum. Aliquam varius, erat ac interdum imperdiet, mauris est lobortis risus, a viverra turpis odio id orci. Nullam congue ipsum eget massa fermentum, eu efficitur dolor egestas. Aenean eu odio condimentum, dignissim metus in, dignissim dolor. Nulla tempor massa sit amet libero vestibulum, in molestie ex posuere. Etiam finibus id sapien in dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vulputate nulla eget pretium efficitur.<br />
        Mauris auctor vehicula elit id venenatis. Curabitur vestibulum vestibulum odio, laoreet mollis ligula consequat nec. In vel sollicitudin libero, sed euismod augue. Ut id mi ultrices, sodales felis sed, vestibulum enim. Ut luctus id neque ut luctus. Praesent quis ligula erat. In hac habitasse platea dictumst. Donec posuere libero justo, quis elementum enim rutrum sed. Donec cursus, velit a tincidunt placerat, mi urna lacinia eros, non tincidunt augue lacus ac dui.<br />
      </p>
    </div>
    <Cursor />
  </>
)

export default IndexPage
