
//Dependencies
import React, { forwardRef, useImperativeHandle, useState, state } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery'

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ValidatorForm } from 'react-material-ui-form-validator';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';


//actions
import { setInformacionObligatoria } from "../../reducers/DatosPersonales/DatosPersonalesActions"

//components
import GenericModal from '../Common/GenericModal'



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    containerGeneral: {
        cursor: "pointer",
        color: "#f47321",
        margin: "-3px 0px 0px 15px"
    },
    iconText: {
        height: "24px",
        display: "inline-block"
    },
    significado: {
        fontSize: "12px",
        display: "inline-block",
        verticalAlign: "middle",
        marginTop: "-15px",
    },

    '@media  screen and (max-width: 1100px)': {
        significado: {
            display: "none",
        }
    }

}))

const InformacionObligatoria = forwardRef((props, ref) => {
    const classes = useStyles();

    const [state, setState] = useState({
        openSujetoObligado: false,
        openSujetoPolitico: false,
        openSujetoExtranjero: false,
    })

    let titleGenericStyle = {
        fontSize: "23px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        fontFamily: "Roboto",
        color: "#666666",
        textAlign: "center",
    }

    let titleSubjectStyle = {
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        fontFamily: "Roboto",
        color: "#666666",
        textAlign: "center",
    }

    let titleSubjectForeignStyle = {
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        fontFamily: "Roboto",
        color: "#666666",
        textAlign: "left",
    }

    const datosPersonales = useSelector(state => state.informacionObligatoria)
    const dispatch = useDispatch()

    useImperativeHandle(ref, () => ({
        isDataOk() {
            return isDataOk()
        }
    }));

    const isDataOk = () => {
        return datosPersonales.sujetoObligado === false &&
            datosPersonales.politExp === false &&
            datosPersonales.ciudEst === false
    }

    const handleChange = event => {
        let name = event.target.name
        let value = event.target.value
        value == "true" ? value = true : value = false;
        dispatch(
            setInformacionObligatoria({
                fieldName: name,
                fieldValue: value
            })
        )
    };

    const handleModal = (key, flag, cb = null) => () => {

        setOpenModal(key, flag)

        if (cb !== null) cb()
    }

    const setOpenModal = (key, flag) => {
        let newState = { ...state }
        newState[key] = flag

        setState(newState)
    }

    const zaraza = () => {

    }

    const { openSujetoObligado, openSujetoPolitico, openSujetoExtranjero } = state

    return (
        <div className="io-container">
            <Grid container >
                <ValidatorForm autoComplete="off"
                    onSubmit={zaraza}>
                    <Grid item xs={12} >
                        <div className={classes.root}>
                            <FormControl
                                component="fieldset">
                                <FormLabel component="legend">¿Sos una persona expuesta políticamente?</FormLabel>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="politExp"
                                    className={classes.group}
                                    value={datosPersonales.politExp}
                                    onChange={handleChange}>
                                    <FormControlLabel value={false} control={<Radio color="primary" />} label="No" />
                                    <FormControlLabel value={true} control={<Radio color="primary" />} label="Si" />
                                </RadioGroup>
                            </FormControl>
                            <div onClick={handleModal("openSujetoPolitico", true)} className={classes.containerGeneral}>
                                <div className={classes.iconText} >
                                    <HelpOutlineIcon className={classes.iconModal} />
                                </div>
                                <span className={classes.significado}>¿Qué significa?</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid container item xs={12} >
                        <div className={classes.root}>
                            <FormControl
                                component="fieldset">
                                <FormLabel component="legend">¿Sos sujeto obligado?</FormLabel>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="sujetoObligado"
                                    className={classes.group}
                                    value={datosPersonales.sujetoObligado}
                                    onChange={handleChange}>
                                    <FormControlLabel value={false} control={<Radio color="primary" />} label="No" />
                                    <FormControlLabel value={true} control={<Radio color="primary" />} label="Si" />
                                </RadioGroup>
                            </FormControl>
                            <div onClick={handleModal("openSujetoObligado", true)} className={classes.containerGeneral}>
                                <div className={classes.iconText} >
                                    <HelpOutlineIcon className={classes.iconModal} />
                                </div>
                                <span className={classes.significado}>¿Qué significa?</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className={classes.root}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">¿Sos ciudadano estadounidense  y/o tenés residencia fiscal en otro país?</FormLabel>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="ciudEst"
                                    className={classes.group}
                                    value={datosPersonales.ciudEst}
                                    onChange={handleChange}>
                                    <FormControlLabel value={false} control={<Radio color="primary" />} label="No" />
                                    <FormControlLabel value={true}  control={<Radio color="primary" />} label="Si" />
                                </RadioGroup>
                            </FormControl>
                            <div onClick={handleModal("openSujetoExtranjero", true)} className={classes.containerGeneral}>
                                <div className={classes.iconText} >
                                    <HelpOutlineIcon className={classes.iconModal} />
                                </div>
                                <span className={classes.significado}>¿Qué significa?</span>
                            </div>
                        </div>
                    </Grid>
                </ValidatorForm>
            </Grid>


            <GenericModal open={openSujetoObligado}
                modalStyle={titleGenericStyle} customSubjectStyle={titleSubjectStyle}>
                <span>¿Qué significa ser Sujeto Obligado?</span>
                <span>Son las personas que están obligadas al cumplimiento de obligaciones destinadas a prevenir, impedir y detectar el lavado de dinero.</span>
                <Button onClick={handleModal("openSujetoObligado", false)}>
                    Cerrar
                </Button>
            </GenericModal>

            <GenericModal open={openSujetoPolitico}
                modalStyle={titleGenericStyle} customSubjectStyle={titleSubjectStyle}>
                <span>¿Qué significa ser una Persona Expuesta Políticamente?</span>
                <span>Son los funcionarios públicos, diplomáticos, sus cónyuges o convivientes reconocidos legalmente y familiares en línea ascendiente, descendiente o colateral hasta el tercer grado.</span>
                <Button onClick={handleModal("openSujetoPolitico", false)}>
                    Cerrar
                </Button>
            </GenericModal>
            <GenericModal open={openSujetoExtranjero}
                modalStyle={titleGenericStyle} customSubjectStyle={titleSubjectForeignStyle}>
                <span>¿Sos ciudadano estadounidense y/o tenés Residencia Fiscal en otro país?</span>
                <span><b>Debés responder afirmativamente a la pregunta si reúnes alguna de las siguientes condiciones:</b>
                    <br />
                    <b>1)</b> Ciudadano estadounidense con Pasaporte estadounidense.
                    <br />
                    <b>2)</b> Residente en Estados Unidos o sus estados asociados con Tarjeta de Residencia (Green Card).
                    <br />
                    <b>3)</b> Residente Parcial en Estados Unidos o sus estados asociados (183 días en 1 año calendario, o 122 días en promedio en los últimos 3 años calendario).
                    <br />
                    <b>4)</b> Pagás impuestos por tenencia de bienes o actividades realizadas en otro/s país/es.
                    <br />
                    <b>5)</b> Tenés un número de identificación tributaria emitida por otro/s país/es.</span>
                <Button onClick={handleModal("openSujetoExtranjero", false)}>
                    Cerrar
                </Button>
            </GenericModal>
        </div>
    )
})

export default InformacionObligatoria
