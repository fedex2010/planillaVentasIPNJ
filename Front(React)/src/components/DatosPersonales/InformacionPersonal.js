
//Dependencies
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery';

//material-ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { ClipLoader } from 'react-spinners';

//actions
import {
    setInformacionPersonal,
    setInformacionPersonalConyuge
} from "../../reducers/DatosPersonales/DatosPersonalesActions"

import { cambiarUrl } from "../../reducers/Navegacion/NavegacionActions"
import {
    buscarCuil
} from "../../reducers/Common/CommonActions"

//images
import ejemplarImagen from "../../images/datos-iniciales/dni.png"
import corazonImg from "../../images/datos-personales/corazon.png"
import maletinImg from "../../images/datos-personales/maletin.png"
import planetaImg from "../../images/datos-personales/planeta.png"
import personaSvg from '../../static/svg/round-account-circle-24-px.svg';
import dniSvg from '../../static/svg/identity-card.svg';
import cuilSvg from '../../static/svg/round-library-books-24-px.svg';
import generoSvg from '../../static/svg/round-wc-24-px.svg';

//components
import {
    handleKeyPressText,
    handleKeyPressNum,
    handlePasteNum,
    handlePasteText
} from "../../utils/ValidationInput"
import ProxyRequester from '../Common/comunication/ProxyRequester'
import GenericModal from '../Common/GenericModal'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    formBox: {
        width: "100%",
        marginBottom: 50,
        marginTop: 50
    },
    inputBox: {
        padding: "0px 10px 40px 10px"
    },
    inputBoxFlex: {
        display: "flex"
    },
    modalEjemplarIcon: {
        cursor: "pointer",
        marginTop: 20,
        marginLeft: 15,
    },
    sectionTitle: {
        borderLeft: "#f47321 solid 5px",
        paddingLeft: "10px"
    },
    marginGrid: {
        marginLeft: "8% !important"
    },
    svgCenter: {
        display: "block",
        marginTop: "2% !important",
        textAlign: "center"
    },
    svgCenterRight: {
        display: "block",
        marginBottom: "1% !important",
        textAlign: "left"
    },
    '@media  screen and (max-width: 959px)': {
        phoneSvgLeft: {
            textAlign: "center !important"
        }
    },
    '@media  screen and (max-width: 800px)': {
        svgCenterRight: {
            marginBottom: "4% !important"
        }
    },
    unCharError: {
        color: "#f44336",
        fontSize: "12px"
    }
}))

