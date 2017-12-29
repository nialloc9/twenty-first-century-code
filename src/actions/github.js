import globals from '../config/globals';
import { GITHUB_SET } from '../constants/github';

const { GITHUB_API } = globals;

export const setGithubDetails = () => async dispatch => {

    const response = await fetch(`${GITHUB_API}/users/nialloc9`, {
        method: "GET"
    });

    if(!response.ok){
        return new Error("Am error has occured fetching github data");
    }

    const json = await response.json();

    const { avatar_url: avatarUrl, bio, followers, login, public_repos: publicRepos } = json;

    return dispatch({
        type: GITHUB_SET,
        payload: {
            avatarUrl,
            bio,
            followers,
            login,
            publicRepos
        }
    })
};