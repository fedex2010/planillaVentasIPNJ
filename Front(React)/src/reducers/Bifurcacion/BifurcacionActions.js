import { 
  SET_BIFURCACION
} from "./BifurcacionTypes";

import {obtenerPreguntas} from "../Preguntas/PreguntasActions"
import {cambiarUrl} from "../Navegacion/NavegacionActions"

//utils
import RestClient from "../../utils/RestClient"

export const guardarBifurcacion = bifurcoA => dispatch => {
  let respuesta = {
    bifurcoA
  }

  let url = `/onboardingPaquetes/api/venta/guardarRespuestaBifurcacion`

  RestClient.doPost(url,respuesta)
    .then(response => {
      if(response.status === 200 || response.status === 204){
        
        dispatch({
          type: SET_BIFURCACION,
          data: {
            bifurcoA
          }
        })

        //
        if(bifurcoA === "PREGUNTAS"){

          dispatch( obtenerPreguntas() )
          
        }else{ //"ENVIAR_MAIL"
          dispatch( cambiarUrl({
            urlNueva: "/validar-identidad"  
          }))
        }
        
      }

    })
    .catch(err => {
      console.error(err)

      dispatch( cambiarUrl({
        urlNueva: "/error"  
      }))
    })
}