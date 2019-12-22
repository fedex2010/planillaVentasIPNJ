import {
  SET_VALUE_INF_OBL,
  SET_VALUE_INF_PER,
  SET_VALUE_INF_PER_CONYUGE,
  SET_VALUE_DOMICILIO,
  SET_VALUE_FORM_ENT,
  SET_SUCURSAL,
  SET_NUEVO_DOMICILIO,
  SET_IS_EXTRANJERO
} from "./DatosPersonalesTypes";

import {
  cambiarUrl,
  updateHash
} from "../Navegacion/NavegacionActions";

import RestClient from "../../utils/RestClient"

export const setInformacionObligatoria = (data) => {
  return {
    type: SET_VALUE_INF_OBL,
    data
  }
}

export const setIsExtranjero = (numeroDni) => {
  let isArgentinianDni = numeroDni < 60000000;

  let data = {};

  if (isArgentinianDni) {
    data.isArgentinianDni = isArgentinianDni;
    data.paisDeNac = "80";
    data.nacionalidad = "80";
  } else {
    data = {
      isArgentinianDni,
      paisDeNac: "",
      nacionalidad: "",
      provincia: "",
      ciudad: ""
    }
  }

  return {
    type: SET_IS_EXTRANJERO,
    data
  }
}

export const setInformacionPersonal = (data) => {
  return {
    type: SET_VALUE_INF_PER,
    data
  }
}

export const setInformacionPersonalConyuge = (data) => {
  return {
    type: SET_VALUE_INF_PER_CONYUGE,
    data
  }
}

export const setInformacionDomicilio = (data) => {
  return {
    type: SET_VALUE_DOMICILIO,
    data
  }
}

export const setFormaDeEntrega = (data) => {

  return {
    type: SET_VALUE_FORM_ENT,
    data
  }
}

export const setNuevaSucursal = (data) => dispatch => {
  let { sucursal } = data
  let url = "/onboardingPaquetes/api/catalogo/sucursal?idProvincia=" + sucursal

  RestClient.doGet(url)
    .then(response => {
      if (response.status === 200 || response.status === 204) {
        let { data } = response

        dispatch({
          type: SET_SUCURSAL,
          data
        })

      }

    })
    .catch(err => console.error(err))
}

export const setNuevoDomicilo = (data) => {
  return {
    type: SET_NUEVO_DOMICILIO,
    data
  }
}

export const guardarDatosPersonales = () => (dispatch, getState) => {
  console.log("**********")
  console.log("GUARDANDO DATOS PERSONALES")

  let { informacionPersonal } = getState()

  let postData = {
    ...informacionPersonal
  }

  if (informacionPersonal.estadoCivil !== "C") {
    postData.conyuge = null
  }
  postData.localidades = null

  let url = "/onboardingPaquetes/api/venta/guardarDatosPersonales";
  
  RestClient.doPost(url, postData)

    .then(response => {
      console.log(response)
    })

    .catch(err => {

      dispatch(cambiarUrl({
        urlNueva: "/error"
      }))

    })
}

export const guardarDatosDomicilio = () => (dispatch, getState) => {
  let { domicilio } = getState()

  let url = "/onboardingPaquetes/api/venta/guardarDomicilio";
  
  RestClient.doPost(url, domicilio)

    .then(response => {
      console.log(response)

    })

    .catch(err => {

      dispatch(cambiarUrl({
        urlNueva: "/error"
      }))

    })
}

export const notificarErrorSO_PEP_CU = (data) => dispatch => {

  let url = "/onboardingPaquetes/api/venta/personaPoliticaObligadaEeuu";

  RestClient.doPost(url, data)

    .then(response => {

      if (response.status != 200) {
        dispatch(cambiarUrl({
          urlNueva: "/errorRechazado?codigo=SO_PEP_CU"
        }))
      }

    })

    .catch(err => {

      dispatch(cambiarUrl({
        urlNueva: "/error"
      }))

    })
}

const prepararDataPostDatosPersonales = (getState) => {
  let { formaDeEntrega } = getState()

  let postData = {
  }

  if (formaDeEntrega.formaDeEntrega === 1) { //SUC
    postData.formaDeEntrega = 1
    postData.idSucursal = formaDeEntrega.sucursal.id

  } else if (formaDeEntrega.formaDeEntrega === 2) {//DOM
    postData.formaDeEntrega = 2

  } else {//NUEVO DOM
    postData.formaDeEntrega = 3
    postData.domicilioEnvio = { ...formaDeEntrega.domicilioEnvio }
    postData.domicilioEnvio.localidades = null
  }

  return postData
}



export const enviarDatosPersonales = (isMobile) => (dispatch, getState) => {
  const postData = prepararDataPostDatosPersonales(getState)

  let url = "/onboardingPaquetes/api/venta/guardarFormaDeEntrega?isMobile=" + isMobile

  RestClient.doPost(url, postData)
    .then(response => {

      if (isMobile) {

        window.location.href = response.data.urlOnboarding

      } else {
        dispatch(cambiarUrl({
          urlNueva: "/detect-device"
        }))
      }
    })
    .catch(err => {
      console.error(err)

      dispatch(cambiarUrl({
        urlNueva: "/error"
      }))
    })

}





