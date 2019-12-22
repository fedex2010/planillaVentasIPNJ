import {
  SET_DATA_OFERTA,
  SET_OFERTA
} from "./OfertaTypes";

const initialState = {
  tieneCuentaCorriente: false,
  subProducto: "",
  paqueteId: ""
}

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_OFERTA:
      return {
        ...state,
        ...data
      }
    case SET_DATA_OFERTA:
      return {
        ...state,
        ...data
      }
    case "RESET":
      return {
        ...initialState
      }; 
    default:
      return state;
  }
};