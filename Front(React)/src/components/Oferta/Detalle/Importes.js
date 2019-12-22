//Dependencies
import React, { useState } from 'react';
import { isTablet, isMobile, isMobileOnly } from 'react-device-detect';


//material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
    ao: {
        width: "100%",
        height: "35px",
        fontSize: "30px",
        lineHeight: "normal",
        color: "#616161"
    },
    mantenimiento: {
        width: "128px",
        height: "27px",
        fontSize: "12px",
        lineHeight: "1.32",
        color: "#999999"
    },
    commonStyle: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        textAlign: "center",
        letterSpacing: "normal"
    },
    noMargin: {
        margin: "0px"
    },
    marginContainer: {
        margin: "31px 0px 22px 0px"
    },

    marginContainerMultiTablet: {
        margin: "36px 147px 24px 0px"
    },

    marginContainerMultiCell: {
        margin: "14px 70px 22px 70px"
    },


    mobileSize: {
        width: "100%"
    },
    noMobileSize: {
        width: "50% !important",
        display: "inline-block"
    },
    packDesktop: {
        fontSize: "30px"
    },
    packTablet: {
        fontSize: "32px"
    },
    packMobile: {
        fontSize: "30px"
    },
    emprendedorImporte: {
        textAlign: "center",
        width: "80% !important",
        marginLeft: "10%"
    },
    lineSeparator: {
        width: "1px",
        height: "62px",
        borderRight: "solid 1.1px #e2e2e2"
    },
    borderPrice: {
        width: "80px",
        borderTop: "3px solid black",
        marginTop: "-85px"
    },

    yearPadding: {
        paddingLeft: "113px !important"
    },
    montoPadding: {
        paddingRight: "113px !important"
    },



    marginContainerOneDesktop: {
        margin: "53px 0px 0px 0px"
    },


    marginContainerCell: {
        margin: "54px 0px 22px 0px"
    }

}))

const Importes = (props) => {
    const classes = useStyles();

    return (<div className={[classes.marginContainer, isTablet && props.isMultipleOffer ? classes.marginContainerMultiTablet : " ",
    isMobileOnly && props.isMultipleOffer ? classes.marginContainerMultiCell : "",
    !isMobile && !props.isMultipleOffer ? classes.marginContainerOneDesktop : " ",
     isMobileOnly && !props.isMultipleOffer ? classes.marginContainerCell : " "].join(" ")}>
        {
            // unica oferta
            !props.isMultipleOffer ?
                <Grid container xs={12} alignItems={isMobileOnly ? "center" : " "} justify={isMobileOnly ? "center" : " "}
                direction="row">
                    <Grid item xs={5} sm={4} md={3} container alignItems="center" justify="center"
                        direction="row">
                        <p className={[classes.ao, classes.commonStyle, classes.noMargin,
                        classes["pack" + props.screenSize]].join(" ")}>1 año</p>
                        <p className={[classes.mantenimiento, classes.commonStyle, classes.noMargin].join(" ")}> Mantenimiento bonificado</p>
                    </Grid>

                    <div className={classes.lineSeparator} />

                    <Grid item xs={5} sm={4} md={3} container alignItems="center" justify="center"
                        direction="row">
                        <p className={[classes.ao, classes.commonStyle, classes.noMargin,
                        classes["pack" + props.screenSize]].join(" ")}>${props.cost}</p>
                        <p className={[classes.mantenimiento, classes.commonStyle, classes.noMargin].join(" ")}> Mantenimiento mensual</p>
                        <div className={classes.borderPrice} />
                    </Grid>
                </Grid>

                :
                <Grid container xs={12} alignItems="center" justify="center"
                    direction="row">
                    <Grid item xs={5} container alignItems="center" justify="center"
                        direction="row" className={[props.isMultipleOffer && !isMobile ? classes.yearPadding : " "].join(" ")}>
                        <p className={[classes.ao, classes.commonStyle, classes.noMargin,
                        classes["pack" + props.screenSize]].join(" ")}>1 año</p>
                        <p className={[classes.mantenimiento, classes.commonStyle, classes.noMargin].join(" ")}> Mantenimiento bonificado</p>

                    </Grid>
                    <Grid item xs={2} container alignItems="center" justify="center">
                        <div className={classes.lineSeparator} />
                    </Grid>
                    <Grid item xs={5} container alignItems="center" justify="center"
                        direction="row" className={[props.isMultipleOffer && !isMobile ? classes.montoPadding : " "].join(" ")}>
                        <p className={[classes.ao, classes.commonStyle, classes.noMargin,
                        classes["pack" + props.screenSize]].join(" ")}>${props.cost}</p>
                        <p className={[classes.mantenimiento, classes.commonStyle, classes.noMargin].join(" ")}> Mantenimiento mensual</p>
                        <div className={classes.borderPrice} />
                    </Grid>
                </Grid>

        }
    </div>)
};

export default Importes;