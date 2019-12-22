import { 
  SET_EMAIL,
  SET_FOTO_UNO,
  SET_FOTO_DOS,
  SET_FOTO_MERGEADA
} from "./FotosTypes";

import {cambiarUrl} from "../Navegacion/NavegacionActions"

//utils
import RestClient from "../../utils/RestClient"

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    data:{
      email
    }
  }
}

export const setFotoUno = fotoUno => {
  return {
    type: SET_FOTO_UNO,
    data:{
      fotoUno
    }
  }
}
export const setFotoDos = fotoDos => {

  return {
    type: SET_FOTO_DOS,
    data:{
      fotoDos
    }
  }
}

export const imprimirPantall = () => dispatch => {
}

export const setImagenMergeada = (fotoMergeada) => {
  return {
    type: SET_FOTO_MERGEADA,
    data:{
      fotoMergeada
    }
  }
}

export const enviarMail = () => (dispatch,getState) => {
  let { fotos,datosBasicos } = getState()
  
  let data = {
    baseEncode64Image : fotos.fotoUno
  }

  let url = `/onboardingPaquetes/api/venta/procesarImagen?email=${datosBasicos.email}`

  RestClient.doPost(url,data)
    .then(response => {
      
      console.log(response)
      
      dispatch( setImagenMergeada(response.data.baseDecode64Image) )

      let img = "<img src='"+response.data.baseDecode64Image+"'>"

      let popup = window.open();
      popup.document.write(img);
      
      setTimeout( () => { 
        popup.print();
        
        //window.close(); 
      }, 1000);

    })
    .catch(err => {
      console.error(err)

      dispatch( cambiarUrl({
        urlNueva: "/error"  
      }))
    })
}