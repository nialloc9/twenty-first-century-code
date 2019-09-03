import React from 'react'
import {Block, SoftLink} from '../Common/Styled';
import Article from '../Common/Article';
import home from '../../static/images/projects/apolloChat/home.png';
import mainPage from '../../static/images/projects/apolloChat/mainPage.png';
import room from '../../static/images/projects/apolloChat/room.png';
import { remCalc } from '../../common/utils';

export default () => {

    const head = {
        title: "apollo chat proof of concept",
        meta: [
          {
            name: 'description',
            content: 'learn how to create an instant messenger using NodeJs'
          },
          {
            name: 'keywords',
            content: 'sockets, socket.io, socket.io chat, socket chat, nodejs'
          }
        ]
      };

    const data = [
        {
            type: 'image',
            src: home,
            alt: 'Apollo Chat home page'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/apollo-chat'
        },
        {
            type: 'paragraph',
            text: `Apollo chat is an application that uses react, redux, express, node clusters, mysql, and web sockets. For style a combination of semantic-ui framework and styled-components are used.
            It enables real time chat at scale. For web sockets it uses socket.io to make it compatible with older browsers. First it uses ajax polling before upgrading to web sockets. This is kind
            of like a fall back but more like a fall forward in that it uses ajax polling and if they are available it tries to upgrade to web sockets. If it cannot use web sockets because for example
            they are not supported on an older browser then it continues to use polling.`
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Apollo chat also uses push notifications that using <SoftLink to="/javascript/redux-push">redux-push</SoftLink>. This allows us to notify other users when people enter there room or whem a message
            is received.
            </Block>
        },
        {
            type: 'image',
            src: mainPage,
            alt: 'Apollo chat showing list of rooms'
        },
        {
            type: 'paragraph',
            text: `As we can see from above the application has rooms that the owner can enter, edit, or delete. Each room has a unique PIN that the owner can be given to others that when inputed into join room will add them
            as a participant. This will allow that user to enter the room and send messages. When a user sends a message it is passed to the other users in that room via events that notify the other users and displays the message
            in the room. Or notifies the user if they are not in the room that a message has been sent.`
        },
        {
            type: 'image',
            src: room,
            alt: 'Apollo chat showing room with list of messages'
        },
        {
            type: 'paragraph',
            text: `Behing the scenes apollo chat is using a brain that has a client and a server side. The client communicates with the server side using socket.io. The client side code is added as redux middleware so that it can be picked up
            and put in or pulled out of any application with minimum effort. I really like using middleware in redux and express as it allows the code to be broken up and increases code reuseability and readability as each individual piece of
            middleware that handles it's own responsibilities.`
        },
        {
            type: 'published',
            date: `10/12/2017`
        },
    ];

    return <Article head={head} data={data} />;
};