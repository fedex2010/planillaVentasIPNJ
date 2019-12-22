const initialState = {
    url: 'NoDefinida'
};

const intentosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_URL_INTENTOS':
            return {
                url: action.url
            }
        default:
            return state;
    }
}

export default intentosReducer;