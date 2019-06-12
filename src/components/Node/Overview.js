import React, { PureComponent } from 'react';
import Block from '../Common/Styled/Block';
import Image from '../Common/Styled/Image';
import nodeGreen from '../../static/images/nodeGreen.png';
import { remCalc } from '../../common/helpers';

class Overview extends PureComponent {
    render(){
        return(
            <Block maxWidth={remCalc(800)}>
                <Block>
                    <Image
                        src={nodeGreen}
                        margin="auto"
                        size="large"
                        alt="Node logo image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Node is an open source runtime environment for implementing javascript on the client side. It is build on Googles v8 javascript
                    engine making it very fast. It is particularily suited to real time applications because of it's asyncrounous no blocking event
                    driven model. In other words in nodeJs an api never waits for a response from the server. Instead an events mechanism helps the server get
                    a response when ready. Leaving it free to handle the next api call.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    NodeJs is very suited for DIRT(Data intensive real time) applications and you will see an example of where a node server has been implemented to
                    serve up data in real time.
                </Block>

            </Block>
        )
    }
}

export default Overview;