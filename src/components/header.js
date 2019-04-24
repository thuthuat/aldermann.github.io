import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"
import style from "./header.module.css"
import { Button } from "antd"
import ThemeContext from "../context"
import { useContext } from "react"

const Header = ({ siteTitle }) => {
    const {theme, switchTheme} = useContext(ThemeContext)
    return (
        <header className={style.header}>
            <div className={style.div}>
                <h1 className={style.h1}>
                    <Link to="/" className={style.Link}>
                        {siteTitle + " " + theme}
                    </Link>
                </h1>
                <Button
                    className={style.button}
                    icon="bulb"
                    type="primary"
                    shape="circle"
                    onClick={switchTheme}
                />
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
