//Dependencies
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { isMobileOnly } from 'react-device-detect';

//material
import Grid from '@material-ui/core/Grid';
//components
import mobileImg from "../../images/detect-device/mobile.png"
import computerImg from "../../images/detect-device/computer.png"
import BuhoBankButton from "../Common/BuhoBankButton"

import $ from 'jquery';

//action
import {
    guardarBifurcacion
} from "../../reducers/Bifurcacion/BifurcacionActions"
import {
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    commonLetter: {
        fontFamily: "roboto, sans-serif"
    },
    container: {
        marginTop: 25
    },
    dataBox: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#4a4a4a",
        textAlign: "center"
    },
    titleSection: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#606162",
        textAlign: "center",
        fontSize: "1.5rem",
        lineHeight: "110%",
        margin: "20px 0px 20px 0px"
    },
    mobileImg: {
        width: 91,
        height: 130,
        marginBottom: "20px"
    },
    computerImg: {
        width: 120,
        height: 120,
        marginBottom: "20px"
    },
    listItem: {
        width: "100%"
    },
    listText: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#606162",
        fontFamily: "Roboto, sansa-serif"
    },
    sizeItem: {
        lineHeight: "35px"
    },
    containerImage: {
        height: "130px"
    },
    bullet: {
        backgroundColor: "black",
        borderRadius: "50%",
        width: "5px",
        height: "5px",
        marginTop: "14px"
    },
    adjustTop: {
        marginTop: "8px"
    },
    positionGrid: {
        minHeight: "420px",
        position: "relative"
    },
    positionButton: {
        position: "absolute",
        bottom: "0px"
    },
    spaceGrid: {
        marginTop: "30px"
    }
}))

const DetectDevice = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( hideLoading() )   
    }, []);

    const bifurcarMail = () => {
        $(".load").fadeIn(700, () => {
            dispatch(guardarBifurcacion("MAIL"))
        });
    }

    const bifurcarPreguntas = () => {
        $(".load").fadeIn(700, () => {
            dispatch(guardarBifurcacion("PREGUNTAS"))
        });
    }

    let ancho;
    isMobileOnly ? ancho = "100%" : ancho = "50%";
    console.dir(ancho)

    const buttonContinue = {
        width: isMobileOnly ?"100%" : "50%",
        padding: "5px 25px 5px 25px",
        height: "46px",
        verticalAlign: "middle",
        fontFamily: "Roboto, sans-serif",
        fontSize: "15px",
        fontWeight: "400",
        boxShadow: "none",
        backgroundColor: "#f47321"
    }

    return (
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <span className={[classes.mainText, classes.commonLetter].join(" ")}>
                    Necesitamos validar tu identidad,
                </span>
                <span className={[classes.mainText, classes.commonLetter].join(" ")}>
                    ¿Cómo querés que lo hagamos?
                </span>
                <Grid container className={classes.container}>
                    <Grid item xs={12} md={6} className={classes.positionGrid}>
                        <Grid item container justify="center" xs={12} className={classes.containerImage}>
                            <img src={mobileImg} className={classes.mobileImg} />
                        </Grid>
                        <Grid item container justify="center" xs={12} alignItems="center" className={[classes.titleSection, classes.commonLetter].join(" ")}>
                            <Grid item xs={12}>
                                <span>
                                    Con el DNI y la cámara
                            </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span>
                                    del celular
                                </span>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" xs={12} className={[classes.listText].join(" ")}>
                            <Grid item xs={1} sm={3} md={2} lg={3} />
                            <Grid item container justify="center" xs={2} sm={1} md={2} lg={1}>
                                <div class={[classes.bullet, classes.adjustTop].join(" ")} />
                            </Grid>
                            <Grid container item xs={9} sm={8} md={8} lg={8}>
                                <span>Sin bajar una aplicación</span>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" xs={12} className={[classes.listText, classes.sizeItem].join(" ")}>
                            <Grid item xs={1} sm={3} md={2} lg={3} />
                            <Grid item container justify="center" xs={2} sm={1} md={2} lg={1}>
                                <div class={classes.bullet} />
                            </Grid>
                            <Grid container item xs={9} sm={8} md={8} lg={8}>
                                <span>Sin firmas ni papeles</span>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" xs={12} className={classes.listText}>
                            <Grid item xs={1} sm={3} md={2} lg={3} />
                            <Grid item container justify="center" xs={2} sm={1} md={2} lg={1}>
                                <div class={[classes.bullet, classes.adjustTop].join(" ")} />
                            </Grid>
                            <Grid container item xs={9} sm={8} md={8} lg={8}>
                                <span><strong>Cualquier mayor de 18 años</strong> <br /> podrá recibir las tarjetas.</span>
                            </Grid>
                        </Grid>

                        <Grid item container justify="center" xs={12} className={classes.positionButton}>
                            <BuhoBankButton onClick={bifurcarMail} text={"continuar"} buttonStyle={buttonContinue} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6} className={[classes.positionGrid, isMobileOnly ? classes.spaceGrid : ""].join(" ")}>
                        <Grid item container justify="center" xs={12} className={classes.containerImage}>
                            <img src={computerImg} className={classes.computerImg} />
                        </Grid>
                        <Grid item container justify="center" xs={12} alignItems="center" className={[classes.titleSection, classes.commonLetter].join(" ")}>
                            <Grid item xs={12}>
                                <span>
                                    Respondiendo
                                </span>
                            </Grid>
                            <Grid item xs={12}>
                                <span>
                                    preguntas personales
                                 </span>
                            </Grid>
                        </Grid>
                        <Grid item container justify="center" xs={12} className={classes.listText}>
                            <Grid item xs={1} sm={3} md={2} lg={3} />
                            <Grid item container justify="center" xs={2} sm={1} md={2} lg={1}>
                                <div class={[classes.bullet, classes.adjustTop].join(" ")} />
                            </Grid>
                            <Grid container item xs={7} sm={7} md={6} lg={6}>
                                <strong>Cuando recibas las tarjetas te pedirán una firma y una fotocopia del DNI.</strong>
                            </Grid>
                            <Grid item xs={2} sm={1} md={2} lg={2} />
                        </Grid>


                        <Grid item container justify="center" xs={12} className={[classes.listText, classes.adjustTop].join(" ")}>
                            <Grid item xs={1} sm={3} md={2} lg={3} />
                            <Grid item container justify="center" xs={2} sm={1} md={2} lg={1}>
                                <div class={[classes.bullet, classes.adjustTop].join(" ")} />
                            </Grid>
                            <Grid container item xs={9} sm={8} md={8} lg={8}>
                                <span><strong>Solamente vos</strong>  podrás recibir las tarjetas.</span>
                            </Grid>
                        </Grid>

                        <Grid item container justify="center" xs={12} className={classes.positionButton}>
                            <BuhoBankButton onClick={bifurcarPreguntas} text={"continuar"} buttonStyle={buttonContinue} />
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        </section>
    )
};

export default DetectDevice;