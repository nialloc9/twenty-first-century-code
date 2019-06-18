import React, { Component, Fragment } from 'react';
import Lightbox from 'react-image-lightbox';
import { Image } from "../Styled"
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

class ImagePopup extends Component {

    state = {
        isOpen: false,
    }

    onOpen = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

    renderLightBox = () => {

        const { isOpen } = this.state;

        const { src } = this.props

        if(!isOpen) return null

        return (
            <Lightbox
                mainSrc={src}
                onCloseRequest={this.onOpen}
          />
        )
    }
    
    render() {
        return (
            <Fragment>
                <Image hoverOpacity={0.6} hoverTransition="opacity 1s ease-in-out" cursor="pointer" {...this.props} onClick={this.onOpen} />
                {this.renderLightBox()}
            </Fragment>
        );
    }
}

export default ImagePopup