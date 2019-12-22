const initialState = {
    nombre: "",
    apellido: "",
    dni: '',
    ejemplar: "",//TODO
    idTributario: "",
    tipo: "",//TODO
    genero: "",//TODO
    email: "",
    telefonoMovil: "",
    fechaNacimiento: null,
    idTributario:"",
    dni:"",
    errorDni:false
};

export const plazoFijoPrimerFormulario = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAZO_FIJO_PRIMER_FORMULARIO':
            return {
                ...state,
                ...action.data
            }
        case 'RESET_TO_INITIAL_STATE':
            return {
                ...initialState
            }
        default:
            return state;
    }
}
