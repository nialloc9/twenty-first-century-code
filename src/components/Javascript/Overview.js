import React, { PureComponent } from 'react';
import Block from '../Common/Styled/Block';
import Image from '../Common/Styled/Image';
import javascriptYellow from '../../static/images/javascriptYellow.png';
import theme from '../../config/theme';
import globals from '../../config/globals';
import { remCalc } from '../../common/helpers';

const {
    GITHUB
} = globals;
const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Overview extends PureComponent {
    render(){
        return(
            <Block fontColor={fontColor} lineHeight={lineHeight} fontSize={fontSize} maxWidth={remCalc(800)}>
                <Block>
                    <Image
                        src={javascriptYellow}
                        margin="auto"
                        size="large"
                        alt="Java image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Here we will look at some javascript projects that I completed. Javascript is my language of choice and hopefully you
                    will find these projects rich in detail and to your liking. Some of these projects are wrote in es5 while others are
                    wrote using es6 and compiled back to es5 using a compiler. Here you will find differant code patterns aswell astechnoligies such as redux and react.
                    All the source code will be available on <a target="_blank" href={GITHUB}>github</a> and I will provide links where appropriate.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    As I said javascript is my language of choice. This is because I love the feel of the language. I love how it can be intuitive
                    and maddening at the same time. I love how it is adaptable while at the same time lending structure to the mix. But most
                    of all I love how it can be used to make truly beautiful things.
                </Block>

            </Block>
        )
    }
}

export default Overview;