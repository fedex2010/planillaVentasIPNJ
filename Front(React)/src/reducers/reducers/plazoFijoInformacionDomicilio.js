const initialState = {
    estado: 'NO_DEFINIDO',
    calle: "",
    numeroDomicilio:null,
    piso: "",
    departamento: "",
    codigo: "",
    codigoPostalValido:true,
    localidades: [],
    localidadSeleccionada: '',
    provincia: '',
    provinciaId: "",
    localidad: '',
    open: false,
    invalido:true
  };

export const plazoFijoInformacionDomicilio = (state = initialState, action) => {
    switch (action.type) {
        case 'INFORMACION_DOMICILIO':
            return {
                ...state,
                ...action.data
            }
        case 'SET_CODIGO_Y_LOCALIDADES':
            return {
                ...state,
                localidades: action.data.localidades,
                codigo: action.data.codigo,
                codigoPostalValido: action.data.codigoPostalValido,
                localidadSeleccionada:action.data.localidadSeleccionada,
                provinciaId:action.data.provinciaId
            }
        case 'SET_LOCALIDAD_SELECTA':
            return {
                ...state,
                "provincia":action.provincia,
                "localidad":action.localidad
            }
        case 'SET_VALOR_CAMPO':
            const newForm = { ...state };
            newForm[action.data.fieldName] = action.data.fieldValue;
            
            return {
                ...newForm
            }
        case 'RESET_TO_INITIAL_STATE':
            return {
                ...initialState
            }
        default:
            return state;
    }
}


