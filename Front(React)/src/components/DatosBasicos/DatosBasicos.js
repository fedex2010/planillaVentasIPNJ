//config
import config from '../../config/config';

//Dependencies
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery';

//material
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

//componentes
import Celular from './Celular'
import FechaNacimiento from './FechaNacimiento'
import Genero from './Genero'
import GenericModal from '../Common/GenericModal'
import LegalesDatosBasicos from "./LegalesDatosBasicos"
import BuhoBankButton from "../../components/Common/BuhoBankButton"
import RecapchaDatosBasicos from "./RecapchaDatosBasicos"

//google
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import ReCAPTCHA from "react-google-recaptcha";

//reducer
import {
    setValueDatosBasicos,
    buscarCuil,
    enviarDatosBasicos
} from "../../reducers/DatosBasicos/DatosBasicosActions"

import { cambiarUrl } from "../../reducers/Navegacion/NavegacionActions"

import {
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"
import {
    resetApp
} from "../../reducers/Common/CommonActions"
//images
import ejemplarImagen from "../../images/datos-iniciales/dni.png"

import {
    handleKeyPressText,
    handleKeyPressNum,
    handlePasteNum,
    handlePasteText,
    deleteQuotesSpacesEnd,
    deleteStartQuotes
} from "../../utils/ValidationInput"
import RestClient from '../../utils/RestClient';

import { SnackBarContext } from "../SnackBarContext";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        width: theme.medidasSitio.mobileWidth,
        [theme.breakpoints.up('sm')]: {
            width: theme.medidasSitio.tabletWidth
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.medidasSitio.desktopWidth
        }
    },
    dataBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
        [theme.breakpoints.up('sm')]: {

        },
        [theme.breakpoints.up('md')]: {

        }
    },
    mainText: {
        marginTop: 20,
        marginBottom: 20,
        color: "#797979",
        fontWeight: "normal",
        fontSize: 25,
        letterSpacing: 0,
        textAlign: "center",
        [theme.breakpoints.up('sm')]: {
            fontSize: 30,
            marginBottom: 10
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 40
        }
    },
    secondaryText: {
        color: "#797979",
        fontWeight: "normal",
        fontSize: 20,
        textAlign: "center"
    },
    formBox: {
        width: "100%",
        marginTop: 20,
        [theme.breakpoints.up('sm')]: {
            width: "80%",
            marginTop: 50
        },
        [theme.breakpoints.up('md')]: {
            width: "80%",
            marginTop: 50
        }
    },
    inputBox: {
        padding: "15px 0px 15px 0px",
        [theme.breakpoints.up('sm')]: {
            padding: "10px 15px 20px 15px"
        },
        [theme.breakpoints.up('md')]: {
            padding: "0px 20px 50px 20px"
        }
    },
    inputBoxFlex: {
        display: "flex"
    },
    svgCenter: {
        display: "block",
        marginTop: "2% !important",
        textAlign: "center"
    },
    modalEjemplarIcon: {
        cursor: "pointer",
        marginTop: 20,
        marginLeft: 15,
    },
    button: {
        background: 'white',
        borderRadius: 3,
        border: 1,
        color: 'grey',
        height: 48,
        padding: '0 30px',
        boxShadow: 'none',
    }
}))

