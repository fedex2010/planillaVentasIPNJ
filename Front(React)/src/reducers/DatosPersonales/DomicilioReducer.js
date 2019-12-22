import {
  SET_VALUE_DOMICILIO ,
  SET_LOCALIDADES_DOMICILIO
} from "./DatosPersonalesTypes";

const initialState = {
    calle:"",
    numeroDomicilio:"",
    piso:"",
    localidadSeleccionada:"",
    departamento:"",
    codigo:"",
    localidades:[],
    idProvincia:""
};

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_VALUE_DOMICILIO:
      return {
        ...state,
        ...data
      }; 

    case SET_LOCALIDADES_DOMICILIO:
      return {
        ...state,
        localidades:data,
        idProvincia:data.provinciaFrontEnd
      };  
    case "RESET":
      return {
        ...initialState
      };    
    default:
      return state;
  }
};