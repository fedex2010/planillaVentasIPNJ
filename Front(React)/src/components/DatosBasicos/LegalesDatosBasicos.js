//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        justifyContent: "left",
        flexDirection : "column",
        width: "100%",
        marginTop:20
    },

    mainBox: {
        maxWidth: "1140px",
        paddingTop: "20px"
    },
    cftText: {
        fontSize: "30px",
        lineHeight: "normal",
        color:" #999999"
    },
    legalesText: {
        color: "#717171",
        textAlign: "justify",
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 0,
        fontSize: 10
    },
    legalesLink:{
        color:"#f37320",
        textDecoration: "none"
    }
}))

const LegalesDatosBasicos = ( ) => {
    const classes = useStyles();

   return(
        <section className={classes.mainContainer}>
            <p className={classes.legalesText}>
            LA PRESENTE NO IMPLICA OFERTA DE CRÉDITO NI ACEPTACIÓN DE LA SOLICITUD POR PARTE 
            DE ESTE BANCO. CONSULTE CONDICIONES VIGENTES AL MOMENTO DE CONTRATACIÓN. EL 
            EFECTIVO OTORGAMIENTO DE LA TARJETA DE CRÉDITO SE ENCUENTRA SUJETO A LA APROBACIÓN 
            IA POR PARTE DE ESTE BANCO.(1) EL CARGO DE RENOVACIÓN ANUAL SERÁ BONIFICADO ÚNICAMENTE 
            PARA NUEVOS CLIENTES QUE NO SEAN TITULARES DE PRODUCTOS DE ESTE BANCO AL MOMENTO DE
            LA CONTRATACIÓN DEL PAQUETE MULTIPRODUCTO POR <a className={classes.legalesLink}>www.buhobank.com</a>.(2) PROGRAMA 
            AEROLÍNEAS PLUS ORGANIZADO Y ADMINISTRADO POR AEROLÍNEAS ARGENTINAS S.A. CARGO 
            MEMBRESÍA $2.097 + IVA. CONSULTE TÉRMINOS Y CONDICIONES EN  <a href="https://www.hipotecario.com.ar"  target="_blank" className={classes.legalesLink}>www.hipotecario.com.ar </a >
             O EN <a href="https://www.aerolineas.com.ar/es-ar"  target="_blank" className={classes.legalesLink}>www.aerolineasargentinas.com</a>. 
            BANCO HIPOTECARIO S.A. CUIT N°30-50001107/2 
            RECONQUISTA 151 (1003), CABA. 
            </p>
        </section>
   ) 
};
    
export default LegalesDatosBasicos;