import { 
  SET_BIFURCACION
} from "./BifurcacionTypes";

//
const initialState = {
  bifurcoA: ""
}

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_BIFURCACION:
      return {
        ...state,
        bifurcoA : data.bifurcoA
      }; 

    case "RESET":
      return {
        ...initialState
      }; 
    
    default:
      return state;
  }
};