import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Image from '../../../components/Common/Styled/Image';
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
                    <Image
                        fluid
                        width="100%"
                        height="100% !important"
                        src={mySqlBlack}
                    />
                </Block>
            </Card>
        )
    }
}

export default CardFive;