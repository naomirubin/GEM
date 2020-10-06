import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>GEM</h1>
    <p>This is the GEM homepage.</p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2em",
      }}
    >
      {/* LEFT */}
      <div>
        <p class="about-gem">XYZ...</p>
      </div>
      {/* RIGHT */}
      <div>
        <button class="start-button">
          <Link class="button-link" to="/game/">
            Start Game
          </Link>
        </button>
        <button class="start-button">
          {" "}
          <Link class="button-link" to="/riddle/">
            Start Riddle
          </Link>
        </button>
      </div>
    </div>
    <Link to="/game/">Go to game</Link> <br />
    <Link to="/riddle/">Go to riddle</Link> <br />
  </Layout>
)

export default IndexPage
