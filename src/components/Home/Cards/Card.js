import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import theme from '../../../config/theme';
import { remCalc } from '../../../common/utils';

const { colors: { third, fourth } } = theme;


const hoverBoxShadow = `-1px 1px ${fourth},
    ${remCalc(-2)} ${remCalc(2)} ${fourth},
    ${remCalc(-3)} ${remCalc(3)} ${fourth},
    ${remCalc(-4)} ${remCalc(4)} ${fourth},
    ${remCalc(-5)} ${remCalc(5)} ${fourth};`;

class Card extends Component {

    shouldComponentUpdate() {
        return false
    }
    
    render(){
        return  (
            <Block width="100%" textAlign="center" >
                <Block
                    backgroundColor={third}
                    height={remCalc(400)}
                    width={remCalc(400)}
                    opacity={1}
                    hoverOpacity={0.6}
                    hoverBoxShadow={hoverBoxShadow}
                    hoverTransition="box-shadow 1s ease-in-out, clip-path 1s ease-in-out"
                    cursor="pointer"
                    clipPath={`circle(49% at 50% 50%)`}
                    tabletClipPath="circle(100%)"
                    hoverClipPath="circle(100%)"
                    margin="auto"
                    {...this.props}
                />
            </Block>
        )
    }
}

export default Card;