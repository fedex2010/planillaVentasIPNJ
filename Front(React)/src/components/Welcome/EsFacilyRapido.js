//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

//material
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import termImg from "../../images/welcome/terminos.png"
import cardImg from "../../images/welcome/tarjeta.png"
import faceImg from "../../images/welcome/face-recognition.png"

const useStyles = makeStyles(theme => ({
    mainContainer: {
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f2f1f1",
    },
    mainBox: {
        maxWidth: "1140px"
    },
    firstText: {
        marginTop: "50px",
        fontSize: "42px",
        fontStyle: "normal",
        fontStretch: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#4a4a4a",
        fontWeight: "300"
    },
    imagesBox:{
        paddingTop: "60px",
        paddingBottom: "120px",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px",
            paddingBottom: "80px"
        }
    },
    itemBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px",
            paddingBottom: "20px"
        }
    },
    textBox: {
        textAlign: "center",
        fontSize: "20px",
        color:" #333333",
        paddingRight: "15px",
        paddingLeft: "15px",
    },
    styleImg:{
        height : "104px",
        width: "89px",
        marginBottom: "20px"
    },
    tarjetaImg:{
        width: "144px"
    },
    adviceText : {
        fontSize: "16px",
        color: "#666666",
        marginTop: "10px",
        paddingRight: "15px",
        paddingLeft: "15px"
    }
}))

const EsFacilyRapido = ( ) => {
    const classes = useStyles();
    const classTarjImg = clsx(classes.styleImg, classes.tarjetaImg)

   return(
        <section className={classes.mainContainer}>
            <section className={classes.mainBox}>
                <p className={classes.firstText}>¡Es fácil y rápido!</p>
                <Grid container className={classes.imagesBox}>
                    <Grid item xs={12} md={4}>
                        <section className={classes.itemBox}>
                            <img className={classes.styleImg} src={termImg} />
                            <span className={classes.textBox}>
                                Con <strong>tus datos,</strong> te ofrecemos una <strong>Tarjeta a medida</strong>
                            </span>
                            
                        </section>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <section className={classes.itemBox}>
                            <img className={classes.styleImg} src={faceImg} />
                            <span className={classes.textBox}>
                                Te pedimos una <strong>una foto</strong> de tu  
                                <strong> documento</strong> y algunas <strong>selfies</strong>   
                            </span>
                            <span className={classes.adviceText}>
                                (Así, validamos tu identidad)
                            </span>
                        </section>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <section className={classes.itemBox}>
                            <img className={classTarjImg} src={cardImg} />
                            <span className={classes.textBox}>
                                <strong>Te enviamos</strong> las tarjetas, <strong>¡y listo!</strong>
                            </span>
                        </section>
                    </Grid>
                </Grid>
            </section>
        </section>
   ) 
};
    
export default EsFacilyRapido;