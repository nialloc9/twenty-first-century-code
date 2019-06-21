import React from 'react'
import Article from '../Common/Article';
import Block from '../Common/Styled/Block';
import Link from '../Common/Styled/Link';
import styledComponentsLogo from '../../static/images/projects/styledComponents/styledComponentsLogo.png';
import styledBlock from '../../static/images/projects/styledComponents/styledBlock.png';
import { remCalc } from '../../common/helpers';

export default () => {
    const data = [
        {
            type: 'header',
            src: styledComponentsLogo,
            alt: 'Styled Components Logo'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/styledComponents'
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            CSS or javascript? How about both. <Link href="https://www.styled-components.com/" rel="noopener noreferrer" target="__blank">Styled components</Link> give us the power to write our styles in javascript for react or react native components.
            This makes the components incredibly reuseable. What if I told you that this website is built with just 11 core components? That would be amazing. Well in fact it is.
            </Block>
        },
        {
            type: 'paragraph',
            text: `Instead of creating new classes each time we wish to style a component differantly we use styled components that are just components that take prop values of the
            css attribute and use template literals with interpolation to set out the styles. This reduces code immensely and instead of having to pass in a className prop and then creating that class in a css file we can pass in our
            attribute directly. See below our styled Block that is in actual fact just an ordinary div that we are creating with a class that is generated with the attributes we designate
            as props.`
        },
        {
            type: 'header',
            src: styledBlock,
            alt: 'styled div code'
        },
        {
            type: 'paragraph',
            text: `Also note how we can also set out the attributes behavour on mobile and make it reuseable aswell. By passing in a prop of mobileMargin it will go inside the media query to and
            change the components appearance on mobile. This could also be done for any other screen device you wish. It is important to note instead of a default value of something like 0 we are
            setting it as false. This is so the attribute is only added if there is a value passed. If you so wished you could change the default value to anything you wished.`
        },
        {
            type: 'published',
            date: `06/01/2018`
        },
    ];

    return <Article data={data} />;
};