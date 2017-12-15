import React, { PureComponent } from 'react';
import { Grid } from 'semantic-ui-react';
import Block from '../Common/Styled/Block';


class Error404 extends PureComponent {
    render() {
        return (
            <Grid centered>
                <Grid.Row>
                    <Block>
                        Error 404
                    </Block>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Error404;