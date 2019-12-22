import { 
  SET_PREGUNTAS,
  SET_RESPUESTA,
  GUARDAR_DICTAMEN
} from "./PreguntasTypes";

import {cambiarUrl} from "../Navegacion/NavegacionActions"
import RestClient from "../../utils/RestClient"


export const chequearDictamen = () => (dispatch,getState) => {
  let { dictamen } = getState().preguntas

  if(dictamen === "APROBADO" || dictamen === "YA_APROBADO"){
    dispatch( cambiarUrl({
      urlNueva: "/verificar-datos"  
    }))   
  }else{
    dispatch( cambiarUrl({
      urlNueva: "/errorValidarIdentidad"  
    }))   
  }
}


export const obtenerPreguntas = context => dispatch => {

  RestClient.doGet("/onboardingPaquetes/api/venta/obtener")
  .then( response => {
    
    let {data} = response

    
    if(data.resolucion !== null){
      dispatch( guardarDictamen({
        dictamen:data.resolucion
      }))  
    }

    
    if(data.resolucion === "APROBADO" || data.resolucion === "YA_APROBADO"){
      
      dispatch( cambiarUrl({
        urlNueva: "/verificar-datos"  
      }))    

    }else{

      dispatch({
        type:SET_PREGUNTAS,
        data:data.preguntas
      })

      dispatch( cambiarUrl({
        urlNueva: "/obtener-preguntas"  
      }))
      
    }
    
  })

  .catch( error => {
    console.error(error)

    dispatch( cambiarUrl({
      urlNueva: "/error"  
    }))

  })

}


export const guardarDictamen = dictamen => {
  return {
    type:GUARDAR_DICTAMEN,
    data:dictamen
  }
}

export const enviarRespuesta = () => (dispatch,getState) => {
  let { preguntas } = getState()

  let respuestas = []

  for (let i = 0; i < preguntas.preguntas.length; i++) {
    respuestas.push({
      codigoPregunta : preguntas.preguntas[i].codigo,
      codigoOpcionSeleccionada : preguntas["respuesta"+(i+1)]
    })
  }

  let data = {
    respuestas:respuestas
  }


  RestClient.doPost("/onboardingPaquetes/api/venta/evaluar",data)
    
    .then( response => {
      
      let {data} = response

      dispatch( guardarDictamen({
        dictamen : data.dictamen
      }))

      if( data.resolucion === "RECHAZADO" || data.dictamen === "RECHAZADO"){
        dispatch( cambiarUrl({
          urlNueva: "/errorValidarIdentidad"  
        }))    
      }else{
        dispatch( cambiarUrl({
          urlNueva: "/verificar-datos"  
        }))    
  
      }
    })
    .catch( error => console.error(error) )
    
  
}


export const setRespuesta = data  => {

  return {
    type:SET_RESPUESTA,
    data:{
      nro:data.nro,
      respuesta:data.respuesta
    }
  }

}
