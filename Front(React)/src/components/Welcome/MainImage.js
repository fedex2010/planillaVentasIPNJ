//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

//material
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

//imagenes
import selfieImg from '../../images/welcome/selfie.png'
import selfieMobile from '../../images/welcome/selfieMobile.png'
import logoHipotecarioImg from '../../images/logoHipotecario.png'
import logoWhiteImg from '../../images/logo-white.png'
import buhoCardImg from '../../images/welcome/buhoCard.png'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "relative"
    },
    detailBoxDesktop: {
        padding: "30px 80px 30px 80px",
        backgroundImage: "url(" + selfieImg + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 486,
        position: "relative",
        display: "flex",
        flexDirection: "column"
    },
    baseTextStyle: {
        fontFamily: "Times new roman"
    },
    logoHipotecarioImg: {
        width: 140,
        marginBottom: 20,
        [theme.breakpoints.up('lg')]: {
            marginBottom: 35
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: "22px"
        }
    },
    mainText: {
        fontFamily: "DIN-Condensed-Bold",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "condensed",
        lineHeight: "40px",
        letterSpacing: "normal",
        color: "#4a4a4a",
        textTransform: "uppercase"

    },
    mainSelfieText: {
        fontSize: 51,/*sm en adelante*/
        [theme.breakpoints.up('lg')]: {
            fontSize: 69
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 78
        }
    },
    secondMainSelfieText: {
        marginBottom: 10,
        fontSize: 35,/*sm en adelante*/
        [theme.breakpoints.up('lg')]: {
            fontSize: 47,
            marginTop: 15,
            marginBottom: 20
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 54,
            marginTop: 20,
            marginBottom: 25
        }
    },
    benefits: {
        fontSize: 22,/*sm en adelante*/
        lineHeight: "normal",
        [theme.breakpoints.up('lg')]: {
            fontSize: 30,
            lineHeight: "normal"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 34
        },
        letterSpacing: "0.5px",
        padding: "0px"
    },
    details: {
        marginTop: 8,
        [theme.breakpoints.up('lg')]: {
            marginTop: 15,
            lineHeight: "normal"
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 34
        },
        "& span": {
            display: "block",
            marginBottom: "15px",
            fontSize: "12px",
            [theme.breakpoints.up('lg')]: {
                fontSize: "15px"
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: "22px"
            },
            fontWeight: "normal",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#4a4a4a"
        }
    },
    leftCardImage: {
        position: "absolute",
        bottom: 140,
        left: 0,
        width: 209,
        [theme.breakpoints.up('lg')]: {
            width: 249,
            bottom: 80,
            left: -30
        },
        [theme.breakpoints.up('xl')]: {
            width: 278,
            left: 0,
            bottom: 40
        }
    },
    rightContainer: {
        marginLeft: "120px",
        [theme.breakpoints.up('xl')]: {
            marginLeft: "190px"
        },
        display: "flex",
        flexDirection: "column"
    },
    detailBoxMobile: {
        backgroundImage: "url(" + selfieMobile + ")",
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: 593,
        color: "white",
        paddingLeft: 20,
        paddingTop: 35,
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    mainTetxMobile: {
        fontSize: "45px",
        textAlign: "left",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "condensed",
        lineHeight: "50px",
        letterSpacing: "normal",
        fontFamily: "DIN-Condensed-Bold",
        textTransform: "uppercase"
    },
    tenerTarjetaTetxMobile: {
        fontSize: "38px",
    },
    beneficiosExclusivosMobile: {
        fontSize: "26px",
        textAlign: "left",
        color: "white",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "condensed",
        lineHeight: "normal",
        letterSpacing: "0.5px",
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "DIN-Condensed-Bold",
        textTransform: "uppercase",
        marginTop: 15,
        marginLeft: 0
    },
    detalleTarjetaMobile: {
        display: "flex",
        flexDirection: "row"
    },
    logoWhiteImg: {
        width: 80,
        height: 30,
        marginBottom: 20
    },
    beneficiosMobile: {
        paddingLeft: 0,
        listStyle: "none",

        "& li": {
            marginBottom: 13,
            fontFamily: "RobotoBH",
            fontSize: 15,
            textAlign: "left",
            color: "white",
            fontWeight: "normal",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: "normal",
            letterSpacing: "normal"
        }
    },
    buhoCardImgMobile: {
        width: 100,
        height: 95
    },
    showMobile: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    showDesktop: {
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    selfieDesktop: {
        width: "100%",
        height: 486
    },
    itemInline: {
        display: "inline-block !important"
    },
    containerFirsItem: {
        height: "30px"
    }
}))

const MainImage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();
    const tenerTarjetaMobile = clsx(classes.mainTetxMobile, classes.tenerTarjetaTetxMobile)
    const selfieDesktop = clsx(classes.selfieDesktop)

    const mainSelfieText = clsx(classes.mainText, classes.mainSelfieText)
    const secondMainSelfieText = clsx(classes.mainText, classes.secondMainSelfieText)
    const benefits = clsx(classes.mainText, classes.benefits)
    const detailBoxDesktop = clsx(classes.detailBoxDesktop, classes.showDesktop)

    
    return (
        <section className={classes.mainContainer}>
            <section className={classes.detailBoxMobile}>
                <img src={logoWhiteImg} className={classes.logoWhiteImg} />
                <span className={classes.mainTetxMobile}>¡Estás a una selfie</span>
                <span className={tenerTarjetaMobile}> de tener tu tarjeta!</span>
                <span className={classes.beneficiosExclusivosMobile}>Con beneficios exclusivos  <br /> para tu hogar</span>
                <section className={classes.detalleTarjetaMobile}>
                    <img src={buhoCardImg} className={classes.buhoCardImgMobile} />
                    <ul className={classes.beneficiosMobile}>
                        <li>
                            <FontAwesomeIcon icon={faCheck} size="xs" />
                            <strong>100% online</strong> sin firmas ni papeles.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} size="xs" />
                            <strong>Probala sin cargo</strong> durante un año.
                        </li>
                    </ul>
                </section>
            </section>

            <section className={detailBoxDesktop}>
                <img className={classes.logoHipotecarioImg} src={logoHipotecarioImg} />
                <span className={mainSelfieText}>¡Estas a una selfie</span>

                <img className={classes.leftCardImage} src={buhoCardImg} />

                <section className={classes.rightContainer}>
                    <span className={secondMainSelfieText}>de tener tu tarjeta!</span>
                    <span className={benefits}>con beneficios exclusivos</span>
                    <span className={benefits}>para tu hogar</span>
                    <section className={classes.details}>
                        <div className={classes.containerFirsItem}>
                            <FontAwesomeIcon icon={faCheck} size="xs" />
                            <span className={classes.itemInline}>
                                <strong>100% online</strong> sin firmas ni papeles.
		                </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} size="xs" />
                            <span className={classes.itemInline}>
                                <strong>Probala sin cargo</strong> durante un año.
		                </span>
                        </div>

                    </section>
                </section>
            </section>
        </section>
    )
};

export default MainImage;
