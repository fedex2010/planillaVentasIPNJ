
//Dependencies
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//material-ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Select from '@material-ui/core/Select';
//actions
import {
    setInformacionDomicilio
} from "../../reducers/DatosPersonales/DatosPersonalesActions"
import { buscarLocalidadesDomicilio } from "../../reducers/Common/CommonActions"

//components
import {
    handleKeyPressNum,
    handlePasteNum,
    handleKeyPressNumTex,
    deleteQuotesSpacesEnd,
    handleKeyPressNumTexSpace,
    deleteStartQuotes
} from "../../utils/ValidationInput"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    marginGrid: {
        marginLeft: "8% !important"
    },
    svgCenter: {
        display: "block",
        marginTop: "2% !important",
        textAlign: "center"
    }
}))

const Domicilio = forwardRef((props, ref) => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const domicilio = useSelector(state => state.domicilio)
    const formaEntrega = useSelector(state => state.formaDeEntrega)

    console.dir(domicilio)

    let [isNumeroDomicilioValid, setIsNumeroDomicilioValid] = useState(true);
    let [isLocalidadSeleccionadaNoDefault, setIsLocalidadSeleccionadaNoDefault] = useState(true);

    let formRef;

    useImperativeHandle(ref, () => ({
        isDataOk() {
            return isDataOk()
        },
        forceSubmit() {
            return forceSubmit()
        }
    }));

    const getDataToValidate = () => {

        if (typeof props.data !== "undefined" && props.data !== null) {
            return props.data
        } else {
            return domicilio
        }
    }

    const isDataOk = () => {
        let {
            calle,
            numeroDomicilio,
            piso,
            localidadSeleccionada,
            departamento,
            codigo,
        } = getDataToValidate()

        //campos opcionales
        let pisoIsOk = true
        let deptoIsOk = true

        if (piso !== "") {
            pisoIsOk = (!isNaN(piso) &&
                piso.toString().length <= 2)
        }

        if (departamento !== "") {
            deptoIsOk = departamento.toString().length <= 3
        }

        localidadSeleccionada == "-1" ? setIsLocalidadSeleccionadaNoDefault(isLocalidadSeleccionadaNoDefault = false) : setIsLocalidadSeleccionadaNoDefault(isLocalidadSeleccionadaNoDefault = true)
        localidadSeleccionada == "195" && numeroDomicilio == "0" ? setIsNumeroDomicilioValid(isNumeroDomicilioValid = false) : setIsNumeroDomicilioValid(isNumeroDomicilioValid = true)

        return pisoIsOk && deptoIsOk && calle !== "" &&
            numeroDomicilio !== "" &&
            !isNaN(numeroDomicilio) &&
            !!codigo === true &&
            !!localidadSeleccionada === true &&
            isLocalidadSeleccionadaNoDefault &&
            isNumeroDomicilioValid
    }

    const forceSubmit = () => {
        formRef.submit()
    }
    /******************************************************** */
    //se crea en cada RENDERING, es NECESARIO refactorizar esta PARTE
    /******************************************************** */
    const getHandleChange = () => {
        if (typeof props.handleChange !== "undefined" && typeof props.handleChange === "function") {
            return props.handleChange
        } else {
            return handleChange
        }
    }


    const getData = (key) => {
        if (typeof props.data !== "undefined" && props.data !== null) {
            return props.data[key]
        } else {
            return domicilio[key]
        }
    }

    let validateNumeroDomicilio = () => {
        domicilio.localidadSeleccionada == "195" && domicilio.numeroDomicilio == "0" ? setIsNumeroDomicilioValid(isNumeroDomicilioValid = false) : setIsNumeroDomicilioValid(isNumeroDomicilioValid = true)
        formaEntrega.domicilioEnvio.localidadSeleccionada == "195" && formaEntrega.domicilioEnvio.numeroDomicilio == "0" ? setIsNumeroDomicilioValid(isNumeroDomicilioValid = false) : setIsNumeroDomicilioValid(isNumeroDomicilioValid = true)
    }

    const handleOnBlurCleanQuotes = name => event => {
        let data = {};
        data[name] = deleteQuotesSpacesEnd(domicilio[name]);
        dispatch(setInformacionDomicilio(data));
    };

    let handleChange = (event) => {
        let { name, value } = event.target;

        if ((name === "piso" && value.length > 2) ||
            (name === "departamento" && value.length > 3) ||
            (name === "codigo" && value.length > 4)) {
            return
        }

        let data = {}
        data[name] = value

        if (name == "codigo" || name == "piso" || name == "numeroDomicilio") {
            data[name] = data[name].replace(/\s/g, "");
        }

        if (name == "calle") {
            data[name] = deleteStartQuotes(event.target.value);
        }

        dispatch(setInformacionDomicilio(data))

        if (name === "codigo" && value.length === 4) {
            dispatch(buscarLocalidadesDomicilio({
                codigoPostal: value,
                type: "SET_LOCALIDADES_DOMICILIO"
            }))
        }
    }

    const submitInvisible = () => {
        console.log("soy un submitInvisible jajajaj")
    }

    const snackbar = () => {

    }

    let { formSubmitted } = props
    let errorLocationSelect = null
    if (formSubmitted && domicilio.localidadSeleccionada === "" ||
        domicilio.localidadSeleccionada == "-1" ||
        formaEntrega.domicilioEnvio.localidadSeleccionada == "-1") {
        //errorLocationSelect = <FormHelperText style={{color:"red"}}>Debe seleccionar una localidad</FormHelperText>
        errorLocationSelect = true
    }

    return (
        <div className="domicilio">
            <div className="domicilio-container">
                <Grid container >
                    <Grid item xs={12} md={12}>
                        <ValidatorForm
                            onSubmit={submitInvisible}
                            onError={snackbar}
                            ref={r => { formRef = r }}>
                            <Grid container
                                justify="space-between"
                                alignItems="center" direction="row" spacing={2}>
                                <Grid item xs={1} className={classes.svgCenter}>
                                    <svg width="24px" height="21px" viewBox="0 0 24 21">
                                        <g id="MVP-SALIDA-Wireframes" stroke="none" fill="none">
                                            <g id="wizard-3_PlazoFijo" transform="translate(-239.000000, -328.000000)">
                                                <g id="Group-2" transform="translate(215.000000, 299.000000)">
                                                    <g id="round-home-24px" transform="translate(21.000000, 25.000000)">
                                                        <polygon id="Path" points="0 0 30 0 30 30 0 30"></polygon>
                                                        <path d="M12.5,23.75 L12.5,17.5 L17.5,17.5 L17.5,23.75 C17.5,24.4375 18.0625,25 18.75,25 L22.5,25 C23.1875,25 23.75,24.4375 23.75,23.75 L23.75,15 L25.875,15 C26.45,15 26.725,14.2875 26.2875,13.9125 L15.8375,4.5 C15.3625,4.075 14.6375,4.075 14.1625,4.5 L3.7125,13.9125 C3.2875,14.2875 3.55,15 4.125,15 L6.25,15 L6.25,23.75 C6.25,24.4375 6.8125,25 7.5,25 L11.25,25 C11.9375,25 12.5,24.4375 12.5,23.75 Z" id="Path" fill="#B2B2B2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Grid>
                                <Grid item xs={11} md={7}>
                                    <TextValidator
                                        fullWidth
                                        className="input-container"
                                        onChange={getHandleChange()}
                                        value={getData("calle")}
                                        onKeyPress={handleKeyPressNumTexSpace}
                                        onBlur={handleOnBlurCleanQuotes('calle')}
                                        id="calle"
                                        label="Calle"
                                        name="calle"
                                        validators={['required']}
                                        errorMessages={['']}
                                        inputProps={{ maxLength: 64 }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextValidator
                                        fullWidth
                                        error={!isNumeroDomicilioValid}
                                        onBlur={validateNumeroDomicilio}
                                        className="input-container"
                                        onChange={getHandleChange()}
                                        value={getData("numeroDomicilio")}
                                        label="Número"
                                        name="numeroDomicilio"
                                        validators={['required', 'matchRegexp:^[0-9]{0,8}$']}
                                        errorMessages={['', '']}
                                        onKeyPress={handleKeyPressNum}
                                        onPaste={handlePasteNum}
                                        inputProps={{ maxLength: 5 }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container
                                justify="space-between"
                                alignItems="center" direction="row" spacing={2} >
                                <Grid item xs={1} className={classes.svgCenter}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                                        <desc>Created with sketchtool.</desc>
                                        <g id="MVP-SALIDA-Wireframes" stroke="none" fill="none">
                                            <g id="wizard-3_PlazoFijo" transform="translate(-242.000000, -417.000000)" fill="#B2B2B2">
                                                <g id="Group-2" transform="translate(215.000000, 299.000000)">
                                                    <g id="round-location_city-24px" transform="translate(24.000000, 115.000000)">
                                                        <path d="M18.75,13.75 L18.75,7.2875 C18.75,6.625 18.4875,5.9875 18.0125,5.525 L15.875,3.3875 C15.3875,2.9 14.6,2.9 14.1125,3.3875 L11.9875,5.5125 C11.5125,5.9875 11.25,6.625 11.25,7.2875 L11.25,8.75 L6.25,8.75 C4.875,8.75 3.75,9.875 3.75,11.25 L3.75,23.75 C3.75,25.125 4.875,26.25 6.25,26.25 L23.75,26.25 C25.125,26.25 26.25,25.125 26.25,23.75 L26.25,16.25 C26.25,14.875 25.125,13.75 23.75,13.75 L18.75,13.75 Z M8.75,23.75 L6.25,23.75 L6.25,21.25 L8.75,21.25 L8.75,23.75 Z M8.75,18.75 L6.25,18.75 L6.25,16.25 L8.75,16.25 L8.75,18.75 Z M8.75,13.75 L6.25,13.75 L6.25,11.25 L8.75,11.25 L8.75,13.75 Z M16.25,23.75 L13.75,23.75 L13.75,21.25 L16.25,21.25 L16.25,23.75 Z M16.25,18.75 L13.75,18.75 L13.75,16.25 L16.25,16.25 L16.25,18.75 Z M16.25,13.75 L13.75,13.75 L13.75,11.25 L16.25,11.25 L16.25,13.75 Z M16.25,8.75 L13.75,8.75 L13.75,6.25 L16.25,6.25 L16.25,8.75 Z M23.75,23.75 L21.25,23.75 L21.25,21.25 L23.75,21.25 L23.75,23.75 Z M23.75,18.75 L21.25,18.75 L21.25,16.25 L23.75,16.25 L23.75,18.75 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Grid>
                                <Grid item xs={11} md={3} >
                                    <TextValidator
                                        fullWidth
                                        className="input-container"
                                        onChange={getHandleChange()}
                                        value={getData("piso")}
                                        id="piso"
                                        label="Piso"
                                        name="piso"
                                        validators={['isNumber', 'maxStringLength:2']}
                                        errorMessages={['', ""]}
                                        onKeyPress={handleKeyPressNum}
                                        onPaste={handlePasteNum}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextValidator
                                        fullWidth
                                        className="input-container"
                                        onChange={getHandleChange()}
                                        value={getData("departamento")}
                                        id="departamento"
                                        label="Departamento"
                                        onKeyPress={handleKeyPressNumTex}
                                        name="departamento"
                                        validators={['maxStringLength:2']}
                                        inputProps={{ maxLength: 2 }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4} >
                                    <TextValidator
                                        fullWidth
                                        className="input-container"
                                        onChange={getHandleChange()}
                                        value={getData("codigo")}
                                        label="Código postal"
                                        name="codigo"
                                        validators={['required', 'minStringLength:4']}
                                        errorMessages={['', ""]}
                                        onKeyPress={handleKeyPressNum}
                                        onPaste={handlePasteNum}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container
                                justify="flex-start"
                                alignItems="center" direction="row" spacing={2}>
                                <Grid item xs={1} className={classes.svgCenter}>
                                    <svg width="26px" height="26px" viewBox="0 0 26 26">
                                        <desc>Created with sketchtool.</desc>
                                        <g id="MVP-SALIDA-Wireframes" stroke="none" fill="none">
                                            <g id="wizard-2_PlazoFijo" transform="translate(-239.000000, -300.000000)" fill="#B2B2B2">
                                                <g id="round-public-24px" transform="translate(239.000000, 300.000000)">
                                                    <path d="M13,0.5 C6.1,0.5 0.5,6.1 0.5,13 C0.5,19.9 6.1,25.5 13,25.5 C19.9,25.5 25.5,19.9 25.5,13 C25.5,6.1 19.9,0.5 13,0.5 Z M11.75,22.9125 C6.8125,22.3 3,18.1 3,13 C3,12.225 3.1,11.4875 3.2625,10.7625 L9.25,16.75 L9.25,18 C9.25,19.375 10.375,20.5 11.75,20.5 L11.75,22.9125 Z M20.375,19.7375 C20.05,18.725 19.125,18 18,18 L16.75,18 L16.75,14.25 C16.75,13.5625 16.1875,13 15.5,13 L8,13 L8,10.5 L10.5,10.5 C11.1875,10.5 11.75,9.9375 11.75,9.25 L11.75,6.75 L14.25,6.75 C15.625,6.75 16.75,5.625 16.75,4.25 L16.75,3.7375 C20.4125,5.225 23,8.8125 23,13 C23,15.6 22,17.9625 20.375,19.7375 Z" id="Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Grid>
                                <Grid item xs={11} md={6} >
                                    <FormControl fullWidth className="domicilio-form-control">
                                        <InputLabel error={errorLocationSelect} htmlFor="age-simple">Localidad</InputLabel>
                                        <Select error={errorLocationSelect} onChange={getHandleChange()}
                                            value={getData("localidadSeleccionada")}
                                            name="localidadSeleccionada"
                                            disabled={getData("localidades").length == 0 ? true : false}
                                        >
                                            {
                                                getData("localidades").map((value, key) => {
                                                    return <MenuItem value={value.id} key={key}>{value.ciuDescripcion}</MenuItem>
                                                })
                                            }
                                            {
                                                getData("localidades").length > 1 ?
                                                    <MenuItem value={-1}>Seleccioná</MenuItem>
                                                    :
                                                    null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
})

export default Domicilio;