const InformacionPersonal = forwardRef((props, ref) => {
    const classes = useStyles();
    const classInputBoxFlex = clsx(classes.inputBox, classes.inputBoxFlex)

    let [isGeneroOk, setIsGeneroOk] = useState(true);
    let [openNameOpenedCount, setOpenNameOpenedCount] = useState(0);
    let [openApellidoOpenedCount, setOpenApellidoOpenedCount] = useState(0);


    const dispatch = useDispatch()
    const informacionPersonal = useSelector(state => state.informacionPersonal)
    const datosBasicos = useSelector(state => state.datosBasicos)

    const conyuge = useSelector(state => state.informacionPersonal.conyuge)

    let formRef;

    const setOpenModal = (key, flag) => {
        let newState = { ...state }
        newState[key] = flag

        setState(newState)
    }

    const [state, setState] = useState({
        ejemplares: [],
        tipo: "",
        telefonoMovil: "",
        provincias: [],
        paises: [],
        nupcias: [],
        unionesCiviles: [],
        showConyuge: false,
        generos: [],
        nivelesDeEstudio: [],
        estadosCiviles: [],
        provincia: '',
        ciudades: [],
        paisNacimiento: '',
        nacionalidad: '',
        ciudad: '',
        listaSituacionLaboral: [],
        open: false,
        buscandoCiudades: false,
        openNombre: false,
        openApellido: false,
        openEjemplar: false,
        paisesConyugeSecondOption: []
    })

    const [paisesConyuge, setPaisesConyuge] = useState([])

    useImperativeHandle(ref, () => ({
        isDataOk() {
            return isDataOk()
        },
        forceSubmit() {
            return forceSubmit()
        }
    }));

    const forceSubmit = () => {
        formRef.submit()
    }




    useEffect(() => {
        let provinciaSeleccionada = !!informacionPersonal.provincia !== false

        let promises = [
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/pais?vigente=true&isArgentinian=' + informacionPersonal.isArgentinianDni),
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/situacionLaboral'),
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/nivelesDeEstudio'),
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/estadosCiviles'),
            ProxyRequester.getResource('/onboardingPaquetes/api/duenio/ejemplar'),
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/pais?vigente=true&isArgentinian=' + !informacionPersonal.isArgentinianDni),
        ]

        if (informacionPersonal.isArgentinianDni) {
            promises.push(
                ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/provincias?vigente=true&idPais=80')
            )
        }

        Promise.all(promises)
            .then(responses => {
                return {
                    ...state,
                    ejemplar: [],
                    showConyuge: informacionPersonal.estadoCivil === "C",
                    nupcias: [{ id: "P", descripcion: "Primeras" },
                    { id: "S", descripcion: "Segundas" },
                    { id: "T", descripcion: "Terceras" }, { id: "C", descripcion: "Cuartas" }],
                    unionesCiviles: [{ id: "Y", descripcion: "Comunidad" },
                    { id: "Z", descripcion: "Separacion de bienes" }],
                    paises: responses[0].data,
                    listaSituacionLaboral: responses[1].data,
                    nivelesDeEstudio: responses[2].data,
                    estadosCiviles: responses[3].data,
                    ejemplares: responses[4].data,
                    generos: [{ id: "M", descripcion: "Masculino" }, { id: "F", descripcion: "Femenino" }],
                    paisesConyugeSecondOption: responses[5].data,
                    provincias: (informacionPersonal.isArgentinianDni) ? responses[6].data : []
                }
            }).then(response => {
                if (provinciaSeleccionada && informacionPersonal.isArgentinianDni) {
                    ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/ciudad?vigente=true&idPais=' + informacionPersonal.paisDeNac + '&idProvincia=' + informacionPersonal.provincia)
                        .then((responseCities) => {
                            setState({
                                ...response,
                                ciudades: responseCities.data
                            });
                        });
                } else {
                    setState({
                        ...response
                    });
                }
            })
            .catch(err => {
                $(".load").fadeIn(1400, () => {
                    dispatch(cambiarUrl({
                        urlNueva: "/error"
                    }))
                });
            })
    }, [])

    const isDataConyugeOk = () => {
        if (informacionPersonal.estadoCivil !== "C") {
            return true
        }
        let {
            nombre,
            apellido,
            dni,
            ejemplarDocumento,
            genero,
            idTributario,
            idPaisNacimiento,
            idNacionalidad
        } = informacionPersonal.conyuge


        let nombreOk = !!nombre === true && isNaN(nombre) && nombre.length >= 1 && nombre.length <= 64
        let apellidoOk = !!apellido === true && isNaN(apellido) && apellido.length >= 1 && apellido.length <= 64
        let ejemplarTipoDniOk = !!ejemplarDocumento === true
        conyuge.genero == "-1" ? setIsGeneroOk(isGeneroOk = false) : setIsGeneroOk(isGeneroOk = true);

        let dniOk = !!dni === true && !isNaN(dni) && dni.length >= 7 && dni.length <= 8
        let cuilOk = !!idTributario === true && !isNaN(idTributario) && idTributario.length === 11

        let paisDeNacOk = !!idPaisNacimiento === true && idPaisNacimiento != '';
        let nacionalidadOk = !!idNacionalidad === true && idNacionalidad != '';

        return nombreOk && apellidoOk && ejemplarTipoDniOk && dniOk && cuilOk && isGeneroOk && paisDeNacOk && nacionalidadOk
    }

    const isTelefonoLaboralOk = () => {
        let { telefonoLaboral } = informacionPersonal

        return !!telefonoLaboral === true &&
            !isNaN(telefonoLaboral) &&
            telefonoLaboral.toString().length === 10
    }

    const isNombreUnaLetraOk = () => {
        let { nombre, isNombreDeUnaLetra } = conyuge
        if (nombre.length === 1 && isNombreDeUnaLetra) {
            return true
        }
        if (nombre.length === 1 && !isNombreDeUnaLetra) {
            return false
        }
        return true
    }

    const isApellidoUnaLetraOk = () => {
        let { apellido, isApellidoDeUnaLetra } = conyuge

        if (apellido.length === 1 && isApellidoDeUnaLetra) {
            return true
        }
        if (apellido.length === 1 && !isApellidoDeUnaLetra) {
            return false
        }
        return true
    }

    const checkOneLetterNameLastName = () => {
        let isToContinue = false;
        if (!isNombreUnaLetraOk()) {
            setState({
                ...state,
                openNombre: !isNombreUnaLetraOk()
            })
        } else if (!isApellidoUnaLetraOk()) {
            setState({
                ...state,
                openApellido: !isApellidoUnaLetraOk()
            })
        }

        if ((isNombreUnaLetraOk() || conyuge.nombre.length > 1) &&
            (isApellidoUnaLetraOk() || conyuge.apellido.length > 1)) {
            isToContinue = true;
        }

        return isToContinue;

    }

    const isDataOk = () => {
        if (checkOneLetterNameLastName()) {
            let isOk = true

            let valuesToCheck = ["paisDeNac", "nacionalidad", "provincia", "ciudad", "estadoCivil", "nivelDeEstudios", "situacionLaboral"]
            if (informacionPersonal.estadoCivil === "C") {
                valuesToCheck.push("nupcias", "unionCivil")
            }

            valuesToCheck.forEach(item => {
                if (!!informacionPersonal[item] === false) {
                    isOk = false
                }
            })
            return isOk && isTelefonoLaboralOk() && isDataConyugeOk()

        }
    }

    const startLoading = () => {
        return new Promise((resolve, reject) => {
            setState({
                ...state,
                buscandoCiudades: true
            })

            setTimeout(() => {
                resolve("jajaja");
            }, 500)
        })
    }


    const validateTel = valueTel => {
        return valueTel.replace(/\s/g, "");
    }


    const handleChange = name => event => {
        let data = {}
        data[name] = event.target.value
        
        console.dir(data)

        if (name == "telefonoLaboral")
            data.telefonoLaboral = validateTel(data.telefonoLaboral)

        if (name !== "telefonoLaboral" || (name === "telefonoLaboral" && event.target.value.length <= 10)) {
            dispatch(setInformacionPersonal(data))
        }

        if (name === "estadoCivil") {
            if (event.target.value === "C") {
                setState({
                    ...state,
                    showConyuge: true
                })
            } else {
                setState({
                    ...state,
                    showConyuge: false
                })
            }

        }

        if (name === "paisDeNac") {
            let data = {}
            data["provincia"] = "";
            data["ciudad"] = "";
            dispatch(setInformacionPersonal(data))

            let url = '/onboardingPaquetes/api/catalogo/provincias?vigente=true&idPais=' + event.target.value

            ProxyRequester.getResource(url)
                .then(response => {
                    setState({
                        ...state,
                        provincias: response.data,
                        ciudades: []
                    })
                })
                .catch(error => {
                    console.error(error)
                    $(".load").fadeIn(1400, () => {
                        dispatch(cambiarUrl({
                            urlNueva: "/error"
                        }))
                    });
                })
        }

        if (name === "provincia") {
            let data = {}
            data["ciudad"] = "";
            dispatch(setInformacionPersonal(data))

            let url = "/onboardingPaquetes/api/catalogo/ciudad?vigente=true&idPais=" + informacionPersonal.paisDeNac + "&idProvincia=" + event.target.value

            ProxyRequester.getResource(url)
                .then(response => {
                    setState({
                        ...state,
                        ciudades: response.data
                    })
                })
                .catch(error => {
                    console.error(error)
                    $(".load").fadeIn(1400, () => {
                        dispatch(cambiarUrl({
                            urlNueva: "/error"
                        }))
                    });
                })

        }
    };

    const handleChangeConyuge = name => event => {
        let data = {
            fieldName: name,
            value: event.target.value
        }

        if (name == "dni") {
            data.value = data.value.replace(/\s/g, "");
        }

        dispatch(setInformacionPersonalConyuge(data))
    };

    const onSubmit = () => {
        console.log("U SUBMITE")
    }

    const handleOnBlurDniApellido = name => event => {
        let { nombre, apellido, dni } = conyuge

        if (nombre !== "" && apellido !== "" && dni.length > 7) {
            dispatch(
                buscarCuil({
                    dni, nombre, apellido, type: "SET_CUIL_CONYUGE"
                })
            )
        }

        if (name == 'dni') {
            //si es extranjero seteo el arreglo de paises de todo el mundo
            if (conyuge.dni >= 60000000) {
                if (state.paises.length > 1) {
                    setPaisesConyuge(state.paises)
                } else {
                    setPaisesConyuge(state.paisesConyugeSecondOption)
                }
                //si previamente eligio dni de argentina pero luego lo cambio a extranjero, limpio
                if (paisesConyuge.length == 1) {
                    let data = {
                        fieldName: "idNacionalidad",
                        value: ""
                    }
                    dispatch(setInformacionPersonalConyuge(data))

                    let data2 = {
                        fieldName: "idPaisNacimiento",
                        value: ""
                    }
                    dispatch(setInformacionPersonalConyuge(data2))
                }
            } else if (conyuge.dni != "") {
                if (state.paises.length == 1) {
                    setPaisesConyuge(state.paises)
                } else {
                    setPaisesConyuge(state.paisesConyugeSecondOption)
                }
                let data = {
                    fieldName: "idNacionalidad",
                    value: "80"
                }
                dispatch(setInformacionPersonalConyuge(data))

                let data2 = {
                    fieldName: "idPaisNacimiento",
                    value: "80"
                }
                dispatch(setInformacionPersonalConyuge(data2))
            }
        }

    };

    const setRespuestaUnaLetra = (modalType, respuesta) => () => {
        let data = {}

        if (modalType === "openNombre") {
            setOpenNameOpenedCount(++openNameOpenedCount);
            data = {
                fieldName: "isNombreDeUnaLetra",
                value: respuesta
            }
        } else {
            setOpenApellidoOpenedCount(++openApellidoOpenedCount);
            data = {
                fieldName: "isApellidoDeUnaLetra",
                value: respuesta
            }
        }

        setOpenModal(modalType, false)
        dispatch(setInformacionPersonalConyuge(data))
    }

    const handleModal = (key, flag, cb = null) => () => {

        setOpenModal(key, flag)

        if (cb !== null) cb()
    }

    /*FIN DE FUNCIONES */

    let clipLoader = null
    if (state.buscandoCiudades) {
        clipLoader = <ClipLoader css={{ float: "right", marginTop: "-67px" }} color={'#f47321'} />
    }

    let conyugeBoxStyle = {}
    if (!state.showConyuge) {
        conyugeBoxStyle = { display: "none" }
    }

    const { openNombre, openApellido, openEjemplar } = state

    return (
        <div className="ip">
            <div className="ip-container">
                <ValidatorForm ref={r => formRef = r}
                    onSubmit={zaraza => onSubmit()}
                    onError={errors => onSubmit()}
                    className={classes.formBox} >
                    <Grid container >
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Pais de Nacimiento"
                                    validators={['required']}
                                    errorMessages={['Pais de nacimiento requerido']}
                                    onChange={handleChange('paisDeNac')}
                                    value={informacionPersonal.paisDeNac}
                                    inputProps={{
                                        name: 'paisDeNac',
                                        id: 'paisDeNac'
                                    }}
                                >
                                    {
                                        state.paises.map((pais) => (
                                            <MenuItem key={pais.id} value={pais.id}>
                                                {pais.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Nacionalidad"
                                    validators={['required']}
                                    errorMessages={['Nacionalidad requerida']}
                                    onChange={handleChange('nacionalidad')}
                                    value={informacionPersonal.nacionalidad}
                                    inputProps={{
                                        name: 'nacionalidad',
                                        id: 'nacionalidad'
                                    }}
                                >
                                    {
                                        state.paises.map((pais) => (
                                            <MenuItem key={pais.id} value={pais.id}>
                                                {pais.nacionalidad}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Provincia de nacimiento"
                                    validators={['required']}
                                    disabled={state.provincias.length == 0}
                                    errorMessages={['Provincia de nacimiento requerido']}
                                    onChange={handleChange('provincia')}
                                    value={informacionPersonal.provincia}
                                    inputProps={{
                                        name: 'provincia',
                                        id: 'provincia'
                                    }}
                                >
                                    {
                                        state.provincias.length != 0 ?
                                            state.provincias.map((provincia) => (
                                                <MenuItem key={provincia.id} value={provincia.id}>
                                                    {provincia.descripcion}
                                                </MenuItem>
                                            ))
                                            :
                                            null
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Ciudad de nacimiento"
                                    validators={['required']}
                                    disabled={state.ciudades.length == 0}
                                    errorMessages={['Ciudad de nacimiento requerido']}
                                    onChange={handleChange('ciudad')}
                                    value={informacionPersonal.ciudad}
                                    inputProps={{
                                        name: 'ciudad',
                                        id: 'ciudad'
                                    }}
                                >
                                    {
                                        state.ciudades.length != 0 ?
                                            state.ciudades.map((ciudad) => (
                                                <MenuItem key={ciudad.id} value={ciudad.descripcion}>
                                                    {ciudad.descripcion}
                                                </MenuItem>
                                            ))
                                            :
                                            null
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={corazonImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Estado civil"
                                    validators={['required']}
                                    errorMessages={['Estado civil requerido']}
                                    onChange={handleChange('estadoCivil')}
                                    value={informacionPersonal.estadoCivil}
                                    inputProps={{
                                        name: 'estadoCivil',
                                        id: 'estadoCivil'
                                    }}
                                >
                                    {
                                        state.estadosCiviles.map((estadoCivil) => (
                                            <MenuItem key={estadoCivil.id} value={estadoCivil.id}>
                                                {estadoCivil.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter} style={conyugeBoxStyle}>
                            <img src={corazonImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox} style={conyugeBoxStyle}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Unión civil"
                                    validators={['required']}
                                    errorMessages={['Unión civil requerida']}
                                    onChange={handleChange('unionCivil')}
                                    value={informacionPersonal.unionCivil}
                                    inputProps={{
                                        name: 'unionCivil',
                                        id: 'unionCivil'
                                    }}
                                >
                                    {
                                        state.unionesCiviles.map((unionCivil) => (
                                            <MenuItem key={unionCivil.id} value={unionCivil.id}>
                                                {unionCivil.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter} style={conyugeBoxStyle}>
                            <img src={corazonImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox} style={conyugeBoxStyle}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Nupcias"
                                    validators={['required']}
                                    errorMessages={['Nupcias requerido']}
                                    onChange={handleChange('nupcias')}
                                    value={informacionPersonal.nupcias}
                                    inputProps={{
                                        name: 'nupcias',
                                        id: 'nupcias'
                                    }}
                                >
                                    {
                                        state.nupcias.map((nupcia) => (
                                            <MenuItem key={nupcia.id} value={nupcia.id}>
                                                {nupcia.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={corazonImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Nivel de estudios"
                                    validators={['required']}
                                    errorMessages={['Nivel de estudios requerido']}
                                    onChange={handleChange('nivelDeEstudios')}
                                    value={informacionPersonal.nivelDeEstudios}
                                    inputProps={{
                                        name: 'nivelDeEstudios',
                                        id: 'nivelDeEstudios'
                                    }}
                                >
                                    {
                                        state.nivelesDeEstudio.map((estudio) => (
                                            <MenuItem key={estudio.id} value={estudio.id}>
                                                {estudio.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <p className={classes.sectionTitle}>Datos personales</p>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={maletinImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Situacion laboral"
                                    validators={['required']}
                                    errorMessages={['Situación laboral requerido']}
                                    onChange={handleChange('situacionLaboral')}
                                    value={informacionPersonal.situacionLaboral}
                                    inputProps={{
                                        name: 'situacionLaboral',
                                        id: 'situacionLaboral'
                                    }}
                                >
                                    {
                                        state.listaSituacionLaboral.map((situacionLaboral) => (
                                            <MenuItem key={situacionLaboral.id} value={situacionLaboral.idReferencia}>
                                                {situacionLaboral.nombre}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Teléfono laboral"
                                name="telefonoLaboral"
                                value={informacionPersonal.telefonoLaboral}
                                validators={['required', 'minStringLength:10', 'maxStringLength:10']}
                                errorMessages={['Teléfono laboral requerido', "Debe tener 10 digitos", "Debe tener 10 digitos"]}
                                onChange={handleChange('telefonoLaboral')}
                                onKeyPress={handleKeyPressNum}
                                onPaste={handlePasteNum}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={conyugeBoxStyle} >
                        <Grid item xs={12}>
                            <p className={classes.sectionTitle}>Datos de tu cónyuge</p>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={personaSvg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Nombre"
                                name="nombre"
                                error={!isNombreUnaLetraOk() && openNameOpenedCount != 0}
                                value={conyuge.nombre}
                                validators={['required']}
                                errorMessages={['Nombre requerido']}
                                onChange={handleChangeConyuge('nombre')}
                                onKeyPress={handleKeyPressText}
                                onPaste={handlePasteText}
                                onBlur={handleOnBlurDniApellido("nombre")}
                            />
                            {
                                !isNombreUnaLetraOk() && openNameOpenedCount != 0 ?
                                    <span className={classes.unCharError}>
                                        Ingrese un nombre que tenga más de un caracter
                                    </span>
                                    :
                                    null
                            }
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Apellido"
                                name="apellido"
                                error={!isApellidoUnaLetraOk() && openApellidoOpenedCount != 0}
                                value={conyuge.apellido}
                                validators={['required']}
                                errorMessages={['Apellido requerido']}
                                onChange={handleChangeConyuge('apellido')}
                                onKeyPress={handleKeyPressText}
                                onPaste={handlePasteText}
                                onBlur={handleOnBlurDniApellido("apellido")}
                            />

                            {
                                !isApellidoUnaLetraOk() && openApellidoOpenedCount != 0 ?
                                    <span className={classes.unCharError}>
                                        Ingrese un apellido que tenga más de un caracter
                                    </span>
                                    :
                                    null
                            }
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={dniSvg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="Número de DNI"
                                name="dni"
                                value={conyuge.dni}
                                validators={['required', 'isNumber', 'minStringLength:7']}
                                errorMessages={['DNI requerido', "Ingresá un valor numerico", 'El DNI debe contener al menos 7 dígitos']}
                                onChange={handleChangeConyuge('dni')}
                                onKeyPress={handleKeyPressNum}
                                onPaste={handlePasteNum}
                                onBlur={handleOnBlurDniApellido("dni")}
                                inputProps={{ maxLength: 8 }}
                            />
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={11} md={5} className={classInputBoxFlex} >
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Ejemplar"
                                    validators={['required']}
                                    errorMessages={['Ejemplar requerido']}
                                    onChange={handleChangeConyuge('ejemplarDocumento')}
                                    value={conyuge.ejemplarDocumento}
                                    inputProps={{
                                        name: 'ejemplarDocumento',
                                        id: 'ejemplarDocumento'
                                    }}
                                >
                                    {
                                        state.ejemplares.map(ejemplar => (
                                            <MenuItem key={ejemplar.id} value={ejemplar.id}>
                                                {ejemplar.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                            <HelpOutlineIcon className={classes.modalEjemplarIcon} onClick={handleModal("openEjemplar", true)} />
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={cuilSvg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <TextValidator
                                fullWidth
                                label="CUIL/CUIT"
                                name="idTributario"
                                value={conyuge.idTributario}
                                validators={['required', 'isNumber']}
                                errorMessages={['CUIL/CUIT requerido', "Ingresá un valor numerico"]}
                                onChange={handleChangeConyuge('idTributario')}
                                onKeyPress={handleKeyPressNum}
                                onPaste={handlePasteNum}
                                onBlur={handleOnBlurDniApellido}
                                inputProps={{ maxLength: 11 }}
                            />
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={generoSvg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Genero"
                                    validators={['required']}
                                    errorMessages={['Género requerido']}
                                    onChange={handleChangeConyuge('genero')}
                                    value={conyuge.genero}
                                    error={!isGeneroOk}
                                    inputProps={{
                                        name: 'ejemplarDocumento',
                                        id: 'ejemplarDocumento'
                                    }}
                                >
                                    {
                                        state.generos.map(genero => (
                                            <MenuItem key={genero.id} value={genero.id}>
                                                {genero.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                    <MenuItem value={-1}>Seleccioná</MenuItem>
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Pais de Nacimiento"
                                    validators={['required']}
                                    errorMessages={['Pais de nacimiento requerido']}
                                    onChange={handleChangeConyuge('idPaisNacimiento')}
                                    value={conyuge.idPaisNacimiento}
                                    inputProps={{
                                        name: 'idPaisNacimiento',
                                        id: 'idPaisNacimiento'
                                    }}
                                >
                                    {
                                        paisesConyuge.map((pais) => (
                                            <MenuItem key={pais.id} value={pais.id}>
                                                {pais.descripcion}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} className={classes.svgCenter}>
                            <img src={planetaImg} />
                        </Grid>
                        <Grid item xs={11} md={5} className={classes.inputBox}>
                            <FormControl fullWidth>
                                <SelectValidator
                                    label="Nacionalidad"
                                    validators={['required']}
                                    errorMessages={['Nacionalidad requerida']}
                                    onChange={handleChangeConyuge('idNacionalidad')}
                                    value={conyuge.idNacionalidad}
                                    inputProps={{
                                        name: 'idNacionalidad',
                                        id: 'idNacionalidad'
                                    }}
                                >
                                    {
                                        paisesConyuge.map((pais) => (
                                            <MenuItem key={pais.id} value={pais.id}>
                                                {pais.nacionalidad}
                                            </MenuItem>
                                        ))
                                    }
                                </SelectValidator>
                            </FormControl>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </div>
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

        </div >
    )
})

export default InformacionPersonal;
