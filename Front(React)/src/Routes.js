import config from './config/config';
//Dependencies
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import useReactRouter from 'use-react-router';
import TagManager from 'react-gtm-module'

//Components
import App from './components/App';
import Welcome from './components/Welcome/Welcome';
import DatosBasicos from './components/DatosBasicos/DatosBasicos';
import DatosPersonales from './components/DatosPersonales/DatosPersonales';
import Oferta from './components/Oferta/Oferta';
import DetectDevice from './components/DetectDevice/DetectDevice';
import ValidarIdentidad from './components/ValidarIdentidad/ValidarIdentidad';
import ObtenerPreguntas from './components/ObtenerPreguntas/ObtenerPreguntas';
import PreguntasTyC from './components/PreguntasTyC/PreguntasTyC';
import Felicitaciones from './components/Felicitaciones/Felicitaciones';
import DemasiadoIntentos from './components/DemasiadoIntentos';
import LinkFooter from './components/LinkFooter/LinkFooter';

//errores
import ErrorGenerico from './components/ErrorGenerico';
import ErrorRechazado from './components/ErrorRechazado';
import ErrorBatchCorriendo from './components/ErrorBatchCorriendo';
import ErrorYaEsCliente from './components/ErrorYaEsCliente';
import ErrorValidarIdentidad from './components/ErrorValidarIdentidad';

import RestClient from "./utils/RestClient"

import ReactGA from 'react-ga';

import ProtectedRouted from './components/Common/ProtectedRouted'


import {
    cambiarUrl
} from "./reducers/Navegacion/NavegacionActions"

//PRIMER JAVA 8
import NotFound from './components/NotFound/NotFound';
//TODO: Eliminar Pasos
//OnBoarding
/*import Paso0 from './components/OnBoarding/Paso0';
import Paso1 from './components/OnBoarding/Paso1';
import Paso2 from './components/OnBoarding/Paso2';
import Paso3 from './components/OnBoarding/Paso3';
import Paso4 from './components/OnBoarding/Paso4';
import Paso5 from './components/OnBoarding/Paso5';
import Paso6 from './components/OnBoarding/Paso6';
import Paso7 from './components/OnBoarding/Paso7';
import Paso8 from './components/OnBoarding/Paso8';
import Paso9 from './components/OnBoarding/Paso9';
import Felicitaciones2 from './components/OnBoarding/Felicitaciones';
//OnBoarding Errores
import ErrorServicio from './components/OnBoarding/error/ErrorServicio';
import ErrorVU from './components/OnBoarding/error/ErrorVU';
import ErrorDNI from './components/OnBoarding/error/ErrorDNI';
import ErrorRostro from './components/OnBoarding/error/ErrorRostro';
import ErrorPruebaVida from './components/OnBoarding/error/ErrorPruebaVida';
import ErrorIdentidad from './components/OnBoarding/error/ErrorIdentidad';
import ErrorVenta from './components/OnBoarding/error/ErrorVenta';
import SinReintentos from './components/OnBoarding/error/SinReintentos';
//Plazo fijo 
import LandingPage from './components/PlazoFijo/landingPage/LandingPage';
import DatosBasicosPF from './components/PlazoFijo/datosBasicos/DatosBasicos';
import DatosPersonalesPF from './components/PlazoFijo/datosPersonales/DatosPersonales';
import Congrats from './components/PlazoFijo/congrats/Congrats';
//Plazo fijo Errores 
import ErrorIniciar from './components/PlazoFijo/error/ErrorIniciar';
import ErrorYaEsCliente from './components/PlazoFijo/error/ErrorYaEsCliente';
import ErrorPlazoFijo from './components/PlazoFijo/error/ErrorPlazoFijo';*/

//LLEVAR A UNA CLASE UTILITARIA
//actions
//actions
import { setClientIdAnalytics } from "./reducers/Navegacion/NavegacionActions"

import { customURLSearchParams } from "./utils/UrlUtils";
//import { config } from 'react-transition-group';

ReactGA.initialize('UA-2594286-2');

ReactGA.ga((tracker) => {
    let clientId = tracker.get('clientId')

    RestClient.doPost("/onboardingPaquetes/api/venta/setClientId", { clientId })

        .then(response => console.log(""))

        .catch(error => {
            console.error("error guardando google client id")
            console.error(error)
        })
            
    //TAG MANAGER
    const tagManagerArgs = {
        gtmId: 'GTM-NZN8BML'/*,
        dataLayer:{
            IdUsuarioAnalytics: clientId,
            userId: clientId,
            userProject: 'Banco Hipotecario Onboarding'
        },
        dataLayerName: 'dataLayer'*/
    }
    
    TagManager.initialize(tagManagerArgs)

});


const urlPriority = {
    "/": 0,
    "/datos-iniciales": 1,
    "/oferta-paquete": 2,
    "/datos-personales": 3,
    "/detect-device": 4,
    "/validar-identidad": 5,
    "/obtener-preguntas": 6,
    "/verificar-datos": 7,
    "/felicitaciones": 8
}

