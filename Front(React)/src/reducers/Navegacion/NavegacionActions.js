import ReactGA from 'react-ga';

import {
  CAMBIAR_URL,
  SET_URL_BATCH,
  SHOW_LOADING,
  HIDE_LOADING,
  SET_CLIENT_ID_ANALYTICS,
  SET_ENVIRONMENT_HOMO
} from "./NavegacionTypes";

import { browserHistory } from "../../index"

//utils
import RestClient from "../../utils/RestClient"



export const updateHash = context => (dispatch, getState) => {
  let { navegacion } = getState()

  let ultimaUrl = navegacion.ultimaUrl + "#" + context.hash

  browserHistory.push(ultimaUrl)
  //ReactGA.pageview( ultimaUrl );
}

export const cambiarUrl = context => dispatch => {

  let ultimaUrl = "/buhobank/tarjetas" + context.urlNueva

  let data = {
    ultimaUrl
  }

  new Promise((resolve, reject) => {
    dispatch({
      type: CAMBIAR_URL,
      data
    })
    resolve("¡Éxito!"); // ¡Espero q c muestre el loading!
  })
    .then(r => {
      browserHistory.push(ultimaUrl)
      ReactGA.pageview(ultimaUrl);
    })

}

export const showLoading = () => dispatch => {

  dispatch({
    type: SHOW_LOADING,
    data: {}
  })

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("¡Éxito!"); // ¡Espero q c muestre el loading!
    }, 500);
  });
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING,
    data: {}
  }
}

export const setClientIdAnalytics = (clientId) => {
  return {
    type: SET_CLIENT_ID_ANALYTICS,
    data: {
      clientId
    }
  }
}

export const enviarUtmVars = data => dispatch => {
  return RestClient.doPost("/onboardingPaquetes/api/venta/inicializar", data)
    .then(response => {
      let isHomo = response.data;
      dispatch({
        type: SET_ENVIRONMENT_HOMO,
        data: {
          isHomo
        }
      });
    })
    .catch(error => {
      console.log(error.response)
      throw error
    })
}
