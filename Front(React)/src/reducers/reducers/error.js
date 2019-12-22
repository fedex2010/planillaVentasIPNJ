const initialState = {
    message: "Por favor, vuelve a intentarlo mas tarde."
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return {
                message: action.message
            }
        default:
            return state;
    }
}