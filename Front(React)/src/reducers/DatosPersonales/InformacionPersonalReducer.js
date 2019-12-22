import {
  SET_VALUE_INF_PER,
  SET_VALUE_INF_PER_CONYUGE,
  SET_CUIL_CONYUGE,
  SET_IS_EXTRANJERO
} from "./DatosPersonalesTypes";

const initialState = {
  paisDeNac: "",
  nacionalidad: "",
  provincia: "",
  ciudad: "",
  estadoCivil: "",
  nivelDeEstudios: "",
  situacionLaboral: "",
  telefonoLaboral: "",
  unionCivil: "",
  nupcias: "",
  conyuge: {
    nombre: "",
    isNombreDeUnaLetra: false,
    apellido: "",
    isApellidoDeUnaLetra: false,
    dni: "",
    ejemplarDocumento: "A",
    idTributario: "",
    genero: "-1",
    idPaisNacimiento:"",
    idNacionalidad:""
  }
};

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_VALUE_INF_PER:
      return {
        ...state,
        ...data
      };
    case SET_VALUE_INF_PER_CONYUGE:
      let newForm = { ...state }
      newForm.conyuge[data.fieldName] = data.value

      return newForm

    case SET_CUIL_CONYUGE:
      let newForm2 = { ...state }
      newForm2.conyuge.idTributario = data.idTributario

      return newForm2

    case SET_IS_EXTRANJERO:
     return {
       ...state,
       ...data
     }


    case "RESET":
      return {
        ...initialState
      };
    default:
      return state;
  }
};