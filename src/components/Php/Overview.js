import React from 'react'
import Article from '../Common/Article';
import phpBlue from '../../static/images/phpBlue.png';

export default () => {
    const data = [
        {
            type: 'header',
            src: phpBlue,
            alt: "Php logo"
        },
        {
            type: 'paragraph',
            text: `PHP is a server side language that is very useful for web development. I like PHP because of it simple to set up and it is supported by most hosts. Also the code if wrote correctly can be very clean and
            readable. This is a big plus in my opinion. Readability is often shunned in favour of functionality but I believe good code has both. It becomes even more important if working as part of a team or releasing code
            to be used by others because if they struggle to read it they will struggle to use it.`
        },
        {
            type: 'paragraph',
            text: `Here I will showcase some of my portfolio work in backend web development using PHP. I will show scripts for different uses. These have all been written in full by me. If you have any feedback to give please
            contact me because your feedback helps me improve this site and my projects.`
        },
    ];

    return <Article data={data} />;
};