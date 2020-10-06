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
  </Layout>
)

export default Riddle
