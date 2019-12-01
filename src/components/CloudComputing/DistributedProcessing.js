import React from 'react'
import Article from '../Common/Article';
import main from "../../static/images/projects/distributedProcessing/main.jpg"

export default () => {

    const head = {
        title: 'Learn how destributed processing works.',
        meta: [
            {
                name: 'description',
                content: 'Learn how destributed processing works and what it can mean for your applications.'
            },
            {
                name: 'keywords',
                content: 'learn distributed processing, what is distributed processing, hadoop, hive'
            }
        ]
    };

    const data = [
        {
            type: 'image',
            src: main,
            size: "large",
            alt: 'Distributed programming diagram'
        },
        {
            type: 'paragraph',
            text: `Distributed computing as a field covers all computing and information access throughout multiple processors connected by any communication network from local to wide area. The internet has enabled a huge growth in the use of distributed processing. 
            Distributed processing systems refers to software that uses networked computers to communicate and cordinate their actions (using messages) to achieve a common goal.`
        },
    ];

    return <Article head={head} data={data} />;
};