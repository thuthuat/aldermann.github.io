import { Tag } from "antd"
import React, { useContext } from "react"
import { lightColor, darkColor } from "./tagInfo"
import ThemeContext from "../../context"

import * as PropTypes from "prop-types"

const TagList = ({ keyword, closable, onTagClose }) => {
    const { theme } = useContext(ThemeContext)
    const tagColor = theme === "light" ? lightColor : darkColor
    return (
        <>
            {keyword.map((word, index) => (
                <Tag
                    key={index}
                    color={tagColor[word] || tagColor.default}
                    closable={closable}
                    onClose={onTagClose(word)}
                >
                    {word}
                </Tag>
            ))}
        </>
    )
}

TagList.propTypes = {
    keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
    closable: PropTypes.bool,
    onTagClose: PropTypes.func,
}

TagList.defaultProps = {
    closable: false,
    onTagClose: () => {},
}

export default TagList
