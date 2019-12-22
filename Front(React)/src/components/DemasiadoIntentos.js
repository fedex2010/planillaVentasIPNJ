//Dependencies
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

//material-ui
import { makeStyles } from '@material-ui/core/styles';
//utils
import { customURLSearchParams } from "../utils/UrlUtils";
import { cambiarUrl } from "../reducers/Navegacion/NavegacionActions"
import {obtenerPreguntas} from "../reducers/Preguntas/PreguntasActions"

import RestClient from '../utils/RestClient';

import $ from 'jquery';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        marginTop: "10px",
        marginBottom: "70px",
        textAlign: "center",
        width: theme.medidasSitio.mobileWidth,
        [theme.breakpoints.up('sm')]: {
            width: theme.medidasSitio.tabletWidth
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.medidasSitio.desktopWidth
        }
    }
}))
const DemasiadoIntentos = (items) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        let token = customURLSearchParams("id")

        $(".load").fadeIn(1400)

        RestClient.doPost("/onboardingPaquetes/api/venta/setRiesgoNetContextFromVuRedirect",{
            token
        })
            .then(response => {
                dispatch( obtenerPreguntas() )
            })
            .catch(error => {
                console.error(error)

                dispatch(cambiarUrl({
                    urlNueva: "/error"
                }))
            })
    }, []);

    return(

        <div className={classes.mainContainer}>  
            Redirigiendo a preguntas
        </div>
    )
}

export default DemasiadoIntentos