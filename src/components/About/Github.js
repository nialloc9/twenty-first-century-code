import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card, Icon } from 'semantic-ui-react';
import Image from '../Common/Styled/Image';
import Block from '../Common/Styled/Block';
import globals from '../../config/globals';
import { setGithubDetails } from '../../actions/github';

const { GITHUB } = globals;

class Github extends Component {

    static propTypes = {
        login: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        publicRepos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        onSetGithubDetails: PropTypes.func.isRequired
    };

    componentWillMount(){
        const { onSetGithubDetails } = this.props;
        onSetGithubDetails();
    }

    render(){

        const { login, bio, avatarUrl, publicRepos, followers } = this.props;

        return(
        <Block display="inline-block" cursor="pointer">
            <a href={GITHUB} target="__blank">
                <Card>
                    <Image src={avatarUrl} />
                    <Card.Content>
                        <Card.Header>
                            {`Github: ${login}`}
                        </Card.Header>
                        <Card.Meta>
                            {`Repositories: ${publicRepos}`}
                        </Card.Meta>
                        <Card.Description>
                            {bio}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user' />
                        {`${followers} followers`}
                    </Card.Content>
                </Card>
            </a>
        </Block>
        )
    }
}

/**
 * @param login
 * @param avatarUrl
 * @param htmlUrl
 * @param publicRepos
 */
const mapStateToProps = ({
                             github: {
                                 login,
                                 avatarUrl,
                                 htmlUrl,
                                 publicRepos,
                                 followers,
                                 bio
                             }
                         }) => ({
    login,
    avatarUrl,
    htmlUrl,
    publicRepos,
    followers,
    bio
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetGithubDetails: setGithubDetails
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Github);