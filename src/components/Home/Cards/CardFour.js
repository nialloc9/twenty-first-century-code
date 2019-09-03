import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Image from '../../../components/Common/Styled/Image'
import SoftLink from "../../../components/Common/Styled/SoftLink";
import Card from './Card';
import { remCalc } from '../../../common/utils';
import nodeGreen from '../../../static/images/nodeGreen.png';

class CardFour extends Component {

    render(){
        return (
            <SoftLink
                to="/node"
            >
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
                            src={nodeGreen}
                        />
                    </Block>
                </Card>
            </SoftLink>
        )
    }
}

export default CardFour;