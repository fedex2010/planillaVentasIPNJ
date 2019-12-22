//Dependencies
import React, {useEffect} from 'react';
//material-ui
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import nube from '../images/error/cloud-computing.svg'
import BuhoBankButton from '../components/Common/BuhoBankButton';

import { cambiarUrl } from "../reducers/Navegacion/NavegacionActions"

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
    },
    root: {
        flexGrow: 1,
    },
    logoBh: {
        float: "left",
        marginTop: "27px",
        marginLeft: "27px",
    },
    containerData:{
        width : 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
        
    },
    mainText: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "bold",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#606162",
        textAlign:"center",
        marginBottom:5
    },
    secondaryText: {
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: 1.2,
        letterSpacing: "normal",
        textAlign: "center",
        color: "#929292",
        marginTop: 15,
        marginBottom: 50
    },
    nube:{
        marginTop:33,
        marginBottom:48
    },
    //DESKTOP
    '@media  screen and (min-width: 787px)': {
        containerData:{
            width : 360
        },
        mainText: {
            width: "394px",
            height: "30px",
            marginBottom: 40
        },
        secondaryText:{
            marginBottom: 50,
            width: 300
        }
    }
}))
const ErrorRechazado = (items) => {
    const classes = useStyles();

    const dispatch = useDispatch()

    let buttonStyle = {
        backgroundColor: "white",
        color: "#fd7e14",
        marginTop: 20,
        transition: ".3s ease-out",
        letterSpacing: ".5px",
        fontSize: "10px !important",
        outline: 0,
        borderRadius: "20px !important",
        fontWeight: "normal",
        boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0), 0 3px 1px -2px rgba(0, 0, 0, 0)",
        padding: "0 2rem"
    }

    useEffect(() => {
        $(".load").fadeOut(1400)
    }, []);

    const irInicio = () => {

        $(".load").fadeIn(1400 , () => {
            dispatch( cambiarUrl({
                urlNueva: "/fjdsklfds"  
            }))
        });    
        
    }
    const verSucursales = () => {

        $(".load").fadeIn(1400 , () => {
            window.location.href = "https://www.hipotecario.com.ar/personas/sucursales-y-cajeros/"
        });    
        
    }

    return(

        <div className={classes.mainContainer}>  
            <section className={classes.containerData}>  
                <img src={nube} className={classes.nube}/>
                
                <section className={classes.mainText} >Por el momento no podemos darte una oferta por este canal</section>
                
                <section className={classes.secondaryText}>Por favor, acercate a una sucursal para continuar el proceso.</section>

                <BuhoBankButton onClick={ verSucursales } text="ver sucursales" />
            </section>
        </div>
    )
}

export default ErrorRechazado