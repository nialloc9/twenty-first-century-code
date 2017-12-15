import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Card from './Card';
import { remCalc } from '../../../common/helpers';
import css3Blue from '../../../static/images/css3Blue.png';

class CardSix extends Component {

    render(){
        return (
            <Card>
                <Block
                    padding={remCalc(2)}
                    height="100%"
                    width="100%"
                    backgroundColor="white"
                >
                    <Block
                        height="100%"
                        width="100%"
                        backgroundImage={`url(${css3Blue})`}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                    />
                </Block>
            </Card>
        )
    }
}

export default CardSix;