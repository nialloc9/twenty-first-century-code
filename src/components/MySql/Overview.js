import React, { PureComponent } from 'react';
import Block from '../Common/Styled/Block';
import Image from '../Common/Styled/Image';
import mySqlBlack from '../../static/images/mySqlBlack.png';
import theme from '../../config/theme';
import globals from '../../config/globals';
import { remCalc } from '../../common/helpers';

const {
    GITHUB
} = globals;
const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Overview extends PureComponent {
    render(){
        return(
            <Block fontColor={fontColor} lineHeight={lineHeight} fontSize={fontSize} maxWidth={remCalc(800)}>
                <Block>
                    <Image
                        src={mySqlBlack}
                        margin="auto"
                        size="large"
                        alt="MySql image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    MySql is a database management system. Computers are very good at handling large amounts of data so inheriently managing that data becomes a significant
                    role in computing. Other alternatives include mariaDB, postGreSQL, and SQLLite and have their advantages and disadvantages. However, mySql is the worlds
                    most popular open source database. It is in use by some of the largest companies in the world such as Facebook and YouTube.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    This portfolio set is currently in progress. You can find multiple examples of myql in use inside my <a target="_blank" href={GITHUB}>github</a>.
                </Block>

            </Block>
        )
    }
}

export default Overview;