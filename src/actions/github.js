import globals from '../config/globals';
import { GITHUB_SET } from '../constants/github';
import promiseErrorHandler from '../common/promiseErrorHandler';

const { GITHUB_API } = globals;

/**
 * sets the loading state
 * @param loading
 */
const setGithubLoading = loading => ({
    type: GITHUB_SET,
    payload: {
        loading
    }
});

export const setGithubDetails = () => async dispatch => {

    dispatch(setGithubLoading(true));

    const [error, response] = await promiseErrorHandler(fetch(`${GITHUB_API}/users/nialloc9`, {
        method: "GET"
    }));

    if(error || !response.ok){
        dispatch(setGithubLoading(false));
        return new Error("Am error has occured fetching github data");
    }

    const [jsonError, json] = await promiseErrorHandler(response.json());

    const { avatar_url: avatarUrl, bio, followers, login, public_repos: publicRepos } = json;

    return dispatch({
        type: GITHUB_SET,
        payload: {
            avatarUrl,
            bio,
            followers,
            login,
            publicRepos,
            loading: false
        }
    })
};