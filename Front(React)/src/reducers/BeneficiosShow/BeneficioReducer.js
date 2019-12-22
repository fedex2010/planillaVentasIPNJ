import {
  SET_BENEFICIO
} from "./BeneficioTypes";

const initialState = {
  isDetalleClicked: 0,
  isBeneficioClicked: true
}

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_BENEFICIO:
      return {
        ...state,
        ...data
      };
    case "RESET":
      return {
        ...initialState
      };
    default:
      return state;
  }
};