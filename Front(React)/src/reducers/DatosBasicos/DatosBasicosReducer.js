//import {HIDE_GENERAL_LOADING,SET_CAROUSEL, SET_CURRENT_CART, SET_CURRENT_CART_ERROR, SET_SELECTED_PRODUCT} from "../actions/Types";

const initialState = {
  nombre: "",
  isNombreDeUnaLetra:false,
  apellido: "",
  isApellidoDeUnaLetra:false,
  dni: "",
  ejemplarDocumento: "",
  idTributario: "",
  genero: "",
  fechaNacimiento:{
    dd:"",mm:"",aaaa:""
  },
  email: "",
  celular:{
    cod:"",numero:""
  }
};

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case "SET_VALUE_DATOS_BASICOS":
      return {
        ...state,
        ...data
      }; 
    case "SET_CUIL_DATOS_BASICOS":
      return {
        ...state,
        idTributario : data.idTributario
      };

    case "RESET":
      return {
        ...initialState
      }; 

    default:
      return state;
  }
};