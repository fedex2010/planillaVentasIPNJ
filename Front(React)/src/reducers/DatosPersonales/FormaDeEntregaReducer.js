import {
  SET_VALUE_FORM_ENT,
  SET_SUCURSAL,
  SET_NUEVO_DOMICILIO,
  SET_LOCALIDADES_NUEVO_DOMICILIO
} from "./DatosPersonalesTypes";

const initialState = {
  formaDeEntrega: 0,
  sucursal: {
      "id": 0,
      "descripcion": "BUENOS AIRES",
      "codigoZonaCotizacion": null,
      "domicilio": "Reconquista 101 -CP 1003- Capital Federal",
      "horarioAtencion": "L a V de 10 a 15 hs",
      "codigoTipoSucursal": 1,
      "codigoProvincia": 1,
      "latitud": -34.60666,
      "longitud": -58.372257
  },
  domicilioEnvio:{
    calle:"",
    numeroDomicilio:"",
    piso:"",
    localidadSeleccionada:"",
    departamento:"",
    codigo:"",
    localidades:[],
    provinciaFrontEnd:""
  }
};

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {

    case SET_VALUE_FORM_ENT:
      return {
        ...state,
        ...data.data
      }
    
    case SET_SUCURSAL:
      return {
        ...state,
        sucursal: data
    }  

    case SET_NUEVO_DOMICILIO:
      let domicilioEnvio = {...state.domicilioEnvio}
      domicilioEnvio[data.data.fieldValue] = data.data.value
      return {
        ...state,
        domicilioEnvio: domicilioEnvio
      }  

    case SET_LOCALIDADES_NUEVO_DOMICILIO:
      let nuevoDomicilio2 = {...state.domicilioEnvio}
      nuevoDomicilio2.localidades = data
      nuevoDomicilio2.idProvincia = data.provinciaFrontEnd

      return {
        ...state,
        domicilioEnvio : nuevoDomicilio2
      }  
    case "RESET":
      return {
        ...initialState
      }; 
    default:
      return state;
  }
};