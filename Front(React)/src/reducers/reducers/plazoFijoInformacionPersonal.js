import moment from 'moment';

const initialState = {
    tipo:"",
    tipoText:"",
    paisNacimiento:"",
    paisNacimientoText:"",
    telefonoMovil:"",
    ciudad:"",
    ciudadText:"",
    provincia:"",
    provinciaText:"",
    nacionalidad:"",
    nacionalidadText:"",
    fechaNac:null,
    fechaNacMoment: null,
    estadoCivil:"",
    nombreConyuge:"",
    apellidoConyuge:"",
    dniConyuge:"",
    ejemplarConyuge:"",
    cuilConyuge:"",
    tipoConyuge:"",
    generoConyuge:"",
    nupcias:0
};

export const plazoFijoInformacionPersonal = (state = initialState, action) => {
    switch (action.type) {
        case 'INFORMACION_PERSONAL':
            return {
                ...state,
                ...action.data
            }
        case 'SET_DATOS_NACIMIENTO':
            
            return {
                ...state,
                ...action.data            
            }

        case 'SET_VALOR_CAMPO2':
            const newForm = { ...state };
            newForm[action.data.fieldName] = action.data.fieldValue;

            return {
                ...newForm
            }

        case "REMOVE_DATA_CONYUGE":
            let newState = { ...state };
            
            newState.nombreConyuge = ""
            newState.apellidoConyuge = ""
            newState.dniConyuge = ""
            newState.ejemplarConyuge = ""
            newState.cuilConyuge = ""
            newState.tipoConyuge = ""
            newState.generoConyuge = ""
            newState.nupcias = 0
            
            return {
                ...newState
            }

        case 'SET_ID_AND_TEXT_INFORMACION_PERSONAL':

            const newData = {  };
            newData[action.data.fieldName] = action.data.fieldValue;
            newData[action.data.fieldNameText] = action.data.fieldValueText;

            return {
                ...state,
                ...newData
            }
        case 'RESET_TO_INITIAL_STATE':
            return {
                ...initialState
            }
        default:
            return state;
    }
}
