import { 
  SET_TERMINOS_Y_CONDICIONES
} from "./PreguntasTyCTypes";

const initialState = {
  aceptoTerminos:false
}

export default (state = initialState, action) => {
  
  switch (action.type) {
    case SET_TERMINOS_Y_CONDICIONES:
      return {
        ...state,
        aceptoTerminos: action.data.aceptoTerminos
      }; 
    case "RESET":
      return {
        ...initialState
      }; 
    default:
      return state;
  }
};