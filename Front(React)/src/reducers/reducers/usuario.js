const initialState = {
    nombre: 'NO DEFINIDO',
    correo: 'NO DEFINIDO'
};

export const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USUARIO':
            return {
                nombre: action.nombre,
                correo: action.correo
            }
        default:
            return state;
    }
}