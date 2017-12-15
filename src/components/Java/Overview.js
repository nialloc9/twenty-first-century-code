import React, { PureComponent } from 'react';
import Block from '../Common/Styled/Block';
import Image from '../Common/Styled/Image';
import javaBlue from '../../static/images/javaBlue.png';
import globals from '../../config/globals';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

const {
    REACT_APP_LINKEDIN
} = globals;

class Overview extends PureComponent {
    render(){
        return(
            <Block fontColor={fontColor} lineHeight={lineHeight} fontSize={fontSize} width={remCalc(800)}>
                <Block>
                    <Image src={javaBlue} size="massive" alt="Java image"/>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Java is a language I really enjoy. It is an extremely powerful language that can be used for nearly every project.
                    I will show some of my work in java but there is more available on my github page if you wish. Java is an immensely powerful and huge language so in every project, something new is learned.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Here I want to show three projects. A java 2D game created using the slick2D library, a calculator, and lastly a java instant messenger. These projects I created to try out some of the awesome
                    features in java such as sockets and swing components. I hope you enjoy these projects and any feedback is always welcome so please send me an email or find me on <a target="_blank" href={REACT_APP_LINKEDIN}>linkedin</a>.
                </Block>
            </Block>
        )
    }
}

export default Overview;