import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Image from '../../../components/Common/Styled/Image';
import SoftLink from "../../../components/Common/Styled/SoftLink";
import Card from './Card';
import { remCalc } from '../../../common/helpers';
import css3Blue from '../../../static/images/css3Blue.png';

class CardSix extends Component {

    render(){
        return (
            <SoftLink
                to="/style"
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
                            alt="Style Articles"
                            src={css3Blue}
                        />
                    </Block>
                </Card>
            </SoftLink>
        )
    }
}

export default CardSix;