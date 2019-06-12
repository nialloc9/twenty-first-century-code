import React, { PureComponent } from 'react';
import {Block, Image, Link} from '../Common/Styled';
import css3Blue from '../../static/images/css3Blue.png';
import globals from '../../config/globals';
import { remCalc } from '../../common/helpers';

const {
    GITHUB
} = globals;

class Overview extends PureComponent {
    render(){
        return(
            <Block maxWidth={remCalc(800)}>
                <Block>
                    <Image
                        src={css3Blue}
                        margin="auto"
                        size="large"
                        alt="CSS 3 image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    CSS or cascading style sheets are used to control how html is displayed to a user. It allows reuse of styles using classes while also remaining very flexible.
                    It allows us to edit all parts of web page presentation from font size to opacity. CSS was created by Håkon Wium Lie on October 10th, 1994 and is maintained by the
                    CSS working group withing W3C. The W3C or world wide web consortium is a group that makes recommendations about how the web should evolve but it is up to the development
                    community to implement these recommendations.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    This portfolio set is currently in progress. You can find multiple examples of css in use inside my <Link target="_blank" rel="noopener noreferrer" href={GITHUB}>github</Link>.
                </Block>

            </Block>
        )
    }
}

export default Overview;