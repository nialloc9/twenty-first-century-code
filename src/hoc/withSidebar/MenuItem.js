import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import Icon from '../../components/Common/Styled/Icon';
import Block from '../../components/Common/Styled/Block';
import theme from '../../config/theme';

const { colors: { second } } = theme;

class MenuItem extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        rotate: PropTypes.bool,
        text: PropTypes.string,
        selected: PropTypes.string,
        name: PropTypes.string,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    state = {
        mouseOver: false
    };

    static defaultProps = {
        text: "",
        selected: "selected",
        name: "name",
        rotate: false,
        onClick: null,
        onMouseEnter: null,
        onMouseLeave: null
    };

    handleClick = () => {
        const { name, onClick } = this.props;
        onClick && onClick(name);
    };

    handleMouseEnter = () => {

        const { onMouseEnter } = this.props;

        this.setState({
            mouseOver: true
        });

        onMouseEnter && onMouseEnter();

    };

    handleMouseLeave = () => {

        const { onMouseLeave } = this.props;

        this.setState({
            mouseOver: false
        });

        onMouseLeave && onMouseLeave();

    };

    render() {
        const {
            selected,
            name,
            icon,
            text,
            rotate,
            ...rest
        } = this.props;

        const { mouseOver } = this.state;

        return (
            <Menu.Item
                active={selected === name}
                name={name}
                {...rest}
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <Icon
                    name={icon}
                    color={second}
                    hoverTransform={(rotate && mouseOver) ? 'rotate(40deg)' : false}
                    hoverTransition={(rotate && mouseOver) ? 'transition 1s linear 1s, -webkit-transform 1s, -ms-transform' : false}
                />
                <Block color={second}>
                    {text}
                </Block>
            </Menu.Item>
        )
    }
}

export default MenuItem;