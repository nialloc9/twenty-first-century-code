import React, { Component } from 'react';
import Block from '../../../components/Common/Styled/Block';
import Image from '../../../components/Common/Styled/Image';
import SoftLink from "../../../components/Common/Styled/SoftLink";
import Card from './Card';
import { remCalc } from '../../../common/utils';
import cloudComputing from '../../../static/images/new/cloudComputing.png';

class CardTwo extends Component {

    render(){
        return (
            <SoftLink
                to="/cloud-computing"
            >
                <Card>
                    <Block
                        padding={remCalc(2)}
                        height="100%"
                        width="100%"

                    >
                        <Image
                            width="100%"
                            height="100%"
                            src={cloudComputing}
                        />
                    </Block>
                </Card>
            </SoftLink>
        )
    }
}

export default CardTwo;