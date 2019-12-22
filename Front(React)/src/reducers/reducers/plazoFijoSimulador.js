const initialState = {
    estado: 'NO_DEFINIDO',
    tasa: 0,
    plazoDias: 0,
    plazo: "",
    monto: 0,
    intereses: 0,
    montoMin: 0,
    montoMax: 0,
    plazoMin: 0,
    plazoMax: 0,
    montovencimiento:0,
    huboSimulacion:false,
    huboCambios:false,
    validMonto:0,
    validPlazoDias:0
  };

export const plazoFijoSimulador = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAZO_FIJO_SIMULADOR':
            return {
                ...state,
                ...action.data
            }
        case 'SET_VALOR_CAMPO':
            const newForm = { ...state };
            newForm[action.data.fieldName] = action.data.fieldValue;
            
            return {
                ...newForm
            }
        case 'SET_PLAZO_DIAS':
            return {
                ...state,
                "plazoDias":action.data.plazoDias,
                "plazo":action.data.plazo
            }
        case 'SET_RESPUESTA_SIMULAR':
            return {
                ...state,
                ...action.data
            }   
        case 'SET_PARAMETRIA':
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
