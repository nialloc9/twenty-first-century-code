import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withClickOutside from "react-click-outside";

class ClickOutside extends Component{

    static propTypes = {
        onClickOutside: PropTypes.func.isRequired
    };

    handleClickOutside = () => {
        const { onClickOutside } = this.props;

        onClickOutside();
    };

    render(){
        const { children } = this.props;

        return <div>{children}</div>
    }
}

export default withClickOutside(ClickOutside);