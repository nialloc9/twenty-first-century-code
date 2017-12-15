import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Card from './Card';
import { remCalc } from '../../../common/helpers';
import mySqlBlack from '../../../static/images/mySqlBlack.png';

class CardFive extends Component {

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
                        backgroundImage={`url(${mySqlBlack})`}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPositionY={remCalc(-75)}
                    />
                </Block>
            </Card>
        )
    }
}

export default CardFive;