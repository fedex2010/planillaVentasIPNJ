import { 
  SET_PREGUNTAS,
  SET_RESPUESTA,
  GUARDAR_DICTAMEN
} from "./PreguntasTypes";

const initialState = {
  preguntas: [],
  dictamen:"",
  respuesta1:null,
  respuesta2:null,
  respuesta3:null,
  respuesta4:null,
  respuesta5:null
}

export default (state = initialState, action = {}) => {
  let data = action.data

  switch (action.type) {
    case SET_PREGUNTAS:
      console.log("SET_PREGUNTAS")
      console.log(data)
      console.log(state.dictamen)
    //momentaneo, solo pasa cuando vuelve a ingresar a preguntas y el dictamen ya esta realizado
      if(data === null){
        data = []
      }

      return {
        ...state,
        preguntas: data
      }; 
    case SET_RESPUESTA:
        
      let newRespuesta = {}
      newRespuesta["respuesta"+data.nro] = data.respuesta

      let newState = {
        ...state,
        ...newRespuesta
      }

      return newState 
    case GUARDAR_DICTAMEN:
      return {
        ...state,
        dictamen: data.dictamen
      }
    case "RESET":
      return {
        ...initialState
      }; 
    default:
      return state;
  }
};