import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Card from './Card';
import { remCalc } from '../../../common/helpers';
import javascriptYellow from '../../../static/images/javascriptYellow.png';

class CardTwo extends Component {

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
                        backgroundImage={`url(${javascriptYellow})`}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="bottom"
                    />
                </Block>
            </Card>
        )
    }
}

export default CardTwo;