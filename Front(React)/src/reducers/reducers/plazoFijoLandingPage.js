const initialState = {
    estado: 'NO_DEFINIDO',
    data: ''
  };

export const plazoFijoLandingPage = (state = initialState, action) => {
    switch (action.type) {
        case 'LANDING_PAGE':
            return {
                estado: action.type,
                data: action.data
            }
        case 'RESET_TO_INITIAL_STATE':
            return {
                ...initialState
            }
        default:
            return state;
    }
}
