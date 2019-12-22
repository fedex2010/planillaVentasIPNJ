const initialState = {
    sujetoObligado: 'NO',
    politExp: 'NO',
    ciudEst: 'NO'    
};

export const plazoFijoInformacionObligatoria = (state = initialState, action) => {
    switch (action.type) {
        case 'INFORMACION_OBLIGATORIA':
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
