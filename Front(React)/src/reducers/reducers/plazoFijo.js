const initialState = {
    estado: 'NO_DEFINIDO',
    actividad: {}
};

export const plazoFijoActividadReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PF_ACTIVIDAD':
            return {
                estado: action.estado,
                actividad: action.actividad
            }
        default:
            return state;
    }
}