import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <p>I am Ubaid, a Front-end Developer from India</p>
    <p>Need a Developer to build your amazing website then <Link to="/contact">Contact Me</Link></p>
  </Layout>
);

export default IndexPage;