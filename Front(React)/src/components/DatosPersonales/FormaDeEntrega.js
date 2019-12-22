
//Dependencies
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//material-ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import GoogleApiWrapper from "./GoogleApiWrapper"

import $ from 'jquery';

//actions
import { cambiarUrl } from "../../reducers/Navegacion/NavegacionActions"

import {
    setFormaDeEntrega,
    setNuevaSucursal,
    setNuevoDomicilo
} from "../../reducers/DatosPersonales/DatosPersonalesActions"
import {
    buscarLocalidadesDomicilio
} from "../../reducers/Common/CommonActions"


import ProxyRequester from '../Common/comunication/ProxyRequester'

//components
import Domicilio from "./Domicilio"
//import Maps from "./Maps"

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
    },
    inputBox: {
        padding: "10px 10px 10px 10px"
    },
    sectionTitle: {
        borderLeft: "#f47321 solid 5px",
        paddingLeft: "10px",
        marginTop: 30
    },
    domicilioContainer: {
        minHeight: 200,
        [theme.breakpoints.up('sm')]: {
            marginBottom: 50
        }
    }
}))

const FormaDeEntrega = forwardRef((props, ref) => {
    const classes = useStyles();
    const domicilio = useSelector(state => state.domicilio)
    const dispatch = useDispatch()
    const formaDeEntrega = useSelector(state => state.formaDeEntrega)
    const domicilioRef = useRef();
    const [invalidOption, setInvalidOption] = useState(false)

    useImperativeHandle(ref, () => ({
        isDataOk() {
            return isDataOk()
        },
        forceSubmit() {
            return forceSubmit()
        }
    }));

    const isDataOk = () => {
        //en sucursal o domicilio
        if (formaDeEntrega.formaDeEntrega === 1 || formaDeEntrega.formaDeEntrega === 2) {
            return true
        }

        if (formaDeEntrega.formaDeEntrega === 0) {
            setInvalidOption(true)
            return false
        }

        //valido nuevo domicilio
        return domicilioRef.current.isDataOk()
    }

    const forceSubmit = () => {
        domicilioRef.current.forceSubmit()
    }

    const obtenerDomicilio = () => {
        let aDomicilio = domicilio.calle + " " + domicilio.numeroDomicilio

        return aDomicilio
    }
    let options = [
        { id: 0, name: "Seleccioná" },
        { id: 1, name: "Retiro en sucursal" },
        { id: 2, name: "Envio a domicilio" },
        { id: 3, name: "Envio a nuevo domicilio" }
    ]

    const [state, setState] = useState({
        provincias: [],
        dataSucursal: {}
    })

    useEffect(() => {
        Promise.all([
            ProxyRequester.getResource('/onboardingPaquetes/api/catalogo/provincias?vigente=true&idPais=80')
        ])
            .then(responses => {

                setState({
                    ...state,
                    provincias: responses[0].data
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
    }, [])



    const handleChangeNuevoDomicilio = event => {
        let { name, value } = event.target

        if ((name === "piso" && value.length > 2) ||
            (name === "departamento" && value.length > 3) ||
            (name === "codigo" && value.length > 4)) {
            return
        }


        let data = {
            fieldValue: name,
            value: value
        }

        if (name == "codigo" || name == "piso" || name == "numeroDomicilio") {
            data.value = data.value.replace(/\s/g, "");
        }


        dispatch(
            setNuevoDomicilo({
                data
            })
        )

        if (name === "codigo" && value.length === 4) {
            dispatch(buscarLocalidadesDomicilio({
                codigoPostal: value,
                type: "SET_LOCALIDADES_NUEVO_DOMICILIO"
            }))
        }
    };

    const handleChange = event => {
        let { name, value } = event.target

        let data = {}
        data[name] = value

        if (name === "sucursal") {
            dispatch(
                setNuevaSucursal({
                    sucursal: value
                })
            )
        } else {
            dispatch(
                setFormaDeEntrega({
                    data
                })
            )
        }

        setInvalidOption(false)

    };

    let showRetiroSuc = (formaDeEntrega.formaDeEntrega === 1) ? { display: "block" } : { display: "none" }
    let showDomicilio = (formaDeEntrega.formaDeEntrega === 2) ? { display: "block" } : { display: "none" }
    let showNuevoDomicilio = (formaDeEntrega.formaDeEntrega === 3) ? { display: "block" } : { display: "none" }

    //PARA HACER PSEUDO RESPONSIVE EL MAPA, REFACTORIZAR DENTRO DE UNA FUNCION
    let widthMaps = 400
    let heigthMaps = 250

    if (window.innerWidth < 880) {
        widthMaps = 330
        heigthMaps = 200
    }

    return (
        <div className="domicilio">
            <div className={classes.domicilioContainer}>
                <Grid container >

                    <Grid item xs={12} md={6} className={classes.inputBox} container>
                        <Grid item xs={12}>
                            <FormControl fullWidth className="domicilio-form-control">
                                <InputLabel htmlFor="age-simple">Forma de entrega</InputLabel>
                                <Select
                                    onChange={handleChange}
                                    value={formaDeEntrega.formaDeEntrega}
                                    name="formaDeEntrega"
                                    error={invalidOption}
                                >{
                                        options.map((value, key) => {
                                            return <MenuItem value={value.id} key={key}>{value.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} style={showDomicilio}>
                            <p className={classes.sectionTitle}>
                                {obtenerDomicilio()}
                            </p>
                        </Grid>
                        <Grid container item xs={12} style={showRetiroSuc}>
                            <Grid item xs={12} className={classes.inputBox} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <FormControl fullWidth className="domicilio-form-control">
                                    <InputLabel htmlFor="age-simple">Seleccioná una sucursal</InputLabel>
                                    <Select onChange={handleChange}
                                        value={formaDeEntrega.sucursal.codigoProvincia}
                                        name="sucursal"
                                    >{
                                            state.provincias.map((value, key) => {
                                                return <MenuItem value={value.id} key={key}>{value.descripcion}</MenuItem>
                                            })
                                        }
                                        <MenuItem value={-1}>Seleccioná</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} className={classes.inputBox} style={{ paddingLeft: 0, paddingRight: 0 }}>
                                <TextField
                                    fullWidth
                                    name="Direccion"
                                    value={formaDeEntrega.sucursal.domicilio}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} className={classes.inputBox} container>
                        <Grid item xs={12} style={showNuevoDomicilio}>
                            <p className={classes.sectionTitle}>Domicilio de entrega</p>
                        </Grid>
                        <Grid item xs={12} style={showNuevoDomicilio}>
                            <Domicilio formSubmitted={props.formSubmitted}
                                ref={domicilioRef}
                                data={formaDeEntrega.domicilioEnvio}
                                handleChange={handleChangeNuevoDomicilio} />
                        </Grid>
                    </Grid>
                    <div style={showRetiroSuc}>
                        <Grid item xs={12} md={6} className={classes.inputBox} style={{ height: "250px" }}>
                            <GoogleApiWrapper width={widthMaps} height={heigthMaps}
                                latitud={formaDeEntrega.sucursal.latitud}
                                longitud={formaDeEntrega.sucursal.longitud} />
                        </Grid>
                    </div>
                </Grid>

            </div>
        </div>
    );
})

export default FormaDeEntrega;