const initialState = {
    id: 'INVALIDO'
};

export const idClientAnalyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ID_CLIENT_ANALYTICS':
            return {
                id: action.idClientAnalytics
            }
        default:
            return state;
    }
}