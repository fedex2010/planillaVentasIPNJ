
import {
    SET_TERMINOS_Y_CONDICIONES
} from "../PreguntasTyC/PreguntasTyCTypes"

import { 
  SET_URL_BATCH
} from "../Navegacion/NavegacionTypes";

import {cambiarUrl} from "../Navegacion/NavegacionActions"

import RestClient from "../../utils/RestClient"

export const setTyc = aceptoTerminos =>{
    return {
        type:SET_TERMINOS_Y_CONDICIONES,
        data:{
            aceptoTerminos
        }
    }
}

export const finalizarVenta = () => dispatch =>{
  let url = "/onboardingPaquetes/api/venta/finalizar2"; 

  RestClient.doGet(url)
    .then(response => {

      dispatch( cambiarUrl({
        urlNueva: "/felicitaciones"  
      }))

    })
    .catch(error => {
      console.error(error)
      
      try{
          if(error.response.status === 403){
            dispatch( {
              type: SET_URL_BATCH,
              data:{
                urlBatch:error.response.data.urlBatch
              }
            })

            dispatch( cambiarUrl({
                urlNueva: "/errorTiempo"  
            }))

          }else{

            dispatch( cambiarUrl({
                urlNueva: "/error"  
            }))

          }  
      }catch(err){
        dispatch( cambiarUrl({
            urlNueva: "/error"  
        }))  
      }
      
    })
}