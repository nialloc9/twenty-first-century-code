import { GITHUB_SET } from '../constants/github';

const initialState = {
    loading: false,
    login: "",
    avatarUrl: "",
    bio: "",
    followers: 0,
    publicRepos: 0,
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const github = (state = initialState, { type, payload }) => {
    switch (type) {
        case GITHUB_SET:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};

export default github;