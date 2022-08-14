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
      <div className="l-golden-ratio">
        <h1 className="l-header__headline text-title-2"><em>Froes</em> is a designer and computer engineer with a knack for <span className="l-no-wrap">systematic design.</span></h1>
        <div className="l-header__links">
          <NavigationLink to="#about">About</NavigationLink>
          <br />
          <NavigationLink to="#contact">Contact</NavigationLink>
        </div>
      </div>
    </header>
    <section className="l-contact l-golden-ratio" id="#contact">
      <div className="l-contact__links">
        <NavigationLink hasIcon to="mailto:hello@froes.design">hello@froes.design</NavigationLink>
        <br />
        <NavigationLink hasIcon to="https://www.linkedin.com/in/froesdesign/">in/froesdesign</NavigationLink>
        <br />
        <NavigationLink hasIcon to="https://www.instagram.com/pedrofelipefroes/">@pedrofelipefroes</NavigationLink>
      </div>
    </section>
    <footer className="l-footer l-golden-ratio">
      <p className="l-footer__footnote text-body">This site was fully designed and developed by myself, coffee, and <a href="https://open.spotify.com/playlist/0fAnZehFEjglZCHOiGGNcY?si=dae1004bfdf44b20">a playlist filled with visual songs.</a></p>
      <div className="l-footer__info">
        <p className="text-body">
          <span>São Paulo, Brazil.</span>
          <span>Froes © 2022.</span>
        </p>
        <svg className="l-footer__signature" width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.49622 8.53704C7.28707 13.5469 6.83223 18.5368 6.13172 23.5034C6.00888 24.3799 8.26977 23.9881 8.37601 23.2212C9.07653 18.2546 9.53468 13.2647 9.74052 8.25484C9.77704 7.33853 7.5261 7.79005 7.49622 8.53704Z" />
          <path d="M1.81245 9.5928C7.74522 7.96602 13.6946 6.39567 19.6606 4.88177C21.0118 4.53982 20.7163 3.41435 19.3584 3.75962C13.3958 5.27353 7.44642 6.84387 1.51033 8.47065C0.172386 8.83916 0.457903 9.96463 1.81245 9.5928V9.5928Z" />
          <path d="M6.37078 14.2672C9.62102 13.4638 12.8746 12.6604 16.1248 11.8602C17.4794 11.5249 17.1806 10.4028 15.8227 10.7381C12.5725 11.5415 9.3189 12.345 6.06866 13.1451C4.71412 13.4804 5.01291 14.6025 6.37078 14.2672V14.2672Z" />
          <path d="M18.9335 11.3889C18.9136 13.6432 19.0198 15.8875 19.2755 18.1285C19.3585 18.8688 21.616 18.3741 21.5197 17.5275C21.2774 15.3928 21.1579 13.2548 21.1778 11.1101C21.1878 10.1838 18.9401 10.6519 18.9335 11.3923V11.3889Z" />
          <path d="M19.9959 9.77546C21.367 8.71639 23.359 7.94948 25.1119 8.40432C26.0415 8.64335 26.6956 9.18451 25.756 10.1739C25.175 10.788 24.1591 11.0536 23.4055 11.4022C21.8949 12.1028 19.8498 13.0722 21.0384 15.0044C23.5516 19.0913 30.6098 17.9492 34.2584 16.5814C35.7259 16.0303 34.3912 15.2766 33.372 15.6584C30.56 16.7142 25.7593 17.3151 23.5316 14.6857C21.9381 12.8033 24.365 12.3484 25.7593 11.6645C26.6657 11.2196 27.7845 10.632 28.2792 9.69578C29.4611 7.46145 26.1478 7.03317 24.7102 7.04977C22.3132 7.07965 20.0756 7.95612 18.1965 9.40695C17.7649 9.73894 18.0404 10.0444 18.4089 10.2004C18.8837 10.3996 19.6274 10.061 19.9959 9.77546V9.77546Z" />
          <path d="M30.8156 6.9369C30.0421 8.6334 29.0594 11.8338 30.467 13.5038C31.6257 14.8749 33.7771 13.9819 34.9689 13.1386C36.5891 11.9899 37.6846 10.0577 37.5352 8.03581C37.3692 5.78155 35.6196 4.70589 33.5148 5.24372C32.1669 5.589 32.459 6.71114 33.8169 6.36587C35.2644 5.99735 35.3341 8.92888 35.2212 9.59619C35.0652 10.5092 34.4643 12.0596 33.5347 12.5012C30.9783 13.7096 32.6582 7.54445 33.0633 6.6547C33.372 5.97743 31.151 6.20983 30.819 6.9369H30.8156Z" />
          <path d="M39.0491 4.34057C38.8101 6.07359 38.6673 7.84313 38.757 9.59275C38.8234 10.8477 39.2616 11.8005 40.5796 12.0562C43.2456 12.5741 46.1041 10.4593 47.4453 8.34113C47.9998 7.46798 45.7521 7.66717 45.3537 8.29465C44.5868 9.50643 41.5889 12.3649 41.0411 9.55623C40.7058 7.83981 41.0544 5.78143 41.2901 4.06169C41.4096 3.1819 39.1521 3.5803 39.0458 4.34389L39.0491 4.34057Z" />
          <path d="M43.1493 7.54423C44.0191 6.97651 44.889 6.41212 45.7588 5.84441C46.0709 5.64189 46.4161 5.22357 45.9547 4.96794C45.4932 4.7123 44.7562 4.92478 44.3644 5.17709C43.4946 5.74481 42.6247 6.3092 41.7549 6.87691C41.4428 7.07943 41.0976 7.49775 41.559 7.75338C42.0205 8.00902 42.7575 7.79654 43.1493 7.54423V7.54423Z" />
          <path d="M41.9607 4.09153C43.2987 3.57694 44.64 3.05902 45.9779 2.54443C46.2966 2.42159 46.8776 2.03647 46.5755 1.64472C46.2734 1.25296 45.4368 1.48868 45.0882 1.62148C43.7502 2.13607 42.4089 2.65399 41.071 3.16858C40.7523 3.29142 40.1713 3.67654 40.4734 4.06829C40.7755 4.46005 41.6122 4.22433 41.9607 4.09153V4.09153Z" />
          <path d="M51.6915 0.137529C49.8954 0.93432 46.2601 2.86986 47.0336 5.39967C47.369 6.49193 48.5309 6.77413 49.5336 6.87041C50.3171 6.94677 51.1205 6.92685 51.9073 6.94677C52.7639 6.96669 54.9683 6.73097 55.5527 7.4348C58.9025 11.4586 38.6773 17.1059 36.2736 17.6802C34.9158 18.0056 35.2179 19.1277 36.5758 18.8024C40.2211 17.9292 43.8066 16.8336 47.3125 15.5023C50.4798 14.3005 54.1052 13.0588 56.6084 10.6784C58.3348 9.03503 58.8461 6.15662 55.8382 5.7715C54.0653 5.54575 52.0601 6.01718 50.3304 5.58559C48.8364 5.21375 49.1252 3.78617 49.8921 2.84662C50.5628 2.02327 51.6318 1.48211 52.5813 1.06048C54.0089 0.426366 52.7074 -0.310665 51.6949 0.137529H51.6915Z" />
        </svg>
      </div>
    </footer>
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
