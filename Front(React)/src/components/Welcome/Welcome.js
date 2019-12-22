
//Dependencies
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
//reducers
import { cambiarUrl, enviarUtmVars } from "../../reducers/Navegacion/NavegacionActions"
//components
import MainImage from "./MainImage"
import Ofertas from "./Ofertas"
import EsFacilyRapido from "./EsFacilyRapido"
import Preguntas from "./Preguntas"
import Legales from "./Legales"
import BuhoBankButton from "../Common/BuhoBankButton"
//utils
import { customURLSearchParams } from "../../utils/UrlUtils";

import { isMobile } from 'react-device-detect';
import $ from 'jquery';

import {
    resetApp
} from "../../reducers/Common/CommonActions"


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    buttonBox:{
        backgroundColor:"white",
        textAlign:"center"
    }
}))

const Welcome = ( ) => {
    const dispatch = useDispatch()

    const handleClick = () => {

        $(".load").fadeIn(1400 , () => {
            dispatch( cambiarUrl({
                urlNueva: "/datos-iniciales"  
            }))
        });    
        
    }

    useEffect(() => {
    
        setTimeout(() => { 
            dispatch( enviarUtmVars({
                utm_source: customURLSearchParams("utm_source"),
                utm_medium: customURLSearchParams("utm_medium"),
                utm_campaign: customURLSearchParams("utm_campaign"),
                utm_content: customURLSearchParams("utm_content"),
                isMobile
            }))
            .then(response => {
                $(".load").fadeOut(1400)
            })
            .catch( error => {
                //esta corriendo el batch
                try{
                    //ARMAR SELECTOR
                    if(error.response.status === 403){
                        window.location.href = error.response.data.urlBatch
                    }    
                    $(".load").fadeOut(1400)
                }catch(err){
                    $(".load").fadeOut(1400)
                    console.log(err)
                }
            })
        }, 500);

        dispatch( resetApp() )
        
    }, []);

    const classes = useStyles();
    let buttonStyle = {  marginTop: "-1.5em"  }

    return(
        <section className={classes.mainContainer}>
            <MainImage />

            <div className={classes.buttonBox}>
                <BuhoBankButton onClick={ handleClick } text="¡quiero mi tarjeta!" buttonStyle={buttonStyle} />
            </div>

            <Ofertas />

            <EsFacilyRapido/>

            <div className={classes.buttonBox}>
                <BuhoBankButton onClick={ handleClick }  text="¡quiero mi tarjeta!" buttonStyle={buttonStyle} />
            </div>
            
            <Preguntas/>
            
            <Legales />
        </section>
   ) 
};
    
export default Welcome;
