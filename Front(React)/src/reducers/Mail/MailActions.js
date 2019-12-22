import { 
  ENVIAR_MAIL
} from "./MailTypes";

import RestClient from "../../utils/RestClient"

export const enviarMail = data2 => dispatch => {


  let data = {
    direccion : data2.email
  }


  return RestClient.doPost("/onboardingPaquetes/mail/validar",data)
}


/*export const enviarUtmVars = data => dispatch => {
  //RestClient.doPost("/api/inicializar/",data)
    
    //.then( response => console.log(response))

    //.catch( error => cambiarUrl({urlNueva:"/error"}) )
}
*/