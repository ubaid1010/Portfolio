import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>Blog posts</h1>
      <ul className={blogStyles.blogPostList}>
        {
          data.allMarkdownRemark.edges.map((item) => (
            <li key={item.node.frontmatter.title}>
              <h2>{item.node.frontmatter.title}</h2>
              <p>{item.node.frontmatter.date}</p>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default BlogPage;