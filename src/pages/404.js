import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
    <h2>Page not found</h2>
    <p><Link to="/">Go to homepage</Link></p>
  </Layout>
)

export default NotFoundPage