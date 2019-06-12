import React, { Component } from 'react';
import Block from './Block';
import Styled from 'styled-components';
import { remCalc } from '../../../common/helpers';

const Pre = Styled('pre')`
    textAlign: left;
`;

class CodeBlock extends Component{

    render(){

        const { children, ...rest } = this.props;

        return <Block
            textAlign="left"
            padding={remCalc(5)}
            width="100%"
            backgroundColor="aliceblue"
            overflow="auto"
            {...rest}
        >
            <Pre>
                <code>
                    {children}
                </code>
            </Pre>
        </Block>
    }

}

export default CodeBlock;