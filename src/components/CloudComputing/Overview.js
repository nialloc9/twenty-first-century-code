import React from 'react'
import Article from '../Common/Article';
import cloudComputing from "../../static/images/new/cloudComputing.png";

export default () => {

  const head = {
    title: "cloud computing",
    meta: [
      {
        name: 'description',
        content: 'learn how to use cloud computing to set up enterprise level services at a snap of your fingers'
      },
      {
        name: 'keywords',
        content: 'cloud computing, aws, learn cloud computing, hire cloud computing'
      }
    ]
  };

  const data = [
    {
      type: "image",
      src: cloudComputing,
      alt: 'Cloud computing'
    },
    {
      type: 'paragraph',
      text: `Cloud computing is computing services across the internet including storage, servers, databases, software, analytics, and intelligence. This is typically on demand meaning that you only pay for what you use. This allows businesses to provide 
      enterprise level services at a significant discount to on premise services. Even this website is harnessing cloud computing technologies such as AWS storage and CDN to deliver a first class experience to you.`
    },
  ];

  return <Article head={head} data={data} />;
};