export const t = {
    LOAD_USER_DATA: 'LOAD_USER_DATA',
    LOAD_USER_DATA_SUCCESS: 'LOAD_USER_DATA_SUCCESS',
    NOT_FOUND: 'NOT_FOUND'
};

export const actions = ({
    loadUserData: name => ({
        type: t.LOAD_USER_DATA,
        name
    }),

    loadUserDataSuccess: data => ({
        type: t.LOAD_USER_DATA_SUCCESS,
        data
    }),

    notFound: data => ({
        type: t.NOT_FOUND,
        data
    })
});