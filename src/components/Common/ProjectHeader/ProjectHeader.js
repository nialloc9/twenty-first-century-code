import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header as SemanticHeader } from 'semantic-ui-react';
import Header from '../Styled/Header';
import Block from '../Styled/Block';
import theme from '../../../config/theme';
import { remCalc } from '../../../common/helpers';

const { colors: { fontColor } } = theme;

class ProjectHeader extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        dropdown: PropTypes.bool,
        dropdownWidth: PropTypes.number,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        dropdown: true,
        dropdownWidth: 300,
        placeholder: "Select Project",
        onChange: null
    };

    handleChange = (event, { value }) => {
        const { onChange } = this.props;

        onChange(value)
    };

    render() {

        const { title, subTitle, dropdown, dropdownWidth, ...rest } = this.props;
        return (
            <Block>
                <Block margin={`${remCalc(20)} 0`}>
                    <Header as="h1" color={fontColor}>
                        {title}
                        <SemanticHeader.Subheader>
                            <Block color={fontColor}>
                                {subTitle}
                            </Block>
                        </SemanticHeader.Subheader>
                    </Header>
                    {
                        dropdown &&
                        <Block minWidth={remCalc(dropdownWidth)}>
                            <Dropdown
                                fluid
                                search
                                selection
                                {...rest}
                                onChange={this.handleChange}
                            />
                        </Block>
                    }
                </Block>
            </Block>
        )
    }
};

export default ProjectHeader;