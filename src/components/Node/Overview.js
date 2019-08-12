import React from 'react'
import Article from '../Common/Article';
import nodeGreen from '../../static/images/nodeGreen.png';

export default () => {
    const data = [
        {
            type: 'image',
            src: nodeGreen,
            alt: 'Node logo image'
        },
        {
            type: 'paragraph',
            text: `Node is an open source runtime environment for implementing javascript on the client side. It is build on Googles v8 javascript
            engine making it very fast. It is particularily suited to real time applications because of it's asyncrounous no blocking event
            driven model. In other words in nodeJs an api never waits for a response from the server. Instead an events mechanism helps the server get
            a response when ready. Leaving it free to handle the next api call.`
        },
        {
            type: 'paragraph',
            text: `NodeJs is very suited for DIRT(Data intensive real time) applications and you will see an example of where a node server has been implemented to
            serve up data in real time.`
        },
    ];

    return <Article data={data} />;
};