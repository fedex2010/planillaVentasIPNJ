//Dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery';

//material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Fab';
import { isMobileOnly } from 'react-device-detect';

//actions
import {
    setDataOferta,
    persistirDataOferta
} from "../../../reducers/Oferta/OfertaActions"


const useStyles = makeStyles(theme => ({
    fab: {
        backgroundColor: "#fd7e14",
        fontWeight: 500,
        padding: "10px",
        color: "white",
        textTransform: "uppercase",
        // height: "48.4px",
        //width: "100%",
        borderRadius: "0px",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: "500",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.41",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#ffffff",
        boxShadow: "none",
        width: "199px",
        height: "44px"
    },
    mobileSize: {
        width: "100%"
    },
    mobileButtonSize: {
        borderRadius: "23.1px"
    },
    noMobileSize: {
        width: "50% !important",
        display: "inline-block"
    },
    tabletSizeButton: {
        width: "60% !important",
        display: "inline-block"
    }
}))

const SubmitButton = (props) => {
    const classes = useStyles();
    let oferta = useSelector(state => state.oferta);
    const dispatch = useDispatch();

    const submit = () => {
        let objSend = {
            ctaCte: oferta[props.packageSelected].ctaCte,
            flyType: oferta[props.packageSelected].typeFly,
            packageId: oferta[props.packageSelected].paqueteDTO.codigo
        };

        dispatch(setDataOferta(objSend))

        $(".load").fadeIn(700 , () => {
            dispatch(persistirDataOferta())
        });   
        
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} container alignItems="center" justify="center"
                    direction="row">
                    <Button className={[classes.fab + " " + (!props.isMobile ? classes.mobileButtonSize : ""), isMobileOnly ? classes.mobileSize : " "].join(" ")}
                        onClick={submit}>
                        ¡QUIERO MI PACK!
                    </Button>
                </Grid>
            </Grid>

        </div>
    )
};

export default SubmitButton;