import React from "react"
import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import style from "./header.module.css"
import ThemeButton from "../button"


const Header = ({ siteTitle }) => {
    return (
        <header className={style.header}>
            <div className={style.div}>
                <h1 className={style.h1}>
                    <Link to="/" className={style.Link}>
                        {siteTitle}
                    </Link>
                </h1>
                <ThemeButton/>
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
