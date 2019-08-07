import React from "react";
import PropTypes from "prop-types"
import { Embed } from "semantic-ui-react"

const Video = ({ url, placeholder, source, isHd }) => <Embed iframe={{src: url}} placeholder={placeholder} source={source} hd={isHd} />;

Video.propTypes = {
    url: PropTypes.string.isRequired,
    isHd: PropTypes.bool,
    placeholder: PropTypes.string,
    source: PropTypes.string,
}

Video.defaultProps = {
    isHd: true,
    placeholder: "",
    source: "youtube"
}

export default Video