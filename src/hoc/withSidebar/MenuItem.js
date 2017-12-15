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
        loading: PropTypes.bool,
        text: PropTypes.string,
        selected: PropTypes.string,
        name: PropTypes.string,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    static defaultProps = {
        text: "",
        selected: "selected",
        name: "name",
        loading: false,
        onClick: null,
        onMouseEnter: null,
        onMouseLeave: null
    };

    handleClick = () => {
        const { name, onClick } = this.props;
        onClick && onClick(name);
    };

    render() {
        const {
            selected,
            name,
            icon,
            text,
            loading,
            onMouseEnter,
            onMouseLeave,
            ...rest
        } = this.props;

        return (
            <Menu.Item
                active={selected === name}
                name={name}
                onClick={this.handleClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                <Icon loading={loading} name={icon} color={second} />
                <Block color={second}>
                    {text}
                </Block>
            </Menu.Item>
        )
    }
}

export default MenuItem;