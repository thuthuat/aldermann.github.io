import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"

const Header = ({ siteTitle }) => (
    <header
        className={style.header}
    >
        <div
            className={style.div}
        >
            <h1 className={style.h1}>
                <Link
                    to="/"
                    className={style.Link}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
