//Dependencies
import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch,useSelector } from 'react-redux'
//material
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//reducers
import { cambiarUrl, enviarUtmVars } from "../../reducers/Navegacion/NavegacionActions"
//components
//imagenes
import parejaImg from "../../images/felicitaciones/pareja.jpg"
import corazonImg from "../../images/datos-personales/corazon.png"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    dataContainer:{
        width:"75%"
    },
    imageBox:{
        width:"100%"
    },
    sectionData:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    documentacionBox:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    documentacionRow:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    itemImageBox:{
        width:50
    }
}))

const DetalleEnvioDomicilio = ( ) => {
    const classes = useStyles();
    const formaDeEntrega = useSelector(state => state.formaDeEntrega.formaDeEntrega)

    return(
        <section className={classes.mainContainer}>
            <span>Dentro de un plazo de 15 dias habiles personal de Correo</span>
            <span>Andreani autorizado a tal fin te entregara la Tarjeta Visa en tu</span>
            <span>domicilio</span>
            <span>BARRA</span>
            <span>Recorda que deber presentar la siguiente documentacion</span>
            <section className={classes.documentacionBox}>
                <section className={classes.documentacionRow}>
                    <img src={corazonImg} className={classes.itemImageBox}/>
                    <span>La tarjeta debera ser recibida unica y exclusivamente por el titular.
                        De no encontrarse Andreani realizará dos visitas mas
                    </span>
                </section>
            </section>
        </section>
    ) 
};
    
export default DetalleEnvioDomicilio;