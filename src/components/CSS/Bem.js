import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import logo from '../../static/images/projects/bem/logo.png';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Bem extends PureComponent{

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
                        src={logo}
                        margin="auto"
                        size="medium"
                        alt="GetBem Logo"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Website: <a target="_blank" href="http://getbem.com/">BEM</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    BEM is a methodology that gives structure to naming in CSS allowing us to create modular and reusable code. It is a way of writing CSS that when implemented correctly can be very rewarding.
                    It can remove naming headaches that at first do not seem to be a problem but as an application grows the need for something like BEM becomes apparant. BEM stands for block, element, modifier.
                    We will go into detail on what these mean below.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Block refers to a 'standalone entity that is meaningful on it's own'. In reality this means something like a container around your elements. Or the footer block around the elements inside. Think of
                    this of the outside wall of a box containing another box that contains the modifier. Inside the block we have the element. This is part of the block and has no meaning when not inside the block.
                    This is the actual element on the page such as a list item or a button. Think of this as the box inside the block box. Lastly, we have the modifier that is a flag for changing appearance or behaviour.
                    This will be something like 'disabled' or for size such as '--size-large'.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
.button {
    font-size: 10px;
    background-color: red;
}

.button--size-big {
    height: 100px;
    width: 200px;
}

.button--size-large {
    height: 150px;
    width: 300px;
}
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    See above how we are first creating the block button that will be used in our class. Next comes the element button and lastly the modifier size-big. When using this on html we would use class="button button--size-big".
                    This structure makes class naming easier and very scalable. It also saves us the headache of trying to figure out what should we name that block we just created.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 22/01/2018
                </Block>
            </Block>
        )
    }
}

export default Bem;