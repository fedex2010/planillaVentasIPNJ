/*
 * acciones
 */

import { createStore2 } from '../reducers/store';

export const buhobank = (variable) => {
    return {
        type: 'BB',
        variable
    }
}

export const onBoardingDigital = (paso) => {
    return {
        type: 'OB',
        paso
    }
}

export const plazoFijo = (paso) => {
    return {
        type: 'PF',
        paso
    }
}

export const setToken = (token, valido) => {
    return {
        type: 'SET_TOKEN',
        token,
        valido
    }
}

export const setUsuario = (nombre, correo) => {
    return {
        type: 'SET_USUARIO',
        nombre,
        correo
    }
}

export const setUrlRiesgoNet = (url) => {
    return {
        type: 'SET_URL_RIESGO_NET',
        url
    }
}

export const enableRiesgoNet = () => {
    return {
        type: 'ENABLE_RIESGO_NET'
    }
}

export const disableRiesgoNet = () => {
    return {
        type: 'DISABLE_RIESGO_NET'
    }
}

export const modalCargada = (valor) => {
    return {
        type: 'MODAL',
        cargada: valor
    }
}

export const plazoFijoActividad = (estado, actividad) => {
    return {
        type: 'PF_ACTIVIDAD',
        estado,
        actividad
    }
}

export const setIdClientAnalytics = (idClientAnalytics) => {
    return {
        type: 'SET_ID_CLIENT_ANALYTICS',
        idClientAnalytics
    }
}

export const setErrorMessage = (message) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        message
    }
}

export const setInformacionObligatoria = (data) => {
    createStore2().dispatch(
        {
            type: 'INFORMACION_OBLIGATORIA',
            data: data
        }
    )
}


export const setValueInformacionPersonal = (data) => {

    return {
                type: 'SET_VALOR_CAMPO2',
                data
            }
}

/*********DatosPersonales********** */
export const setInformacionPersonal = (data) => {
    return {
        type: 'INFORMACION_PERSONAL',
        data
    }
}
export const setIdAndTextInformacionPersonal = (data) => {
    
    let data2 = {
        fieldName:data.target.name,
        fieldValue:data.target.value,
        fieldNameText: data.target.name + "Text",
        fieldValueText: data.target.textValue
    }

    return {
        type: 'SET_ID_AND_TEXT_INFORMACION_PERSONAL',
        data:data2
    }
}

export const removeDataConyuge = () => {
    return {
        type: 'REMOVE_DATA_CONYUGE'
    }
}

export const setDatosNacimiento = (moment) => {
    
    let data = {
        fechaNac: moment.format("DD/MM/YYYY"),
        fechaNacMoment: moment
    }

    return {
        type: 'SET_DATOS_NACIMIENTO',
        data
    }    
}


export const setInformacionDomicilio = (data) => {
    data.data.type = 'INFORMACION_DOMICILIO'
    return {
        data: data.data
    }
}

export const setCodigoYLocalidadesDomicilio = (data) => {
    return {
        type : 'SET_CODIGO_Y_LOCALIDADES',
        data 
    }
}

export const setLocalidadSelectaDomicilio = (data) => {
    data.data.type = 'SET_LOCALIDAD_SELECTA'
    return {
        data: data.data
    }
}

export const setValorCampoDomicilio = (data) => {
    return {
        type :  'SET_VALOR_CAMPO',
        data 
    }
}

export const setLandingPage = (data) => {
    return {
        type: 'LANDING_PAGE',
        data: data.data
    }
}

/*----------- DATOS BASICOS ------------------*/
export const setPlazoFijoPrimerFormulario = (data) => {
    return {
        type: 'PLAZO_FIJO_PRIMER_FORMULARIO',
        data
    }
}

/*----------- SIMULADOR ------------------*/
export const setPlazoFijoSimulador = (data)=> {
    return {
        type: 'PLAZO_FIJO_SIMULADOR',
        data: data.data
    }
}

export const setValorCampoSimulador = (data)=> {
    return {
      type: 'SET_VALOR_CAMPO',
      data
    }
}

export const setPlazoDiasSimulador = (data)=> {
    return {
      type: 'SET_PLAZO_DIAS',
      data
    }
}

export const setRespuestaSimularSimulador = (data)=> {
    return {
      type: 'SET_RESPUESTA_SIMULAR',
      data
    }
}

export const setParametriaSimulador = (data)=> {
    return {
      type: 'SET_PARAMETRIA',
      data
    }
}


/*----------- CONFIRMACION ------------------*/
export const setPlazoFijoConfirmacion = (data) => {
    return {
        type: 'PLAZO_FIJO_CONFIRMACION',
        data: data.data
    }
}

export const setPlazoFijoConfirmacionTerminos = (data) => {
    return {
      type: 'PLAZO_FIJO_CONFIRMACION_CONFIRMACION',
      data: data
    }
  }

export const setPlazoFijoConfirmacionCBU = (data) => {
    createStore2().dispatch(
        {
            type: 'PLAZO_FIJO_CONFIRMACION_CBU',
            data: data
        }
    )
}

export const setPlazoFijoConfirmacionCbuRequested = (data) => {
    createStore2().dispatch(
        {
            type: 'PLAZO_FIJO_CONFIRMACION_CBU_REQUESTED',
            data: data
        }
    )
  }

export const resetToInitialState = () => {
    return {
        type: 'RESET_TO_INITIAL_STATE'
    }
}


  
