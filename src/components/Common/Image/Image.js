import React from "react"
import PropTypes from "prop-types"
import {Image as StyledImage, Block} from "../Styled"
import {remCalc} from "../../../common/utils"

const Image = props => {

    const { alt, hasLegend, ...rest } = props

    const renderLegend  = alt && hasLegend && <Block margin={remCalc(15)} fontWeight={800}>{alt}</Block>

    return <Block textAlign="center"><StyledImage alt={alt} {...rest} />{renderLegend}</Block>
}

Image.propTypes = {
    alt: PropTypes.string,
    hasLegend: PropTypes.bool
}

Image.defaultProps = {
    alt: "",
    hasLegend: false
}

export default Image