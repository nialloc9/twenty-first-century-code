import React from 'react'
import Article from '../Common/Article';
import {Block, Link} from '../Common/Styled';
import javaBlue from '../../static/images/javaBlue.png';
import globals from '../../config/globals';
import { remCalc } from '../../common/utils';

const {
    LINKEDIN,
    GITHUB
} = globals;

export default () => {
    
    const head = {
        title: 'java overview',
        meta: [
          {
            name: 'description',
            content: 'an overview of java'
          },
          {
            name: 'keywords',
            content: 'java, overview'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: javaBlue,
            size: 'large',
            alt: 'Java image',
            hasLegend: false
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Java is a language I really enjoy. It is an extremely powerful language that can be used for nearly every project.
            I will show some of my work in java but there is more available on my <Link target="_blank" href={GITHUB}>github</Link> page if you wish. Java is an immensely powerful and huge language so in every project, something new is learned.
            </Block>
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Here I want to show three projects. A java 2D game created using the slick2D library, a calculator, and lastly a java instant messenger. These projects I created to try out some of the awesome
            features in java such as sockets and swing components. I hope you enjoy these projects and any feedback is always welcome so please send me an email or find me on <Link target="_blank" rel="noopener noreferrer" href={LINKEDIN}>linkedin</Link>.
            </Block>
        },
    ];

    return <Article head={head} data={data} />;
};