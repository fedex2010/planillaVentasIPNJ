import RestClient from "../../utils/RestClient"

import { cambiarUrl } from "../../reducers/Navegacion/NavegacionActions"

import { setInformacionDomicilio, setNuevoDomicilo } from "../DatosPersonales/DatosPersonalesActions"

import {
  SET_LOCALIDADES_DOMICILIO,
  SET_LOCALIDADES_NUEVO_DOMICILIO
} from "../DatosPersonales/DatosPersonalesTypes";

export const buscarCuil = data => dispatch => {

  let { dni, nombre, apellido, type } = data
  let url = `/onboardingPaquetes/api/persona/obtenerCuil?dni=${dni}&apYNom=${apellido}`

  RestClient.doGet(url)
    .then(response => {
      if (response.status === 200 || response.status === 204) {
        let { data } = response
        let idTributario = data.cuil || ""

        if(idTributario != ""){
          dispatch({
            type,
            data: {
              idTributario
            }
          })
        }
       

      } else {
        //MUESTRO MENSAJE DE ERROR???
      }

    })
    .catch(err => console.error(err))
}

export const buscarLocalidadesDomicilio = data => dispatch => {

  let { codigoPostal, type } = data

  let url = `/onboardingPaquetes/api/catalogo/localidad?codigoPostal=${codigoPostal}`

  RestClient.doGet(url)
    .then(response => {

      let data = response.data
      if (data.length > 0) {
        data.provinciaFrontEnd = data[0].provinciaFrontEnd
      }

      if (response.status === 200 || response.status === 204) {

        dispatch({
          type,
          data
        })

        if (type == SET_LOCALIDADES_DOMICILIO) {
          let data = {}
          if (response.data.length == 1) {
            data["localidadSeleccionada"] = response.data[0].id.toString()
          } else {
            data["localidadSeleccionada"] = "-1"
          }
          dispatch(setInformacionDomicilio(data))
        } else if (type == SET_LOCALIDADES_NUEVO_DOMICILIO) {
          let data = {}
          if (response.data.length == 1) {
            data.fieldValue = "localidadSeleccionada";
            data.value = response.data[0].id.toString()
          } else {
            data.fieldValue = "localidadSeleccionada";
            data.value = "-1"
          }
          dispatch(setNuevoDomicilo({data}))
        }



      } else {
        //MUESTRO MENSAJE DE ERROR???
      }

    })
    .catch(err => {
      console.error(err)

      dispatch(cambiarUrl({
        urlNueva: "/error"
      }))

    })

}

export const resetApp = () => {

  return {
    type: "RESET"
  }
}