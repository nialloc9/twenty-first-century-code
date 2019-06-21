import React from 'react'
import Article from '../Common/Article';
import css3Blue from '../../static/images/css3Blue.png';

export default () => {
    const data = [
        {
            type: 'header',
            src: css3Blue,
            alt: 'CSS 3'
        },
        {
            type: 'source',
            href: ''
        },
        {
            type: 'paragraph',
            text: `CSS or cascading style sheets are used to control how html is displayed to a user. It allows reuse of styles using classes while also remaining very flexible.
            It allows us to edit all parts of web page presentation from font size to opacity. CSS was created by Håkon Wium Lie on October 10th, 1994 and is maintained by the
            CSS working group withing W3C. The W3C or world wide web consortium is a group that makes recommendations about how the web should evolve but it is up to the development
            community to implement these recommendations.`
        },
    ];

    return <Article data={data} />;
};
