import React from 'react'
import Article from '../Common/Article';
import otherProjects from '../../static/images/new/otherProjects.jpg';

export default () => {

    const head = {
        title: "Other Articles",
        meta: [
          {
            name: 'description',
            content: 'learn everything from PHP to CSS'
          },
          {
            name: 'keywords',
            content: 'other articles, multi language projects, php, css'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: otherProjects,
            alt: "Other articles image"
        },
        {
          type: 'paragraph',
          text: `Here you can find a list of other projects and articles that ranging from PHP to CSS. They include multi language projects and articles ranging from BEM to email verification.`
        },
        {
            type: 'paragraph',
            text: `What is PHP? PHP is a server side language that is very useful for web development. I like PHP because of it simple to set up and it is supported by most hosts. Also the code if wrote correctly can be very clean and
            readable. This is a big plus in my opinion. Readability is often shunned in favour of functionality but I believe good code has both. It becomes even more important if working as part of a team or releasing code
            to be used by others because if they struggle to read it they will struggle to use it.`
        },
        {
            type: 'paragraph',
            text: `What is CSS? CSS or cascading style sheets are used to control how html is displayed to a user. It allows reuse of styles using classes while also remaining very flexible.
            It allows us to edit all parts of web page presentation from font size to opacity. CSS was created by Håkon Wium Lie on October 10th, 1994 and is maintained by the
            CSS working group withing W3C. The W3C or world wide web consortium is a group that makes recommendations about how the web should evolve but it is up to the development
            community to implement these recommendations.`
        },
    ];

    return <Article head={head} data={data} />;
};