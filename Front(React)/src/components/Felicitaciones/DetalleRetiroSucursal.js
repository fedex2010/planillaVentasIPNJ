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
import BuhoBankButton from "../Common/BuhoBankButton"
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
        flexDirection: "column"
    },
    documentacionRow:{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    itemImageBox:{
        width:50
    },
    anteCualquierDuda:{

    }
}))

const DetalleRetiroSucursal = ( ) => {
    const classes = useStyles();
    const formaDeEntrega = useSelector(state => state.formaDeEntrega)
    return(
        <section className={classes.mainContainer}>
            <section className={classes.sectionData}>
                <span>En los proximos dias recibiras un mail confirmando que tu</span>
                <span>producto esta en la sucursal que indicaste</span>
                
                <span>{formaDeEntrega.sucursal.domicilio}</span>
                
                <span>Recorda que deber presentar la siguiente documentacion</span>
                <section className={classes.documentacionBox}>
                    <section className={classes.documentacionRow}>
                        <img src={corazonImg} className={classes.itemImageBox}/>
                        <span>DNI</span>
                    </section>
                    <section className={classes.documentacionRow}>
                        <img src={corazonImg} className={classes.itemImageBox}/>
                        <span>Un servicio a tu nombre del ultimo periodo facturado</span>
                    </section>
                </section>
                <span className={classes.anteCualquierDuda}>
                    Ante cualquier duda podes comunicarte al 0810-222-777
                </span>
            </section>
        </section>
    ) 
};
    
export default DetalleRetiroSucursal;