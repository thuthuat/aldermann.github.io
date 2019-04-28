import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"
import SEO from "./seo"
import NavBar from "./navbar"

export default function Template({ data, pageContext }) {
    const { markdownRemark: post } = data
    const time = new Date(post.frontmatter.date)
    return (
        <>
            <Layout>
                <SEO title={post.frontmatter.title} />
                <h1>{post.frontmatter.title}</h1>
                <i>{time.toDateString()}</i>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <NavBar newer={pageContext.newer} older={pageContext.older} />
            </Layout>
        </>
    )
}
export const query = graphql`
    query($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
                date
                title
            }
            fields {
                slug
            }
        }
    }
`
