import React from "react"
import * as PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import style from "./layout.module.css"
import "./theme.css"

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                    className={style.div}
                >
                    <main>{children}</main>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
