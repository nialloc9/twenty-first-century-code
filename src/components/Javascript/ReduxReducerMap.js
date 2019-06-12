import React from 'react'
import Article from '../Common/Article';
import SoftLink from '../Common/Styled/SoftLink';
import Block from '../Common/Styled/Block';
import {remCalc} from '../../common/helpers';
import telephone from '../../static/images/projects/reduxReducerMap/reducer.png';

const ReduxReducerMap = () => {
    const data = [
        {
            type: "header",
            src: telephone,
            size: "large",
            alt: "Green telephone"
        },
        {
            type: "source",
            href: "https://github.com/nialloc9/react-render-callback"
        },
        {
            type: "paragraph",
            text: `I have been using redux for a couple of years now so I like to think I am quite well versed in implementing it. I have read countless guides on redux and one 
            thing that always strikes me is that they always implement reducers the same way. Sure there is debate on whether logic should go inside reducers, actions, or even neither. But what 
            seems to be universal is the use of selection statements (if/switch statements). I feel like this is a very ugly and messy implementation  especially when a reducer gets bigger. In general, 
            I do not like long selection statements with over 3 options. This is not because they are inherently bad I just think the code could look prettier. Because of this I have decided to write this 
            article to explore another option for handling reducer logic.`
        },
        {
            type: "code",
            code: `
// OPTION 1
import { USER_LOADING_SET, USER_DATA_SET, USER_ERROR_SET } from '../constants/users';

const initialState = {
    isLoading: false,
    errorMessage: "",
    users: []
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const users = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOADING_SET:
            return {
                ...state,
                isLoading: payload,
            };
        break;
        case USER_DATA_SET:
            return {
                ...state,
                data: payload,
            };
        break;
        case USER_ERROR_SET:
            return {
                ...state,
                errorMessage: payload,
            };
        break;
        default:
            return state;
    }
};

export default users;

//OPTION 2

import { USER_LOADING_SET, USER_DATA_SET, USER_ERROR_SET } from '../constants/users';

const initialState = {
    isLoading: false,
    errorMessage: "",
    users: []
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const users = (state = initialState, { type, payload }) => {
    if(type === USER_LOADING_SET) {
        return {
            ...state,
            isLoading: payload,
        };
    } else if(type === USER_DATA_SET) {
        return {
            ...state,
            data: payload,
        };
    } else if(type === USER_ERROR_SET) {
        return {
            ...state,
            errorMessage: payload,
        };
    }
};

export default users;
            `
        },
        {
            type: "paragraph",
            text: `So above we two ways of creating a traditional reducer. The first using a switch statement where only one case 
            can be implemented. This is the most common example of how to create a reducer. While yes it is okay to look at but it's an eyesore (IMO). As 
            switch statements get longer they get harder to glance through and take longer to find what you are looking for. Option 2 is a less common implentation (and in my opinion worse than the first). 
            It uses if else statements to achieve the same result but it is even harder to read.`
        },
        {
            type: "code",
            code: `
// OPTION 3
import { USER_LOADING_SET, USER_DATA_SET, USER_ERROR_SET } from '../constants/users';

const initialState = {
    isLoading: false,
    errorMessage: "",
    users: []
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const users = (state = initialState, { type, payload }) => {

    const map = {
        [USER_LOADING_SET]: () => ({ ...state, isLoading: payload }),
        [USER_DATA_SET]: () => ({ ...state, data: payload }),
        [USER_ERROR_SET]: () => ({ ...state, errorMessage: payload }),
    }

    return map[type] ? map[type]() : state;
};

export default users;
`
        },
        {
            type: "paragraph",
            text: `With option 3 using a combination of computed properties and ternary statements we achieve a single return statement and have reduced our code  
            to 9 lines instead of option 1's 23 lines and option 2's 17 lines. This now is much easier to read and because there is only a single 
            return statement easier to debug. Just a note on the functions in the map. You are probaly wondering why not just have objects here instead. There is a 2 fold answer for this. 
            First it abstracts the creation of the new state object which means we could move these functions out if we wanted to put our logic inside the reducer without making the reducer difficult to read.
            The second is a less obvious reason. It's an optimization. By having functions the new state objects are not stored in the execution context until they are created. Therefore until the function is invoked at the return 
            this will not be in the execution context.`
        },
        {
            type: "paragraph",
            text: `This methodology can be used with Maps, Sets, or even Object.create(null) if you are worried about uniques values or having object default values such as toString included.`
        },
        {
            type: "markup",
            markup: <Block margin={`${remCalc(20)} 0`}>I hope this article has shown you a new way of creating reducers. Check out <SoftLink to="/javascript/redux-push">redux push</SoftLink> if you are interested in redux middleware to handle browser notifications.</Block>
        },
        {
            type: "published",
            date: `08/06/2019`
        },
    ]

    return <Article data={data} />
}

export default ReduxReducerMap;