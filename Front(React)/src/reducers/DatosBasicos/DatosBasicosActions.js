import { 
  SET_VALUE_DATOS_BASICOS,
  SET_CUIL_DATOS_BASICOS
} from "./DatosBasicosTypes";

import { 
  SET_OFERTA
} from "../Oferta/OfertaTypes";

import RestClient from "../../utils/RestClient"

import {cambiarUrl} from "../Navegacion/NavegacionActions"

export const enviarDatosBasicos = (tokenCatpcha) => (dispatch,getState) => {
  let {datosBasicos} = getState()
  datosBasicos = {...datosBasicos}
  
  datosBasicos.celular = datosBasicos.celular.cod + datosBasicos.celular.numero
  
  let {dd,mm,aaaa} = datosBasicos.fechaNacimiento
  datosBasicos.fechaNacimiento = dd + "/" + mm + "/" + aaaa

  //ESTE TOKEN SE SETEA DESDE UN SCRIPT EN EL INDEX.HTML
  //datosBasicos.tokenCatpcha = window.tokenCatpcha

  let url = `/onboardingPaquetes/api/venta/iniciar/` + tokenCatpcha; 


  RestClient.doPost(url,datosBasicos)
    .then(response => {
      if(response.status === 200 || response.status === 204){
        let {data} = response
        
        dispatch({
          type: SET_OFERTA,
          data
        })

        dispatch( cambiarUrl({
          urlNueva: "/oferta-paquete"  
        }))

      }else{
        //MUESTRO MENSAJE DE ERROR???
      }

    })
    .catch(err => {
      console.error(err)

      try{

        if(err.response.data.code === 600){

          dispatch( cambiarUrl({
              urlNueva: "/errorRechazado"  
          }))
  
        }else if(err.response.data.code === 700){
          
          dispatch( cambiarUrl({
              urlNueva: "/errorYaEsCliente"  
          }))
  
        }else{
  
          dispatch( cambiarUrl({
              urlNueva: "/error"  
          }))
  
        }

      }catch(errorMostrandoError){
        console.error("errorMostrandoError")
        console.error(errorMostrandoError)
        console.error("errorMostrandoError")

        /*dispatch( cambiarUrl({
            urlNueva: "/error"  
        }))*/
      }

    })
  
}

export const buscarCuil = data => dispatch => {
  
  let { dni, nombre, apellido } = data
  let url = `/onboardingPaquetes/api/persona/obtenerCuil?dni=${dni}&apYNom=${apellido}`

  RestClient.doGet(url)
    .then(response => {
      if(response.status === 200 || response.status === 204){
        let {data} = response
        let idTributario = data.cuil || ""

        if(idTributario != ""){
          dispatch({
            type: SET_CUIL_DATOS_BASICOS,
            data: {
              idTributario
            }
          })
  
        }
       
      }else{
        //MUESTRO MENSAJE DE ERROR???
      }

    })
    .catch(err => console.error(err))

}


export const setValueDatosBasicos = data => {
  return {
    type: SET_VALUE_DATOS_BASICOS,
    data
  }
}
