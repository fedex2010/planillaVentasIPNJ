const initialStateNavigation = {
    flujo: 'INVALIDO'
};

const initialStateModal = {
    cargada: false
};

export const navigationReducer = (state = initialStateNavigation, action) => {
    switch (action.type) {
        case 'OB':
            return {
                flujo: 'OnBoarding',
                paso: action.paso
            }
        case 'PF':
            return {
                flujo: 'PlazoFijo',
                paso: action.paso
            }
        default:
            return state;
    }
}

export const modalCargadaReducer = (state = initialStateModal, action) => {
    switch (action.type) {
        case 'MODAL':
        return {
            cargada: action.cargada
        }
        default:
            return state;
    }
}