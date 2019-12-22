const initialState = {
    id: 'NO DEFINIDO',
    valido: false
};

export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                id: action.token,
                valido: action.valido
            }
        default:
            return state;
    }
}