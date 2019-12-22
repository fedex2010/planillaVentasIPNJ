//Dependencies
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { isMobileOnly } from 'react-device-detect';

//material
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    letter: {
        fontFamily: "Roboto",
        fontSize: "10px",
        fontWeight: "400",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.33",
        letterSpacing: "normal",
        color: "#616161",
        textAlign: "justify",
        margin: "0 20px 0 20px"
    },
    urlHipo: {
        color: "#fd7e14",
        textDecoration: "none"
    }
}))

const Legales = (props) => {
    const classes = useStyles();


    let urlHipo = "https://www.hipotecario.com.ar";
    let urlAqui = "https://www.hipotecario.com.ar/personas/cuentas/";

    return (
        <div className={classes.letter}>
            PUBLICIDAD. CARTERA CONSUMO. OFERTA VÁLIDA HASTA EL 31-12-2019. LA PRESENTE NO
            IMPLICA OFERTA DE CRÉDITO NI ACEPTACIÓN DE LA SOLICITUD POR PARTE DE ESTE BANCO.
            CONSULTE CONDICIONES VIGENTES DE LOS PRODUCTOS AL MOMENTO DE CONTRATACIÓN.
            EL EFECTIVO OTORGAMIENTO DE CUALQUIER PAQUETE MULTIPRODUCTO Y LA TARJETA DE CRÉDITO
             SE ENCUENTRA SUJETO AL ANÁLISIS CREDITICIO Y APROBACIÓN PREVIA POR PARTE DE ESTE BANCO.
              EL LÍMITE DE COMPRA FUE ASIGNADO TENIENDO EN CUENTA RAZONES OBJETIVAS DE MERCADO.
              NO OBSTANTE, UD. PODRÁ SOLICITAR UNA REVISIÓN DEL MISMO PRESENTANDO DOCUMENTACIÓN DE
              INGRESOS. CONSULTE PROMOCIONES Y BENEFICIOS VIGENTES DE CADA PAQUETE MULTIPRODUCTO
               PREVIO A EFECTUAR LA COMPRA. EL BANCO PODRÁ DEJAR SIN EFECTO EN CUALQUIER MOMENTO,
                PREVIA NOTIFICACIÓN AL CLIENTE CON 60 DÍAS DE ANTICIPACIÓN, LAS BONIFICACIONES DE
                COMISIONES Y/O CARGOS Y/O BENEFICIOS MENCIONADOS EN LA PIEZA. EL PROGRAMA AEROLINEAS
                PLUS ES ORGANIZADO Y ADMINISTRADO POR AEROLINEAS ARGENTINAS S.A. EL PROGRAMA ESPACIO
                 DUEÑOS ES ORGANIZADO POR BANCO HIPOTECARIO S.A. CONSULTE TÉRMINOS Y CONDICIONES DE
                  AMBOS PROGRAMAS Y COMISIÓN DE MEMBRESÍA AA PLUS EN
            <a href={urlHipo} target="_blank" className={classes.urlHipo}> www.hipotecario.com.ar.</a>
            SI UD. CONTRATASE UN PAQUETE MULTIPRODUCTO BLACK PACK O EMPRENDEDOR BLACK PACK LA COMISIÓN
             DE MEMBRESÍA AA PLUS SERÁ BONIFICADA SIEMPRE QUE EL PAQUETE SE ENCUENTRE VIGENTE.
             LA COMISIÓN DE MANTENIMIENTO DE PAQUETE SERÁ BONIFICADA TEMPORALMENTE ÚNICAMENTE
              PARA NUEVOS CLIENTES QUE NO SEAN TITULARES DE PRODUCTOS DE ESTE BANCO AL MOMENTO DE
               LA CONTRATACIÓN DEL PACK EN ESTE SITIO. AQUELLOS CLIENTES QUE ACREDITEN SUELDO EN
               ESTE BANCO Y FUESEN TITULARES DE UN BLACK PACK , PLATINUM PACK , GOLD PACK O BUHO
               PACK SE LES BONIFICARÁ LA COMISIÓN SIEMPRE QUE EL PAQUETE SE ENCUENTRE VIGENTE.
                SI NO SE ACREDITAREN LOS HABERES EN LA CUENTA SUELDO POR UN PLAZO SUPERIOR A 90
                 DÍAS, CONTADOS DESDE LA ÚLTIMA ACREDITACIÓN, EL BANCO PERCIBIRÁ LAS COMISIONES,
                  CARGOS Y TASAS VIGENTES DEL PAQUETE MULTIPRODUCTO QUE CORRESPONDA. CUANDO EL
                  CLIENTE FUESE TITULAR DE UN EMPRENDEDOR PACK LA COMISIÓN DE MANTENIMIENTO DE
                  PAQUETE SERÁ BONIFICADA MIENTRAS ACREDITE SU ACTIVIDAD COMERCIAL MENSUALMENTE
                  EN ESTE BANCO. CONSULTE CONDICIONES, BENEFICIOS Y BONIFICACIONES VIGENTES DE
                  CADA PAQUETE MULTIPRODUCTO
                <a href={urlAqui} target="_blank" className={classes.urlHipo}> AQUÍ.</a>
        </div>
    )
};



export default Legales;