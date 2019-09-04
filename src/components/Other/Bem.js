import React from 'react'
import Article from '../Common/Article';
import logo from '../../static/images/projects/bem/logo.png';

export default () => {
    const data = [
        {
            type: "image",
            src: logo,
            alt: 'GetBem Logo'
        },
        {
            type: 'source',
            text: "Website",
            href: 'http://getbem.com'
        },
        {
            type: 'paragraph',
            text: `BEM is a methodology that gives structure to naming in CSS allowing us to create modular and reusable code. It is a way of writing CSS that when implemented correctly can be very rewarding.
            It can remove naming headaches that at first do not seem to be a problem but as an application grows the need for something like BEM becomes apparant. BEM stands for block, element, modifier.
            We will go into detail on what these mean below.`
        },
        {
            type: 'paragraph',
            text: `Block refers to a 'standalone entity that is meaningful on it's own'. In reality this means something like a container around your elements. Or the footer block around the elements inside. Think of
            this of the outside wall of a box containing another box that contains the modifier. Inside the block we have the element. This is part of the block and has no meaning when not inside the block.
            This is the actual element on the page such as a list item or a button. Think of this as the box inside the block box. Lastly, we have the modifier that is a flag for changing appearance or behaviour.
            This will be something like 'disabled' or for size such as '--size-large'.`
        },
        {
            type: 'code',
            language: 'css',
            code: `
.button {
    font-size: 10px;
    background-color: red;
}

.button--size-big {
    height: 100px;
    width: 200px;
}

.button--size-large {
    height: 150px;
    width: 300px;
}
            `
        },
        {
            type: 'paragraph',
            text: `See above how we are first creating the block button that will be used in our class. Next comes the element button and lastly the modifier size-big. When using this on html we would use class="button button--size-big".
            This structure makes class naming easier and very scalable. It also saves us the headache of trying to figure out what should we name that block we just created.`
        },
        {
            type: 'published',
            date: `22/01/2018`
        },
    ];

    return <Article data={data} />;
};