const AppRoutes = () => {
    const dispatch = useDispatch()
    const { location } = useReactRouter();

    const urlToCheckSesion = ["oferta-paquete", "datos-personales", "detect-device", "validar-identidad",
        "preguntas", "obtener-preguntas", "verificar-datos", "felicitaciones"]

    const chequearSesion = () => {
        let pathnameSplitted = window.location.pathname.split("/")
        let currentUrl = pathnameSplitted[pathnameSplitted.length - 1]

        if (urlToCheckSesion.includes(currentUrl)) {
            console.log("CHEKEANDO SESION")

            RestClient.doPost("/onboardingPaquetes/api/venta/existeSesion")
                .then(response => {

                    let { isValid } = response.data
                    console.log(isValid)
                    if (isValid) {
                        console.log("SESION VALIDA")
                    } else {
                        throw new Error("session expirada, redirigiendo a la landing")
                    }
                })
                .catch(err => {
                    console.error(err)

                    dispatch(cambiarUrl({
                        urlNueva: "/welcome" //redirige a la session al no encontrar la URL
                    }))
                })

        } else {

        }
    }

    useEffect(() => {
        window.addEventListener("focus", chequearSesion)

        chequearSesion()
    }, []);

    const ultimaUrl = useSelector(state => state.navegacion.ultimaUrl)


    let functionDeControl = (urlNueva) => {
        function checkLastUrlVisited() {

            if (customURLSearchParams("checkLastUrlVisitedDisabled") !== null) {
                return true
            }

            let urlSplitted = window.location.pathname.split("/")
            let url = urlSplitted[urlSplitted.length - 1]

            //return urlNueva.includes(url)
            return true
        }
        return checkLastUrlVisited
    }

    return (
        <App>
            <Switch>
                <Route exact path="/buhobank/tarjetas" component={Welcome} />
                <Route exact path="/buhobank/tarjetas/datos-iniciales" component={DatosBasicos} />
                <Route exact path="/buhobank/tarjetas/pdp" component={() => <LinkFooter footerLink="pdp" />} />
                <Route exact path="/buhobank/rar" component={() => <LinkFooter footerLink="rar" />} />
                <Route exact path="/buhobank/ttyc" component={() => <LinkFooter footerLink="ttyc" />} />

                <ProtectedRouted exact functionDeControl={functionDeControl("/oferta-paquete")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/oferta-paquete"
                    component={Oferta} />

                <ProtectedRouted exact functionDeControl={functionDeControl("datos-personales")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/datos-personales"
                    component={DatosPersonales} />

                <ProtectedRouted exact functionDeControl={functionDeControl("/detect-device")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/detect-device"
                    component={DetectDevice} />

                <ProtectedRouted exact functionDeControl={functionDeControl("/validar-identidad")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/validar-identidad"
                    component={ValidarIdentidad} />

                <ProtectedRouted exact functionDeControl={functionDeControl("/obtener-preguntas")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/obtener-preguntas"
                    component={ObtenerPreguntas} />


                <ProtectedRouted exact functionDeControl={functionDeControl("/verificar-datos")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/verificar-datos"
                    component={PreguntasTyC} />

                <ProtectedRouted exact functionDeControl={functionDeControl("felicitaciones")}
                    urlRedirect={ultimaUrl} path="/buhobank/tarjetas/felicitaciones"
                    component={Felicitaciones} />

                <Route exact path="/buhobank/tarjetas/demasiados-intentos" component={DemasiadoIntentos} />

                <Route exact path="/buhobank/demasiados-intentos" component={DemasiadoIntentos} />
                <Route exact path="/demasiados-intentos" component={DemasiadoIntentos} />

                <Route exact path="/buhobank/tarjetas/error" component={ErrorGenerico} />
                <Route exact path="/buhobank/tarjetas/errorRechazado" component={ErrorRechazado} />
                <Route exact path="/buhobank/tarjetas/errorYaEsCliente" component={ErrorYaEsCliente} />
                <Route exact path="/buhobank/tarjetas/errorValidarIdentidad" component={ErrorValidarIdentidad} />
                <Route exact path="/buhobank/tarjetas/errorTiempo" component={ErrorBatchCorriendo} />

                <Route exact path="/" >
                    <Redirect to="/buhobank/tarjetas" />
                </Route>

                <Route>
                    <Redirect to="/buhobank/tarjetas" />
                </Route>

                {/*PRIMER JAVA 8*

                <Route exact path="/buhobank/tarjetas/reconocimiento-facial/:id" component={Paso0} />
                <Route exact path="/buhobank/tarjetas/paso-1" component={Paso1} />
                <Route exact path="/buhobank/tarjetas/paso-2" component={Paso2} />
                <Route exact path="/buhobank/tarjetas/paso-3" component={Paso3} />
                <Route exact path="/buhobank/tarjetas/paso-4" component={Paso4} />
                <Route exact path="/buhobank/tarjetas/paso-5" component={Paso5} />
                <Route exact path="/buhobank/tarjetas/paso-6" component={Paso6} />
                <Route exact path="/buhobank/tarjetas/paso-7" component={Paso7} />
                <Route exact path="/buhobank/tarjetas/paso-8" component={Paso8} />
                <Route exact path="/buhobank/tarjetas/tyc" component={Paso9} />
                <Route exact path="/buhobank/tarjetas/felicitaciones" component={Felicitaciones2} />
                <Route exact path="/buhobank/tarjetas/error-validacion-imagen" component={ErrorVU} />
                <Route exact path="/buhobank/tarjetas/error-dni" component={ErrorDNI} />
                <Route exact path="/buhobank/tarjetas/error-rostro" component={ErrorRostro} />
                <Route exact path="/buhobank/tarjetas/error-prueba-vida" component={ErrorPruebaVida} />
                <Route exact path="/buhobank/tarjetas/error-identidad" component={ErrorIdentidad} />
                <Route exact path="/buhobank/tarjetas/error-resolucion" component={ErrorVenta} />
                <Route exact path="/buhobank/tarjetas/sin-reintentos" component={SinReintentos} />
                <Route exact path="/buhobank/tarjetas/error-servicio" component={ErrorServicio} />
                 */}
            </Switch>
        </App>
    )
}

export default AppRoutes;