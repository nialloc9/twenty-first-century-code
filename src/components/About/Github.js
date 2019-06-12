import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card, Icon } from 'semantic-ui-react';
import Image from '../Common/Styled/Image';
import Link from '../Common/Styled/Link';
import Block from '../Common/Styled/Block';
import globals from '../../config/globals';
import { setGithubDetails } from '../../actions/github';
import withLoader from '../../hoc/withLoader';

const WithLoaderBlock = withLoader(Block);

const { GITHUB } = globals;

class Github extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
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

        const { loading, login, bio, avatarUrl, publicRepos, followers } = this.props;

        return(
        <WithLoaderBlock display="inline-block" cursor="pointer" loading={loading} loadingIconSize="large">
            <Link href={GITHUB} target="__blank" rel="noopener noreferrer">
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
            </Link>
        </WithLoaderBlock>
        )
    }
}

/**
 *
 * @param login
 * @param avatarUrl
 * @param htmlUrl
 * @param publicRepos
 * @param followers
 * @param bio
 * @param loading
 */
const mapStateToProps = ({
                             github: {
                                 login,
                                 avatarUrl,
                                 htmlUrl,
                                 publicRepos,
                                 followers,
                                 bio,
                                 loading
                             }
                         }) => ({
    loading,
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