const urlInitialState = {
    url: 'NO_DEFINIDA'
};

const enablerInitialState = {
    enable: false
};

export const riesgoNetURLReducer = (state = urlInitialState, action) => {
    switch (action.type) {
        case 'SET_URL_RIESGO_NET':
            return {
                url: action.url,
                enable: true
            }
        default:
            return state;
    }
}

export const riesgoNetEnablerReducer = (state = enablerInitialState, action) => {
    switch (action.type) {
        case 'ENABLE_RIESGO_NET':
            return {
                enable: true
            }
        case 'DISABLE_RIESGO_NET':
            return {
                enable: false
            }
        default:
            return state;
    }
}