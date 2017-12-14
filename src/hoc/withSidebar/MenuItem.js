import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Icon, Menu } from 'semantic-ui-react';

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
            onMouseLeave
        } = this.props;

        return (
            <Menu.Item
                active={selected === name}
                name={name}
                onClick={this.handleClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Icon loading={loading} name={icon} />
                {text}
            </Menu.Item>
        )
    }
}

export default MenuItem;