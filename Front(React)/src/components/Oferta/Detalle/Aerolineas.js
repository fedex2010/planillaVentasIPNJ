//Dependencies
import React, { useState } from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { isMobileOnly, isMobile, isTablet } from 'react-device-detect';
import { useSelector, useDispatch } from 'react-redux'


//material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//util
import millasImage from '../../../images/ofertas/logo-aerolineas.png'
import aerolineasOff from '../../../images/ofertas/aerolineasOff.png'


const useStyles = makeStyles(theme => ({
    styleImageDesktop: {
        width: "97px",
        display: "block"
    },
    styleImageTablet: {
        width: "107px",
        display: "block"
    },
    styleImageMobile: {
        width: "88px",
        display: "block"
    },
    styleTarjeta: {
        color: "black"
    },
    styleTextCommon: {
        width: "248px",
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#999999"
    },
    styleTextMillasDesktop: {
        width: "375px",
        fontSize: "12px",
        margin: "5px 0px 0px 35px",
    },
    styleTextMillasTablet: {
        width: "450px",
        fontSize: "14px",
        margin: "0px 0px 0px 27px"

    },
    styleTextMillasMobile: {
        width: "320px",
        fontSize: "9px",
        margin: "0px 0px 0px 46px"
    },
    containerBorderBlackOneOffer: {
        height: "80px"
    },
    buhoPuntos: {
        height: "30px",
        marginTop: "0px",
        marginBottom: "0px"
    },
    radioStyle: {
        padding: "0px",
        margin: "13px 19px 0px 46px"
    },
    radioStyleTablet: {
        padding: "0px",
        margin: "13px 19px 0px 57px"

    },
    radioStyleMobile: {
        marginLeft: "45px"
    },
    bonificado: {
        fontSize: "12px",
        color: "#66b015"
    },
    bhoPuntos: {
        opacity: "0.15",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333333"
    },
    bonificadoTurnOff: {
        opacity: "0.3",
        fontSize: "12px",
        color: "#333333"
    },
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#fd7e14',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#fd7e14',
        },
    },
    bonificadoOff: {
        opacity: "0.15",
        fontSize: "12px",
        lineHeight: "2.2",
        color: "#333333"
    },
    bhPuntosOnn: {
        fontFamily: "Roboto",
        opacity: "1",
        fontSize: "14px",
        fontWight: "bold",
        lineHeight: "1.89",
        color: "#333333"
    },
    bhPuntosMobile: {
        //fontSize: "12px"
    },
    importe: {
        fontSize: "12px",
        color: "#333333"
    },
    importeOff: {
        opacity: "0.12",
        fontSize: "11px",
        color: "#333333"
    },
    generalContainerBorder: {
        borderRadius: "6px",
        border: "solid 1px #e2e2e2",
        height: "96px",
        width: "412px",
        marginLeft: "44px"
    },
    generalContainerBorderTablet: {
        width: "642px",
        marginLeft: "42px"
    },
    generalContainerBorderMobile: {
        maxWidth: "344px",
        marginLeft: "10px"
    },
    generalContainerBorderMobileMulti: {
        marginLeft: "17px"
    },
    generalContainerBorderBlack: {
        height: "58px"
    },
    marginContainerRadios: {
        marginLeft: "-25px"
    },
    marginContainerRadiosTablet: {
        marginLeft: "-36px"
    },
    marginRadioLabel: {
        margin: "8px 0px 0px 34px"
    },
    marginRadioLabelTablet: {
        margin: "8px 0px 0px 26px"
    },
    marginRadioLabelMobile: {
        margin: "8px 0px 0px 42px"
    },
    marginRadioLabelBlack: {
        margin: "-3px 0px 0px 36px"
    },
    bonificadoMargin: {
        marginLeft: "-12px",
        marginBottom: "-5px"
    },
    bonificadoMarginTablet: {
        marginLeft: "-44px"
    },
    bonificadoMarginMobile: {
        marginLeft: "-15px !important"
    },
    importeAerolinea: {
        marginTop: "3px"
    },

    marginBonPricAero: {
        marginLeft: "-30px"
    },
    marginBonPricBh: {
        marginLeft: "-53px"
    },
    marginDescBh: {
        marginTop: "-3px"
    },
    flyBlackDesktop: {
        margin: "0px 0px 10px 38px"
    },
    bhBonificadoMargin: {
        margin: "0px 0px 0px -10px"
    },
    bhBonificadoMarginTablet: {
        marginLeft: "14px"
    },
    '@media  screen and (max-width: 416px)': {
        generalContainerBorderMobile: {
            width: "100%",
            maxWidth: "390px",
        }
    },
    '@media  screen and (max-width: 376px)': {
        generalContainerBorderMobile: {
            width: "100%",
            maxWidth: "355px",
        }
    },
    '@media  screen and (max-width: 361px)': {
        generalContainerBorderMobile: {
            width: "100%",
            maxWidth: "340px !important",
        }
    },
    '@media  screen and (max-width: 321px)': {
        generalContainerBorderMobile: {
            width: "100%",
            maxWidth: "300px !important",
        },
        bonificadoMarginMobile: {
            marginLeft: "0px !important"
        },
        styleTextMillasMobile: {
            margin: "0px 0px 0px 42px",
            fontSize: "8px"
        }
    }
}))

