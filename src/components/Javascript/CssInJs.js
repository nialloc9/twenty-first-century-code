import React from 'react'
import Article from '../Common/Article';
import placeholder from "../../static/images/projects/reactLondonCssInJS/introSlide.png"

export default () => {

    const head = {
        title: "react london august 2018",
        meta: [
          {
            name: 'description',
            content: 'watch niall o connor talk about the state of CSS in JS at the react london conference'
          },
          {
            name: 'keywords',
            content: 'react london, css in js, styled components, javascript'
          }
        ]
      };

    const data = [
        {
            type: 'paragraph',
            text: `In August 2019 I was invited to talk at React London. My talk entitled "What's up with CSS in JS?" examined 
            the current state of CSS in JS. I delved into the libraries available and created a custom library to demonstrate how 
            these libraries work. Catch this talk below. Starts at 34:00.`
        },
        {
            type: "video",
            url: "https://www.youtube.com/embed/rLYr2yNzC4Y?start=2047",
            alt: 'CSS in JS react london talk',
            placeholder
        },
        {
            type: 'published',
            date: `07/08/2019`
        },
    ];

    return <Article head={head} data={data} />;
};