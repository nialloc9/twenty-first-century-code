import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import SoftLink from '../Common/Styled/SoftLink';
import Link from '../Common/Styled/Link';
import telephone from '../../static/images/projects/reactRenderCallback/telephone-handset-3179133_1280.jpg';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class ReactRenderCallback extends PureComponent{

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
                        src={telephone}
                        margin="auto"
                        size="large"
                        alt="Green telephone"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/react-render-callback">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    As a developer who uses react day in day out I am always looking for new ways to do things. Recently I have been looking at how 
                    I reuse code inside my react applications. One of the most common ways of reducing duplicate code is to use higher order components. 
                    This is a very effective way of passing functionality down to components so it only has to be wrote once. This is awesome and very reuseable. 
                    However, there are always differant ways of doing things and recently I have been working with render callbacks that allow us to pass 
                    common functionality to any components we want.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
`
import React, { PureComponent, Children, cloneElement } from "react";

class Greeting extends PureComponent {
    
    state = {
        greeting : "Hello"
    }

    setGreeting = greeting => this.setState({ greeting });

    render() {
        const { render: onRender, children } = this.props;
        
        const { greeting } = this.state;

        const props = {
            greeting,
            onSetGreeting: this.setGreeting
        };
        // if render prop then use render function else use children
        return onRender ? onRender(props) : cloneElement(Children.only(children), props);
    }
}
`
                    }
                </CodeBlock>

                <Block>
                    Above we can see functionality to add a greeting that can be updated dynamically. In this component we are using a 
                    a render callback method to passing the greeting and onSetGreeting to the render callback. This is a nice way of 
                    reusing this functionality as the component does not care what the callback function does or how it does it but 
                    just is focused on passing in the greeting and the onSetGreeting function. That makes this very powerful. Also 
                    see if there is no render callback provided we render the component as a regular component. cloneElement creates a new 
                    element from the element passed to it. Children.only checks that a single component is passed back. Otherwise an error will occur. 
                    The same props are passed down here that are passed in to the render callback. Now let's see how we use this component.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
import React, { Component } from 'react';
import Greeting from "./Greeting";

const AppGreeting = ({ greeting, onSetGreeting }) => {

    const onChange = ({ target: { value } }) => onSetGreeting(value);

    return (
    <div>
        <h1>{greeting}</h1>

        <div>
        <label>
            Set greeting here: 
            <input onChange={onChange} />
        </label>
        </div>
    </div>
    )
}

class App extends Component {
    render() {
    return (
        <div>
            Greeting with render callback
            <Greeting render={AppGreeting}/>
        </div>
    );
    }
}
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Above we can see how a render callback is passed into our Greeting component. This callback function sets out what to render. 
                    See how in the props we have a greeting and a onSetGreeting function. These have been passed from our greeting component and 
                    we are free to do what we want with them. We render a greeting with an input for updating it. I really like how clean this is and 
                    we can create multiple differant render callbacks that reuse this functionality and use them throughout. This allows us to do everything 
                    a higher order component can. As an added bonus lets see how we can render children too without using the callback method if we wish.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
import React, { Component } from 'react';
import Greeting from "./Greeting";

const AppGreeting = ({ greeting, onSetGreeting }) => {

    const onChange = ({ target: { value } }) => onSetGreeting(value);

    return (
    <div>
        <h1>{greeting}</h1>

        <div>
        <label>
            Set greeting here: 
            <input onChange={onChange} />
        </label>
        </div>
    </div>
    )
}

class App extends Component {
    render() {
    return (
        <div>
            Greeting with children
            <Greeting>
                <AppGreeting />
            </Greeting>
        </div>
    );
    }
}
                        
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    This is not my preferred way of doing this and I think render callbacks are much cleaner but as there is always differant ways 
                    of doing things it is important to know and understand many before deciding on which is best suited to you and your use case. Here 
                    we create the pass in the AppGreeting not as a render prop but instead as a child. This will work exactly the same way but in my option 
                    adds an extra 2 lines of code that are not needed. Also with this it is not clear that the Greeting is component is passing props to the 
                    AppGreeting component. Therefore my preference is for callback functions. Michael Jackson the creator of react router explains the benefits 
                    in detail the benefits of render callbacks over higher order components in this <Link href="https://www.youtube.com/watch?v=BcVAq3YFiuc&t=1807s" target="__blank">talk</Link> at Pheonix ReactJs in 2017. If you would like 
                    to learn more I would recommend checking it out.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    27/02/2018
                </Block>
            </Block>
        )
    }
}

export default ReactRenderCallback;