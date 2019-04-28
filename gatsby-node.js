/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `posts` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

const path = require("path")
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/components/post-template.js`)
    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        html
                        id
                        frontmatter {
                            date
                            title
                            description
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result["errors"]) {
            return Promise.reject(result["errors"])
        }
        const postList = result.data["allMarkdownRemark"]["edges"];
        postList.forEach(({ node }, index) => {
            const older = index === postList.length - 1 ? null : postList[index + 1].node
            const newer = index === 0 ? null : postList[index - 1].node
            createPage({
                path: node.fields["slug"],
                component: blogPostTemplate,
                context: {
                    older,
                    newer
                },
            })
        })
    })
}
