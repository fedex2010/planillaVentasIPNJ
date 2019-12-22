import { createStore, combineReducers, applyMiddleware} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import navegacionReducer from "./Navegacion/NavegacionReducer";
import datosBasicosReducer from "./DatosBasicos/DatosBasicosReducer";
import ofertaReducer from "./Oferta/OfertaReducer";
import BeneficioReducer from "./BeneficiosShow/BeneficioReducer";


import informacionObligatoriaReducer from "./DatosPersonales/InformacionObligatoriaReducer";
import informacionPersonalReducer from "./DatosPersonales/InformacionPersonalReducer";
import domicilioReducer from "./DatosPersonales/DomicilioReducer";
import formaDeEntregaReducer from "./DatosPersonales/FormaDeEntregaReducer";

import bifurcacionReducer from "./Bifurcacion/BifurcacionReducer";
import preguntasReducer from "./Preguntas/PreguntasReducer";
import tycReducer from "./PreguntasTyC/PreguntasTyCReducer";


const logger = createLogger({
  collapsed: true,
  diff: true
});

let middlewares = [thunk]

let enviroment = process.env.REACT_APP_APP_ENV || "dev"
if(enviroment !== "prod"){
  middlewares.push(logger)
}

let rootReducer = combineReducers({
  navegacion: navegacionReducer,
  datosBasicos: datosBasicosReducer,
  oferta:ofertaReducer,
  bifurcacion:bifurcacionReducer,
  preguntas: preguntasReducer,
  informacionObligatoria:informacionObligatoriaReducer,
  informacionPersonal:informacionPersonalReducer,
  domicilio:domicilioReducer,
  formaDeEntrega:formaDeEntregaReducer,
  tycPreguntas:tycReducer,
  beneficio:BeneficioReducer
})

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware( ...middlewares ))
const persistor = persistStore(store)

export const createStore2 = () => {
  return store
}

export const createPersistor = () => {
  return persistor
}
