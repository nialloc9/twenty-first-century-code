import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import moment from 'moment';
import Block from '../../components/Common/Styled/Block';
import { remCalc } from '../../common/utils';

class Introduction extends Component {

    render() {

        return (
            <Block>
                <Message>
                    <Block margin={`${remCalc(20)} 0 0 0`}>
                        My name is Niall O' Connor. I'm from a small town in Ireland called Brosna. I am {moment().diff(moment("04-09-1990", "DD-MM-YYYY"), 'years')} years old and I love to code...
                    </Block>
                    <Block margin={`${remCalc(20)} 0 0 0`}>
                        I was once described by a guy I met from Tennessee while traveling as a life learner. See, I love to learn. I understand that learning new things and having new experiences help us grow as people both professionally and personally. Everyday I try to learn something new, sometimes related to work, sometimes not. But I always try to look for new ways to grow.
                    </Block>
                    <Block margin={`${remCalc(20)} 0 0 0`}>
                        I think the idea that anyone can do anything really inspires me. I believe that it does not matter where you are from or what you have done or hav not done, you can accomplish anything. Coding is a tool that we can harness to achieve the impossible.
                    </Block>
                    <Block margin={`${remCalc(20)} 0 0 0`}>
                        I think this really makes me believe not just I but everyone can do anything. Anything that we decide to do can become a reality if we decide that we are going to do it and we will not stop untill our dream is a reality. This really helps me stay motivated and helps me understand that it is not a case of "cannot" it is just needing to keep going and eventually the things we tought were impossible now come easy to us.
                    </Block>
                    <Block margin={`${remCalc(20)} 0 0 0`}>
                        I have always loved to make things. It is what I love to do.
                        I love seeing an idea going from just that,
                        an idea to something wonderful. Something we can stand back and be proud of.
                        No industry offers us the chance to 'just build' like IT does.
                        The tools are there and all we need to do is grab them and we can do anything.
                    </Block>
                </Message>
            </Block>
        )
    }
}

export default Introduction;