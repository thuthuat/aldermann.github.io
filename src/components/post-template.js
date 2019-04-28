import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import NavBar from "../components/navbar"

export default function Template({data, pageContext}) {
    const { markdownRemark: post } = data
    const time = new Date(post.frontmatter.date)
    return (
        <>
            <Layout>
                <SEO title={post.frontmatter.title} />
                <i>{time.toDateString()}</i>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <NavBar newer={pageContext.newer} older={pageContext.older}/>
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