function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={[classes.radioStyle, isTablet ? classes.radioStyleTablet : "", isMobileOnly ? classes.radioStyleMobile : ""].join(" ")}
            disableRipple
            color="primary"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const checkMultipleOffer = (oferta, namePack) => {
    if (oferta.includes(namePack))
        return true;
    return false;
}

const Aerolineas = (props) => {
    const classes = useStyles();
    let ofertaOptions = useSelector(state => state.oferta);

    const oferta = props.aerolineasDesc;
    const descriptionFlyBenefit = "Sumá millas con todas tus compras y canjealos por pasajes aéreos.";
    const descriptionBuhoFlyBenefit = "Sumá Búho Puntos con todas tus compras y canjealos por premios.";
    let aero = "aerolinea";
    
    !checkMultipleOffer(oferta, "BLACK") && !checkMultipleOffer(oferta, "PLATINUM") ?
        aero = "buhoPuntos"
        :
        aero = "aerolinea";

    let [radioValueSelected, setRadioValueSelected] = useState(aero);

    ofertaOptions[props.packageSelected].typeFly = radioValueSelected;

    const handleChange = ev => {
        setRadioValueSelected(radioValueSelected = ev.target.value);

        ofertaOptions[props.packageSelected].typeFly = radioValueSelected;
    };

    const precioAerolinea = "($3.101 + IVA)";

    let aerolineasRadioButtonOneOffer =
        <Grid item xs={12} container className={classes.styleTarjeta}>
            <Grid item xs={12} container>
                {
                    !checkMultipleOffer(oferta, "BLACK") ?
                        <Grid item xs={1}>
                            <FormControlLabel value="aerolinea" control={<StyledRadio />} />
                        </Grid>
                        :
                        null
                }
                <Grid item xs={11} container>
                    <Grid item xs={12} container className={[classes.marginRadioLabel, isTablet ? classes.marginRadioLabelTablet : "", isMobileOnly ? classes.marginRadioLabelMobile : "",
                    checkMultipleOffer(oferta, "BLACK") && !props.isMultipleOffer ? classes.marginRadioLabelBlack : ""].join(" ")} alignItems="center" direction="row">
                        <Grid item xs={5} sm={4} md={4}>
                            {
                                radioValueSelected == "aerolinea" ?
                                    <img src={millasImage} className={classes["styleImage" + props.screenSize]} />
                                    :
                                    <img src={aerolineasOff} className={classes["styleImage" + props.screenSize]} />
                            }
                        </Grid>
                        <Grid item xs={7} sm={8} md={8} className={isTablet ? classes.marginBonPricAero : " "}>
                            {

                                checkMultipleOffer(oferta, "BLACK") ?
                                    <p className={[radioValueSelected == "aerolinea" ? classes.bonificado : classes.bonificadoOff, classes.bonificadoMargin, isTablet ? classes.bonificadoMarginTablet : "", classes.importeAerolinea, isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>(Bonificado)</p>
                                    :
                                    <p className={[radioValueSelected == "aerolinea" ? classes.importe : classes.importeOff, classes.bonificadoMargin, isTablet ? classes.bonificadoMarginTablet : "", classes.importeAerolinea, isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>{precioAerolinea}</p>
                            }
                        </Grid>
                    </Grid>

                    {
                        radioValueSelected == "aerolinea" ?
                            <Grid item xs={12} >
                                <p className={[classes.styleTextCommon, classes["styleTextMillas" + props.screenSize],
                                checkMultipleOffer(oferta, "BLACK") && !props.isMultipleOffer ? classes.flyBlackDesktop : ""].join(" ")}>{descriptionFlyBenefit}</p>
                            </Grid>
                            :
                            null
                    }
                </Grid>

            </Grid>
        </Grid>

    let buhoPtosRaddioButtonOneOffer = <Grid item xs={12} container className={classes.styleTarjeta}>
        <Grid item xs={12} container>
            <Grid item xs={1}>
                <FormControlLabel value="buhoPuntos" control={<StyledRadio />} />
            </Grid>
            <Grid item xs={11} container>
                <Grid item xs={12} container className={[classes.marginRadioLabel, isTablet ? classes.marginRadioLabelTablet : "", isMobileOnly ? classes.marginRadioLabelMobile : ""].join(" ")} alignItems="center" direction="row">
                    <Grid item xs={5} sm={3} md={4} >
                        <span className={[classes.styleTextCommon, classes.bhoPuntos,
                        radioValueSelected != "aerolinea" ? classes.bhPuntosOnn : null,
                        isMobile ? classes.bhPuntosMobile : ""].join(" ")}>BÚHO PUNTOS</span>
                    </Grid>
                    <Grid item xs={7} sm={9} md={8} className={isTablet ? classes.marginBonPricBh : " "}>
                        <p className={[radioValueSelected != "aerolinea" ? classes.bonificado : classes.bonificadoOff, classes.bhBonificadoMargin, isTablet ? classes.bhBonificadoMarginTablet : "", isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>(Bonificado)</p>
                    </Grid>
                </Grid>
                {
                    radioValueSelected != "aerolinea" ?
                        <Grid item xs={12}>
                            <p className={[classes.styleTextCommon, classes["styleTextMillas" + props.screenSize], classes.marginDescBh].join(" ")}>{descriptionBuhoFlyBenefit}</p>
                        </Grid>
                        :
                        null
                }
            </Grid>
        </Grid>
    </Grid>

    /* Radios button para multioferta*/
    let aerolineasRadioButtonMultipleOffer =
        <Grid item xs={12} container className={classes.styleTarjeta}>
            <Grid item xs={12} container>
                <Grid item xs={1}>
                    <FormControlLabel value="aerolinea" control={<StyledRadio />} />
                </Grid>
                <Grid item xs={11} container>
                    <Grid item xs={12} container className={[classes.marginRadioLabel, isTablet ? classes.marginRadioLabelTablet : "", isMobileOnly ? classes.marginRadioLabelMobile : "",
                    checkMultipleOffer(oferta, "BLACK") && !props.isMultipleOffer ? classes.marginRadioLabelBlack : ""].join(" ")} alignItems="center" direction="row">
                        <Grid item xs={5} sm={4} md={4}>
                            {
                                radioValueSelected == "aerolinea" ?
                                    <img src={millasImage} className={classes["styleImage" + props.screenSize]} />
                                    :
                                    <img src={aerolineasOff} className={classes["styleImage" + props.screenSize]} />
                            }
                        </Grid>
                        <Grid item xs={7} sm={8} md={8} className={isTablet ? classes.marginBonPricAero : " "}>
                            {
                                checkMultipleOffer(oferta, "BLACK") ?
                                    <p className={[radioValueSelected == "aerolinea" ? classes.bonificado : classes.bonificadoOff, classes.bonificadoMargin, isTablet ? classes.bonificadoMarginTablet : "", classes.importeAerolinea, isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>(Bonificado)</p>
                                    :
                                    <p className={[radioValueSelected == "aerolinea" ? classes.importe : classes.importeOff, classes.bonificadoMargin, isTablet ? classes.bonificadoMarginTablet : "", classes.importeAerolinea, isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>{precioAerolinea}</p>
                            }
                        </Grid>
                    </Grid>
                    {
                        radioValueSelected == "aerolinea" ?
                            <Grid item xs={12} >
                                <p className={[classes.styleTextCommon, classes["styleTextMillas" + props.screenSize],
                                checkMultipleOffer(oferta, "BLACK") && !props.isMultipleOffer ? classes.flyBlackDesktop : ""].join(" ")}>{descriptionFlyBenefit}</p>
                            </Grid>
                            :
                            null
                    }
                </Grid>
            </Grid>
        </Grid>

    let buhoPtosRaddioButtonMultipleOffer = <Grid item xs={12} container className={classes.styleTarjeta}>
        <Grid item xs={12} container>
            <Grid item xs={1}>
                <FormControlLabel value="buhoPuntos" control={<StyledRadio />} />
            </Grid>
            <Grid item xs={11} container alignItems="flex-start">
                <Grid item xs={12} container className={[classes.marginRadioLabel, isTablet ? classes.marginRadioLabelTablet : "", isMobileOnly ? classes.marginRadioLabelMobile : ""].join(" ")} alignItems="center" direction="row">
                    <Grid item xs={5} sm={3} md={4} >
                        <span className={[classes.styleTextCommon, classes.bhoPuntos,
                        radioValueSelected != "aerolinea" ? classes.bhPuntosOnn : null,
                        isMobile ? classes.bhPuntosMobile : ""].join(" ")}>BÚHO PUNTOS</span>
                    </Grid>
                    <Grid item xs={7} sm={9} md={8} className={isTablet ? classes.marginBonPricBh : " "}>
                        <p className={[radioValueSelected != "aerolinea" ? classes.bonificado : classes.bonificadoOff, classes.bhBonificadoMargin, isTablet ? classes.bhBonificadoMarginTablet : "", isMobileOnly ? classes.bonificadoMarginMobile : ""].join(" ")}>(Bonificado)</p>
                    </Grid>
                </Grid>
                {
                    radioValueSelected != "aerolinea" ?
                        <Grid item xs={12}>
                            <p className={[classes.styleTextCommon, classes["styleTextMillas" + props.screenSize], classes.marginDescBh].join(" ")}>{descriptionBuhoFlyBenefit}</p>
                        </Grid>
                        :
                        null
                }

            </Grid>
        </Grid>
    </Grid>



    return (
        <div className={[classes.generalContainerBorder, isTablet ? classes.generalContainerBorderTablet : " ",
        isMobileOnly ? classes.generalContainerBorderMobile : " ", checkMultipleOffer(oferta, "BLACK") && !props.isMultipleOffer ? classes.generalContainerBorderBlack : "",
        isMobileOnly && props.isMultipleOffer ? classes.generalContainerBorderMobileMulti : " "].join(" ")}>

            {
                !props.isMultipleOffer ?
                    //radios button de oferta unica
                    <RadioGroup aria-label="recompensa" name="customized-radios" onChange={handleChange}
                        defaultValue={aero}>
                        <Grid container className={[classes.marginContainerRadios, checkMultipleOffer(oferta, "BLACK") ? classes.containerBorderBlackOneOffer : "",
                        isTablet ? classes.marginContainerRadiosTablet : ""].join(" ")}>
                            {
                                checkMultipleOffer(oferta, "BLACK") || checkMultipleOffer(oferta, "PLATINUM") ?
                                    aerolineasRadioButtonOneOffer
                                    :
                                    !checkMultipleOffer(oferta, "BLACK") ?
                                        buhoPtosRaddioButtonOneOffer
                                        :
                                        null
                            }
                            {
                                checkMultipleOffer(oferta, "BLACK") ?
                                    null
                                    :
                                    checkMultipleOffer(oferta, "PLATINUM") ?
                                        buhoPtosRaddioButtonOneOffer
                                        :
                                        aerolineasRadioButtonOneOffer
                            }
                        </Grid>
                    </RadioGroup>
                    :
                    //radios button de oferta multiple
                    <RadioGroup aria-label="recompensa" name="customized-radios"
                        defaultValue={aero} onChange={handleChange} >
                        <Grid container className={[classes.marginContainerRadios,
                        isTablet ? classes.marginContainerRadiosTablet : ""].join(" ")}>

                            {
                                !checkMultipleOffer(oferta, "BLACK") && !checkMultipleOffer(oferta, "PLATINUM") ?
                                    [
                                        buhoPtosRaddioButtonMultipleOffer,
                                        aerolineasRadioButtonMultipleOffer
                                    ]
                                    :
                                    [
                                        aerolineasRadioButtonMultipleOffer,
                                        buhoPtosRaddioButtonMultipleOffer

                                    ]
                            }


                        </Grid>
                    </RadioGroup>
            }
        </div>
    )
};

export default Aerolineas;