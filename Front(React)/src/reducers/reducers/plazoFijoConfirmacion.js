const initialState = {
    estado: 'NO_DEFINIDO',
    titular: "",
    banco: "",
    isCbuOk: false,
    acceptTerminosCondiciones:false,
    cbuAlias:"",
    cbuRequested:false,
    validCbuAlias:""
};

export const plazoFijoConfirmacion = (state = initialState, action) => {
    let data;

    switch (action.type) {
        case 'PLAZO_FIJO_CONFIRMACION':
            data = action.data;

            return {
                ...state,
                estado: action.type,
                titular:data.titular,
                banco:data.banco,
                isCbuOk:data.isCbuOk,
                cbuRequested:data.cbuRequested,
                cbuAlias:data.cbuAlias,
                validCbuAlias:data.validCbuAlias
            }

        case 'PLAZO_FIJO_CONFIRMACION_CONFIRMACION':
            //para pisar la referencia vieja
            return {
                ...state,
                acceptTerminosCondiciones : action.data.acceptTerminosCondiciones
            }
            
        case 'PLAZO_FIJO_CONFIRMACION_CBU':
            return {
                ...state,
                cbuAlias : action.data.cbuAlias
            }

        case 'PLAZO_FIJO_CONFIRMACION_CBU_REQUESTED':
            return {
                ...state,
                cbuRequested : action.data.cbuRequested,
                isCbuOk : action.data.isCbuOk
            }

        case 'RESET_TO_INITIAL_STATE':
            return {
                ...initialState
            }
        default:
            return state;
    }
}
