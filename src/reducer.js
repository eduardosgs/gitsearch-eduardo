import {t} from './actions';

const initState = {
    data: null
};

export const userReducer = (state = initState, action) => { 

    switch (action.type) {
        case t.LOAD_USER_DATA_SUCCESS:
            return {
                ...state,
                user: action.data,
                userAvatar: action.data.avatar_url,
                userName: action.data.name,
                userLogin: action.data.login,
                userLocation: action.data.location,
                userCompany: action.data.company,
                userRepos: action.data.public_repos,
                userFollowers: action.data.followers
            };
        
        case t.NOT_FOUND:
            return {
                ...state,
                user: "NOT_FOUND"
            };

        default:
            return state;
    }
};