import { 
  SET_DATA_OFERTA
} from "./OfertaTypes";

import RestClient from "../../utils/RestClient"

import {cambiarUrl} from "../Navegacion/NavegacionActions"

export const setDataOferta = (data) => {
  return {
    type:SET_DATA_OFERTA,
    data
  }
}

export const persistirDataOferta = () => ( dispatch, getState ) => {
  let { oferta } = getState()

  let data = {
    tieneCuentaCorriente:oferta.ctaCte,
    subProducto:oferta.flyType,
    paqueteId:oferta.packageId
  }

  RestClient.doPost("/onboardingPaquetes/api/venta/guardarDatosOferta",data)
              .then(response => {

                dispatch( cambiarUrl({
                  urlNueva: "/datos-personales"  
                }))   
             

              })
              .catch(err => {

                dispatch( cambiarUrl({
                  urlNueva: "/error"  
                }))   
              })
              
}

/*import { browserHistory } from "../../index"

//utils
import RestClient from "../../utils/RestClient"

export const cambiarUrl = context => dispatch => {

  let data = {
    ultimaUrl : context.urlNueva
  }

  dispatch( {
    type: CAMBIAR_URL,
    data
  })

  browserHistory.push( context.urlNueva )
}


export const enviarUtmVars = data => dispatch => {
  //RestClient.doPost("/api/inicializar/",data)
    
    //.then( response => console.log(response))

    //.catch( error => cambiarUrl({urlNueva:"/error"}) )
}
*/