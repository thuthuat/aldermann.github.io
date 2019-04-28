import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => {
    const { edges: posts } = data["allMarkdownRemark"]
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[
                    `programming`,
                    `music`,
                    `blogging`,
                    "guitar",
                    "developer",
                ]}
            />
            <div>
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <div
                                className={style["blogPostPreview"]}
                                key={post.id}
                            >
                                <h2>
                                    <Link to={post.fields["slug"]}>
                                        {post.frontmatter.title}
                                    </Link>
                                </h2>
                                <i>
                                    {new Date(
                                        post.frontmatter.date
                                    ).toDateString()}
                                </i>

                                <h4>{post.frontmatter.description}</h4>
                            </div>
                        )
                    })}
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
