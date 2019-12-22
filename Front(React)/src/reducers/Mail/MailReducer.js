import { 
  ENVIAR_MAIL
} from "./MailTypes";

const initialState = {
  
}

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case ENVIAR_MAIL:
      return {
        ...state
      }; 
    case "RESET":
      return {
        ...initialState
      }; 
    default:
      return state;
  }
};