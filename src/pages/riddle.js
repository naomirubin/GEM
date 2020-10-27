import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Riddle = () => (
  <Layout>
    <SEO title="Riddle" />
    <h1 class>Riddle</h1>
    <p>Welcome to the riddle page</p>
    <Link to="/">Go back to the homepage</Link>
    <div>
      <input
        type="text"
        value={Riddle.value}
        onChange={event => console.log("value changed!")}
        />
        <p></p>
    </div>

    
    
  </Layout>
)

export default Riddle
