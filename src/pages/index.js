import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img
      src="maskable_icon.png"
      alt="GEM Logo"
      style={{
        size: "100%",
        marginTop: "-60px",
        height: "100%",
        width: "100%",
        marginLeft: "0%",
      }}
    ></img>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2em",
      }}
    >
      {/* LEFT */}
      <div>
        {/* <p class="about-gem">XYZ...</p> */}
        <button class="start-button">
          <Link class="button-link" to="/game/">
            START GAME
          </Link>
        </button>
      </div>
      {/* RIGHT */}
      <div>
        <button class="start-button">
          {" "}
          <Link class="button-link" to="/riddle/">
            START RIDDLE
          </Link>
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
