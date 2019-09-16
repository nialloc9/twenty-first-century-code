import React from "react";
import PropTypes from "prop-types"
import { Embed } from "semantic-ui-react"
import { Block } from "../Styled"
import {remCalc} from "../../../common/utils"

const Video = props => {

    const { url, placeholder, source, isHd, legend } = props

    const renderLegend  = legend && <Block margin={remCalc(15)} fontWeight={800}>{legend}</Block>

    return <Block textAlign="center"><Embed iframe={{src: url}} placeholder={placeholder} source={source} hd={isHd} />{renderLegend}</Block>
}

Video.propTypes = {
    url: PropTypes.string.isRequired,
    isHd: PropTypes.bool,
    placeholder: PropTypes.string,
    source: PropTypes.string,
    legend: PropTypes.string,
}

Video.defaultProps = {
    isHd: true,
    legend: "",
    placeholder: "",
    source: "youtube"
}

export default Video