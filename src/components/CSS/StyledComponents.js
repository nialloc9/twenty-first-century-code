import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import styledComponentsLogo from '../../static/images/projects/styledComponents/styledComponentsLogo.png';
import styledBlock from '../../static/images/projects/styledComponents/styledBlock.png';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class StyledComponents extends PureComponent{

    render(){
        return(
            <Block
                fontColor={fontColor}
                fontSize={fontSize}
                lineHeight={lineHeight}
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={styledComponentsLogo}
                        margin="auto"
                        size="medium"
                        alt="Styled Components Logo"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/styledComponents">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    CSS or javascript? How about both. <a href="https://www.styled-components.com/" target="__blank">Styled components</a> give us the power to write our styles in javascript for react or react native components.
                    This makes the components incredibly reuseable. What if I told you that this website is built with just 11 core components? That would be amazing. Well in fact it is.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Instead of creating new classes each time we wish to style a component differantly we use styled components that are just components that take prop values of the
                    css attribute and use template literals with interpolation to set out the styles. This reduces code immensely and instead of having to pass in a className prop and then creating that class in a css file we can pass in our
                    attribute directly. See below our styled Block that is in actual fact just an ordinary div that we are creating with a class that is generated with the attributes we designate
                    as props.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    <Image
                        src={styledBlock}
                        margin="auto"
                        size="huge"
                        alt="Image of styled div code"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Also note how we can also set out the attributes behavour on mobile and make it reuseable aswell. By passing in a prop of mobileMargin it will go inside the media query to and
                    change the components appearance on mobile. This could also be done for any other screen device you wish. It is important to note instead of a default value of something like 0 we are
                    setting it as false. This is so the attribute is only added if there is a value passed. If you so wished you could change the default value to anything you wished.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 06/01/2018
                </Block>
            </Block>
        )
    }
}

export default StyledComponents;