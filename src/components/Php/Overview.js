import React, { PureComponent } from 'react';
import Block from '../Common/Styled/Block';
import Image from '../Common/Styled/Image';
import phpBlue from '../../static/images/phpBlue.png';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Overview extends PureComponent {
    render(){
        return(
            <Block fontColor={fontColor} lineHeight={lineHeight} fontSize={fontSize} maxWidth={remCalc(800)}>
                <Block>
                    <Image
                        src={phpBlue}
                        margin="auto"
                        size="large"
                        alt="Php logo image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    PHP is a server side language that is very useful for web development. I like PHP because of it simple to set up and it is supported by most hosts. Also the code if wrote correctly can be very clean and
                    readable. This is a big plus in my opinion. Readability is often shunned in favour of functionality but I believe good code has both. It becomes even more important if working as part of a team or releasing code
                    to be used by others because if they struggle to read it they will struggle to use it.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Here I will showcase some of my portfolio work in backend web development using PHP. I will show scripts for different uses. These have all been written in full by me. If you have any feedback to give please
                    contact me because your feedback helps me improve this site and my projects.
                </Block>
            </Block>
        )
    }
}

export default Overview;