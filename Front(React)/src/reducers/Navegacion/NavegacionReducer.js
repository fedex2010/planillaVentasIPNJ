
import { 
  CAMBIAR_URL,
  SHOW_LOADING,
  HIDE_LOADING,
  SET_URL_BATCH,
  SET_CLIENT_ID_ANALYTICS,
  SET_ENVIRONMENT_HOMO
} from "./NavegacionTypes";

import $ from 'jquery';

const initialState = {
  clientIdAnalytics: "",
  urlPrevia: "",
  ultimaUrl: "",
  urlBatch:"",
  showLoading:true,
  isHomo:false
};

export default (state = initialState, action = {}) => {
  let data = action.data
  switch (action.type) {
    case SET_CLIENT_ID_ANALYTICS:
      return {
        ...state,
        clientIdAnalytics : state.clientIdAnalytics
      }; 
    case CAMBIAR_URL:
      return {
        ...state,
        urlPrevia : state.ultimaUrl,
        ultimaUrl : data.ultimaUrl,
      }; 
    case SET_URL_BATCH:
      return {
        ...state,
        data : data.urlBatch
      }; 
    case SHOW_LOADING:
      $(".load").fadeIn(1400);

      return {
        ...state,
        showLoading : true
      }; 

    case HIDE_LOADING:
      $(".load").fadeOut(1400);

      return {
        ...state,
        showLoading : false
      }; 

      case SET_ENVIRONMENT_HOMO:
      return {
        ...state,
        isHomo : data.isHomo
      }

    case "RESET":
      return {
        ...initialState,
        isHomo: state.isHomo
      }; 
    default:
      return state;
  }
};