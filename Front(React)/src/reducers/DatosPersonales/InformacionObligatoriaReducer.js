import {
  SET_VALUE_INF_OBL 
} from "./DatosPersonalesTypes";

const initialState = {
    politExp: false,
    sujetoObligado: false,
    ciudEst: false
};

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_VALUE_INF_OBL:
      let newState = {...state}
      
      newState[data.fieldName] = data.fieldValue

      return {
        ...newState
      }; 
    case "RESET":
      return {
        ...initialState
      };  
    default:
      return state;
  }
};