import React from 'react'
import Article from '../Common/Article';
import architecture from "../../static/images/projects/kenesis/kenesisArchitecture.png"
import redhose from "../../static/images/projects/kenesis/redhose.png"

export default () => {

    const head = {
        title: '',
        meta: [
            {
                name: 'description',
                content: 'AWS Kinesis'
            },
            {
                name: 'keywords',
                content: 'learn aws kinesis, learn cloud computing'
            }
        ]
    };

    const data = [
        {
            type: 'image',
            src: architecture,
            alt: 'AWS kenesis architecture',
            size: "big",
            hasLegend: true
        },
        {
            type: 'paragraph',
            text: `With the advent of big data came services to handle it. One of these services "kenesis" offered by AWS is a widely used and talked about topic. 
            In this article I intend to give a breakdown of what kenesis is. What the keywords mean. And how you would use it.`
        },
        {
            type: 'paragraph',
            text: `Streaming data into AWS is called kinesis. This data is piped through a pipeline typically to S3. The awesome part about S3 
            that makes it an excellent choice for this use case is that it is auto scaling. Kinesis can in fact be broken down into 3 sections 
            stream, firehose, and analytics. We can see above that data is ingested from different producers into the shards and passed to consumers. These consumers 
            will do things like data manipulations before passing the new data to a new destination. Typically this would be a warehouse or S3 but it can be passed to other destinations.`
        },
        {
            type: 'paragraph',
            text: `Stream and firehose are responsible for streaming data to a destination. Typically, this would be S3 for stream. The difference between stream and 
            firehose is that firehose is a simplified version of stream that can pipe data to other destinations.`
        },
        {
            type: 'image',
            src: redhose,
            alt: 'AWS redhose architecture',
            size: "big",
            hasLegend: true
        },
        {
            type: 'paragraph',
            text: `The final section analytics can be used to run SQL like queries being piped to your streams or firehoses. This is a very powerful feature allowing you 
            to do data manupulation and learn more about your data before passing it to S3 or a data wearhouse.`
        },
        {
            type: 'paragraph',
            text: `Pricing for Kenisis can be measured by the number of shards required. A shard is a measurment of throughput capacity meaning the amount of data per second you are passing. 
            By default 1 shard ingests up to 1MB/sec and 1000 records/sec while emiting 2MB/sec. For increased or decreased capacity the number of shards can be altered after the OS is created. 
            Shard level metrics are very useful here for monitoring the amount of data coming in. This will help you determine how many shards you require and help reduce costs by maintaining excessive 
            shards. You can also create an alarm to incease the number of shards if the level of data goes above a threshold.`
        },
        {
            type: 'paragraph',
            text: `The last thing I want to note here about kenisis that is very important especially for big enterprise is that data can be encrypted in kenesis using an AWS KMS customer master key (CMK). Data 
            is encrypted automatically before it's at rest and after it is retrieved from storage. As a result all data at rest is encrypted allowing your company to meet strict regulatory requirements and enhance the security of your data.`
        },
        {
            type: 'paragraph',
            text: `In a nutshell the above explains kenesis and how it would be used. If you want to learn more about cloud computing check out my other cloud computing articles above.`
        },
        {
            type: 'published',
            date: `09/09/2019`
        },
    ];

    return <Article head={head} data={data} />;
};