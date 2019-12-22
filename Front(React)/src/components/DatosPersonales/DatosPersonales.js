//Dependencies
import React, { useRef, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isMobile } from 'react-device-detect';
//material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
//componentes
import InformacionObligatoria from "./InformacionObligatoria"
import InformacionPersonal from "./InformacionPersonal"
import Domicilio from "./Domicilio"
import FormaDeEntrega from "./FormaDeEntrega"

import $ from 'jquery';

//actions
import {
    notificarErrorSO_PEP_CU,
    guardarDatosPersonales,
    guardarDatosDomicilio,
    enviarDatosPersonales,
    setIsExtranjero
} from "../../reducers/DatosPersonales/DatosPersonalesActions"

import {
    updateHash
} from "../../reducers/Navegacion/NavegacionActions"


import {
    showLoading,
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"

import { SnackBarContext } from "../SnackBarContext";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 40,
        width: theme.medidasSitio.mobileWidth,
        [theme.breakpoints.up('sm')]: {
            width: theme.medidasSitio.tabletWidth,
            margin: "0 auto",
            marginTop: 20,
            marginBottom: 40
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.medidasSitio.desktopWidth
        }
    },
    stepperContainer: {
        marginTop: 10,
        width: "95%",
        [theme.breakpoints.up('sm')]: {
            marginTop: 10
        },
    },
    stepperDesktopContainer: {
        width: "90%",
        margin: "0 auto"
    },
    buttonBox: {
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    backButton: {
        marginRight: 20
    }
}))



const DatosPersonales = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        activeStep: 0,
        wasError: false,
        formSubmitted: false
    });

    const informacionObligatoria = useSelector(state => state.informacionObligatoria);
    const datosBasicos = useSelector(state => state.datosBasicos);



    useEffect(() => {
        dispatch(setIsExtranjero(datosBasicos.dni));
        $(".load").fadeOut(700);
    }, []);

    useEffect(() => {
        console.log("------useEffect------")
        updateHashUrl()
    }, [state.activeStep]);


    const [snackState, setSnackState] = useContext(SnackBarContext);

    const dispatch = useDispatch()

    const informacionObligatoriaRef = useRef();
    const informacionPersonalRef = useRef();
    const domicilioRef = useRef();
    const formaDeEntregaRef = useRef();

    const getSteps = () => {
        return ['Información Obligatoria', 'Datos Personales', 'Domicilio', 'Forma de entrega'];
    }

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <InformacionObligatoria ref={informacionObligatoriaRef} activar={step} />;

            case 1:
                return <InformacionPersonal ref={informacionPersonalRef} activar={step} />;

            case 2:
                return <Domicilio ref={domicilioRef} formSubmitted={state.formSubmitted} />;
            default:
                return <FormaDeEntrega ref={formaDeEntregaRef} formSubmitted={state.formSubmitted} />;
        }
    }

    const handleNext = () => {
        console.log("LLMANDAO HANDLE NEXT")

        let wasError = false

        if (state.activeStep === 0) {
            let data = informacionObligatoria;

            dispatch(notificarErrorSO_PEP_CU(data))

            if (!informacionObligatoriaRef.current.isDataOk()) {
                return
            }
        }

        if (state.activeStep === 1 && !informacionPersonalRef.current.isDataOk()) {

            wasError = true
            informacionPersonalRef.current.forceSubmit()

        } else {
            if (state.activeStep === 1 && informacionPersonalRef.current.isDataOk()) {
                dispatch(guardarDatosPersonales())
            }
        }

        if (state.activeStep === 2 && !domicilioRef.current.isDataOk()) {
            wasError = true
            domicilioRef.current.forceSubmit();
        } else {
            if (state.activeStep === 2 && domicilioRef.current.isDataOk()) {
                dispatch(guardarDatosDomicilio())
            }
        }

        if (state.activeStep === 3) {
            if (!formaDeEntregaRef.current.isDataOk()) {
                wasError = true
                formaDeEntregaRef.current.forceSubmit();
            } else {

                $(".load").fadeIn(700, () => {
                    dispatch(enviarDatosPersonales(isMobile))
                });

                return
            }
        }

        if (!wasError) {
            setState({
                ...state,
                formSubmitted: false,
                activeStep: state.activeStep + 1
            })
        } else {
            setSnackState({
                ...snackState,
                open: true,
            })

            setState({
                ...state,
                formSubmitted: true
            })
        }
    }


    const updateHashUrl = () => {

        if (state.activeStep === 0) {
            dispatch(updateHash({
                hash: ""
            }))
        } else if (state.activeStep === 1) {

            dispatch(updateHash({
                hash: "basicos"
            }))

        } else if (state.activeStep === 2) {

            dispatch(updateHash({
                hash: "domicilio"
            }))

        } else if (state.activeStep === 3) {

            dispatch(updateHash({
                hash: "forma-entrega"
            }))

        }
    }

    const handleBack = () => {
        setState({
            ...state,
            activeStep: state.activeStep - 1
        })
    }

    const handleReset = () => {
        setState({
            ...state,
            activeStep: 0
        })
    }

    const getContent = (index) => {

        return (
            <div>
                <div>{getStepContent(index)}</div>

                <div className={classes.buttonBox}>
                    <Button disabled={state.activeStep === 0} onClick={handleBack} className={classes.backButton}>
                        Anterior
                </Button>
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        {state.activeStep === steps.length - 1 ? 'Siguiente' : 'Siguiente'}
                    </Button>
                </div>
            </div>
        )

    }

    const steps = getSteps();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.stepperContainer}>

                <Stepper activeStep={state.activeStep} orientation={isMobile ? "vertical" : "horizontal"}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            {isMobile && <StepContent>{getContent(index)}</StepContent>}
                        </Step>
                    ))}
                </Stepper>

                <div className={classes.stepperDesktopContainer}>
                    {!isMobile && getContent(state.activeStep)}
                </div>

            </div>
        </div>
    );
};

export default DatosPersonales;