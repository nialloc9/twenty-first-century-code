import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Card from './Card';
import { remCalc } from '../../../common/helpers';
import nodeGreen from '../../../static/images/nodeGreen.png';

class CardFour extends Component {

    render(){
        return (
            <Card>
                <Block
                    padding={remCalc(2)}
                    height="100%"
                    width="100%"
                >
                    <Block
                        height="100%"
                        width="100%"
                        backgroundImage={`url(${nodeGreen})`}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                    />
                </Block>
            </Card>
        )
    }
}

export default CardFour;