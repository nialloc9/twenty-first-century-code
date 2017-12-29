import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import SoftLink from '../Common/Styled/SoftLink';
import Image from '../Common/Styled/Image';
import home from '../../static/images/projects/apolloChat/home.png';
import mainPage from '../../static/images/projects/apolloChat/mainPage.png';
import room from '../../static/images/projects/apolloChat/room.png';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class AsyncAwait extends PureComponent{

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
                        src={home}
                        margin="auto"
                        size="huge"
                        alt="Apollo Chat Home Page"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/apollo-chat">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Apollo chat is an application that uses react, redux, express, node clusters, mysql, and web sockets. For style a combination of semantic-ui framework and styled-components are used.
                    It enables real time chat at scale. For web sockets it uses socket.io to make it compatible with older browsers. First it uses ajax polling before upgrading to web sockets. This is kind
                    of like a fall back but more like a fall forward in that it uses ajax polling and if they are available it tries to upgrade to web sockets. If it cannot use web sockets because for example
                    they are not supported on an older browser then it continues to use polling.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Apollo chat also uses push notifications that using <SoftLink to="/javascript/redux-push">redux-push</SoftLink>. This allows us to notify other users when people enter there room or whem a message
                    is received.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    <Image
                        src={mainPage}
                        margin="auto"
                        size="huge"
                        alt="Apollo chat showing list of rooms"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    As we can see from above the application has rooms that the owner can enter, edit, or delete. Each room has a unique PIN that the owner can be given to others that when inputed into join room will add them
                    as a participant. This will allow that user to enter the room and send messages. When a user sends a message it is passed to the other users in that room via events that notify the other users and displays the message
                    in the room. Or notifies the user if they are not in the room that a message has been sent.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    <Image
                        src={room}
                        margin="auto"
                        size="huge"
                        alt="Apollo chat showing room with list of messages"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Behing the scenes apollo chat is using a brain that has a client and a server side. The client communicates with the server side using socket.io. The client side code is added as redux middleware so that it can be picked up
                    and put in or pulled out of any application with minimum effort. I really like using middleware in redux and express as it allows the code to be broken up and increases code reuseability and readability as each individual piece of
                    middleware that handles it's own responsibilities.
                </Block>
            </Block>
        )
    }
}

export default AsyncAwait;