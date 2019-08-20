import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => (
  <Layout>  
    <Head title="Home"/>
    <h1 style={{ lineHeight: '1.6' }}>Hello👋 folks, <br />I'm Ubaid Siddiqui</h1>
    <p style={{ fontStyle: 'oblique' }}>Front-end Web Developer</p>
    <p>I am self-taught and committed web developer from India. I have a good knowledge of popular web technology such as HTML5, CSS, Sass, JavaScript, also including well-known JavaScript library React. I use Node.js for backend and MongoDB for database.</p>
    <p>I love solving problems with code. My primary aim is to provide highly polished and bug-free website and web application which serves your purpose perfectly.</p>
    <p>I am curious learner and keep myself updated with latest technology and trends.</p>
    <p><Link style={{ textDecoration: 'none', fontStyle: 'oblique' }} to="/contact">Let's talk</Link></p>

  </Layout>
);

export default IndexPage;