const DatosBasicos = props => {
    const [snackState, setSnackState] = useContext(SnackBarContext);

    const classes = useStyles();
    const classInputBoxFlex = clsx(classes.inputBox, classes.inputBoxFlex)

    const generoRef = useRef();
    const fechaDeNacRef = useRef();
    const celularRef = useRef();

    const [ejemplares, setEjemplares] = useState([])
    const [captcha, setDataCaptcha] = useState([{
        texto: "",
        imagen: "",
        textoIngresado: ""
    }])

    const setTextoIngresado = (e) => {
        setDataCaptcha({
            ...captcha,
            textoIngresado: e.target.value
        })
    }

    useEffect(() => {
        dispatch(resetApp())
    }, []);
    const getNewCaptcha = () => {
        RestClient.doGet("/onboardingPaquetes/api/venta/generarDataCaptcha")
            .then(response => {

                setDataCaptcha({
                    texto: response.data.textCapcha,
                    imagen: response.data.imagenEncoded
                })
            })
            .catch(error => {

                console.error(error)
            })
    }

    useEffect(() => {
        RestClient.doGet("/onboardingPaquetes/api/venta/generarDataCaptcha")
            .then(response => {

                setDataCaptcha({
                    texto: response.data.textCapcha,
                    imagen: response.data.imagenEncoded
                })
            })
            .catch(error => {

                console.error(error)
            })

        RestClient.doGet("/onboardingPaquetes/api/duenio/ejemplar")
            .then(response => {
                setEjemplares(response.data)

                dispatch(hideLoading())
            })
            .catch(error => {

                $(".load").fadeIn(1400, () => {
                    dispatch(cambiarUrl({
                        urlNueva: "/error"
                    }))
                });

                console.error(error)
            })

    }, []);


    const [state, setState] = useState({
        openEjemplar: false,
        openNombre: false,
        openApellido: false,
        externalSubmitted: false,
        nombreUnaLetraOk: true,
        apellidoUnaLetraOk: true,
        tokenCaptcha: ""
    })

    const setOpenModal = (key, flag) => {
        let newState = { ...state }
        newState[key] = flag

        setState(newState)
    }

    const handleModal = (key, flag, cb = null) => () => {

        setOpenModal(key, flag)

        if (cb !== null) cb()
    }

    const datosBasicos = useSelector(state => state.datosBasicos)
    const dispatch = useDispatch()
    const isHomo = useSelector(state => state.navegacion.isHomo)


    const handleOnBlurNombreDniApellido = name => event => {
        //caso especial para borrar las comillas simples al terminar de escribir el nombre y apellido
        if (name == 'nombre' || name == 'apellido') {
            datosBasicos[name] = deleteQuotesSpacesEnd(datosBasicos[name]);
        }

        let data = {};
        data[name] = datosBasicos[name];
        dispatch(setValueDatosBasicos(data));

        let { nombre, apellido, dni } = datosBasicos

        if (nombre !== "" && apellido !== "" && dni.length > 7) {
            dispatch(
                buscarCuil({
                    dni, nombre, apellido
                })
            )
        }
    };

    const validateDni = (valueInput) => {
        valueInput = valueInput.replace(/\s/g,'');
        while (valueInput.charAt(0) == "0") {
            valueInput = valueInput.substr(1);
        }
        return valueInput;
    }

    const handleChange = name => event => {
        let data = {};
        if (name == "nombre" || name == "apellido") {
            data[name] = deleteStartQuotes(event.target.value);
        } else if (name == "dni") {
            data[name] = validateDni(event.target.value.trim());
        } else {
            data[name] = event.target.value.trim();
        }

        dispatch(setValueDatosBasicos(data))
    };

    const validateCod = celular => {
        if (celular.cod.charAt(0) == "0") {
            celular.cod = celular.cod.substr(1, celular.cod.length);
        }
        return celular.cod;
    }

    const validateTel = celular => {
        if (celular.numero.charAt(0) + celular.numero.charAt(1) == "15") {
            celular.numero = celular.numero.substr(2, celular.numero.length);
        }
        return celular.numero;
    }

    const handleChangeCelular = celular => {
        let data = {}
        data["celular"] = celular

        //validate cod
        data.celular.cod = validateCod(data.celular);
        //validate tel
        data.celular.numero = validateTel(data.celular);

        dispatch(setValueDatosBasicos(data))
    };

    const handleChangeGenero = genero => {
        let data = {}
        data["genero"] = genero

        dispatch(setValueDatosBasicos(data))
    };

    const handleChangeFecha = fechaNacimiento => {
        let data = {}
        data["fechaNacimiento"] = fechaNacimiento

        dispatch(setValueDatosBasicos(data))
    };

    const isNombreUnaLetraOk = () => {
        let { nombre, isNombreDeUnaLetra } = datosBasicos
        if (nombre.length === 1 && isNombreDeUnaLetra) {
            return true
        }
        if (nombre.length === 1 && !isNombreDeUnaLetra) {
            return false
        }
        return true
    }
    const isApellidoUnaLetraOk = () => {
        let { apellido, isApellidoDeUnaLetra } = datosBasicos
        if (apellido.length === 1 && isApellidoDeUnaLetra) {
            return true
        }
        if (apellido.length === 1 && !isApellidoDeUnaLetra) {
            return false
        }
        return true
    }

    const isDataOk = () => {
        let { nombre, apellido } = datosBasicos

        return (isNombreUnaLetraOk() || nombre.length > 1) &&
            (isApellidoUnaLetraOk() || apellido.length > 1)

    }

    const captchaIsValid = () => {
        //si es homo no se valida el captcha
        if (isHomo)
            return true
        return captcha.texto === captcha.textoIngresado
    }

    const onSubmit = (errors) => {
        if (!captchaIsValid() || !celularRef.current.isDataOk() || !generoRef.current.isDataOk() ||
            !fechaDeNacRef.current.isDataOk() || !isDataOk() || errors != undefined) {

            setState({
                ...state,
                openApellido: !isApellidoUnaLetraOk(),
                openNombre: !isNombreUnaLetraOk(),
                externalSubmitted: true
            })

            setSnackState({
                ...snackState,
                open: true,
            })

        } else {
            $(".load").fadeIn(700, () => {
                dispatch(enviarDatosBasicos(captcha.textoIngresado))
            });
        }
    };

    const setRespuestaUnaLetra = (modalType, respuesta) => () => {
        let data = {}

        if (modalType === "openNombre") {
            data["isNombreDeUnaLetra"] = respuesta
        } else {
            data["isApellidoDeUnaLetra"] = respuesta
        }

        setOpenModal(modalType, false)
        dispatch(setValueDatosBasicos(data))
    }

    const submit = () => {
        formRef.submit()
    }

    const gerErrorNames = () => {
        let errores = {
            errorNombre: false,
            errorMessageNombre: "",
            errorApellido: false,
            errorMessageApellido: ""
        }

        if (externalSubmitted && !isNombreUnaLetraOk()) {
            errores.errorNombre = true
            errores.errorMessageNombre = "Ingresá un nombre valido"
        }

        if (externalSubmitted && !isApellidoUnaLetraOk()) {
            errores.errorApellido = true
            errores.errorMessageApellido = "Ingresá un apellido valido"
        }
        return errores
    }

    const onChangeCaptcha = (token) => {
        setState({
            ...state,
            tokenCaptcha: token
        })
        console.log("Captcha value:", token);
    }

    let formRef;

    let buttonStyle = {
        fontWeight: "normal",
        fontSize: "1rem"
    }

    if (window.innerWidth <= 600) {
        buttonStyle = {
            ...buttonStyle,
            width: "100%"
        }
    }

    const { externalSubmitted, openEjemplar, openNombre, openApellido } = state
    let errores = gerErrorNames()

    let captchaTag = null
    let errorCaptcha = false
    let errorMessageCaptcha = ""
    if (captcha.imagen !== "") {
        captchaTag = <img src={captcha.imagen} style={{ marginTop: 13 }} />
    }

    if (captcha.textoIngresado !== undefined && captcha.textoIngresado !== "" && captcha.textoIngresado !== captcha.texto) {
        errorCaptcha = true
        errorMessageCaptcha = "Ingresá lo que dice la imagen"
    }
    if (externalSubmitted && captcha.textoIngresado !== "" && captcha.textoIngresado !== captcha.texto) {
        errorCaptcha = true
        errorMessageCaptcha = "Ingresá lo que dice la imagen"
    }


    return (
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <span className={classes.mainText}>
                    Conocé la oferta que tenemos para vos!
                </span>
                <ValidatorForm ref={r => { formRef = r }}
                    onSubmit={onSubmit}
                    onError={errors => onSubmit(errors)}
                    className={classes.formBox} >
                    <Grid container >
                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Nombre"
                                name="nombre"
                                value={datosBasicos.nombre}
                                error={errores.errorNombre}
                                helperText={errores.errorMessageNombre}
                                onChange={handleChange('nombre')}
                                onKeyPress={handleKeyPressText}
                                onPaste={handlePasteText}
                                onBlur={handleOnBlurNombreDniApellido('nombre')}
                                inputProps={{ maxLength: 30 }}
                                validators={['required']}
                                errorMessages={['Nombre requerido']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Apellido"
                                name="apellido"
                                value={datosBasicos.apellido}
                                error={errores.errorApellido}
                                helperText={errores.errorMessageApellido}
                                onChange={handleChange('apellido')}
                                onKeyPress={handleKeyPressText}
                                onPaste={handlePasteText}
                                onBlur={handleOnBlurNombreDniApellido('apellido')}
                                inputProps={{ maxLength: 30 }}
                                validators={['required']}
                                errorMessages={['Apellido requerido']}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="DNI"
                                name="dni"
                                value={datosBasicos.dni}
                                validators={['required', 'isNumber', 'minStringLength:7']}
                                errorMessages={['DNI requerido', 'DNI inválido', 'El DNI debe contener al menos 7 dígitos']}
                                onChange={handleChange('dni')}
                                onKeyPress={handleKeyPressNum}
                                onPaste={handlePasteNum}
                                onBlur={handleOnBlurNombreDniApellido('dni')}
                                inputProps={{ maxLength: 8 }}
                            />
                        </Grid>
                        <Grid item xs={11} sm={6} className={classInputBoxFlex}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Ejemplar"
                                    validators={['required']}
                                    errorMessages={['Ejemplar requerido']}
                                    onChange={handleChange('ejemplarDocumento')}
                                    value={datosBasicos.ejemplarDocumento}
                                    inputProps={{
                                        name: 'ejemplarDocumento',
                                        id: 'ejemplarDocumento'
                                    }}
                                >
                                    {
                                        ejemplares.map((ejemplar) => (
                                            <MenuItem key={ejemplar.id} value={ejemplar.id}>
                                                {ejemplar.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                            <HelpOutlineIcon className={classes.modalEjemplarIcon} onClick={handleModal("openEjemplar", true)} />
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="CUIL/CUIT"
                                name="idTributario"
                                value={datosBasicos.idTributario}
                                validators={['required', 'isNumber', 'minStringLength:11']}
                                errorMessages={['CUIL requerido', 'CUIL inválido', 'El CUIL debe contener al menos 11 dígitos']}
                                onChange={handleChange('idTributario')}
                                onKeyPress={handleKeyPressNum}
                                onPaste={handlePasteNum}
                                inputProps={{ maxLength: 11 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <Genero onChange={handleChangeGenero}
                                externalSubmitted={externalSubmitted}
                                genero={datosBasicos.genero}
                                ref={generoRef}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <FechaNacimiento
                                externalSubmitted={externalSubmitted}
                                onChange={handleChangeFecha}
                                fechaNacimiento={datosBasicos.fechaNacimiento}
                                ref={fechaDeNacRef}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="E-mail"
                                onChange={handleChange('email')}
                                name="email"
                                value={datosBasicos.email}
                                validators={['required', "isEmail"]}
                                errorMessages={['Email requerido', "Ingresá un mail valido"]}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <Celular
                                label="Celular"
                                externalSubmitted={externalSubmitted}
                                onChange={handleChangeCelular}
                                celular={datosBasicos.celular}
                                ref={celularRef}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} className={classes.inputBox}>
                            <FontAwesomeIcon style={{ marginBottom: 12, marginRight: 5, cursor: "pointer" }} icon={faSync} onClick={getNewCaptcha}
                                size="2x" />
                            {captchaTag}
                            <TextValidator
                                fullWidth
                                onChange={setTextoIngresado}
                                name="captcha"
                                value={captcha.textoIngresado}
                                error={errorCaptcha}
                                helperText={errorMessageCaptcha}
                                style={{ marginTop: 28, width: 100 }}
                            />
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <BuhoBankButton buttonStyle={buttonStyle} onClick={submit} text={"Conocer oferta"} />
                        </Grid>

                    </Grid>
                </ValidatorForm>
                <LegalesDatosBasicos />
            </section>

            <GenericModal open={openEjemplar}>
                <span>¿Dónde veo el ejemplar?</span>
                <img src={ejemplarImagen} />
                <Button onClick={handleModal("openEjemplar", false)}>
                    Cerrar
                </Button>
            </GenericModal>

            <GenericModal open={openNombre}>
                <span>Tu nombre contiene un caracter, ¿es correcto?</span>
                <span />
                <section>
                    <Button onClick={setRespuestaUnaLetra("openNombre", true)}>
                        SI
                    </Button>
                    <Button onClick={setRespuestaUnaLetra("openNombre", false)}>
                        NO
                    </Button>
                </section>
            </GenericModal>

            <GenericModal open={openApellido}>
                <span>Tu apellido contiene un caracter, ¿es correcto?</span>
                <span />
                <section>
                    <Button onClick={setRespuestaUnaLetra("openApellido", true)}>
                        SI
                    </Button>
                    <Button onClick={setRespuestaUnaLetra("openApellido", false)}>
                        NO
                    </Button>
                </section>
            </GenericModal>



        </section>
    )
};

export default DatosBasicos;