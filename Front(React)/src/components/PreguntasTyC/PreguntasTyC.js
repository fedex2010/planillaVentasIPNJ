//Dependencies
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
//material
import Checkbox from '@material-ui/core/Checkbox';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

//components
import terminosImg from "../../images/preguntas-tyc/terminos.png"
import BuhoBankButton from "../Common/BuhoBankButton"
import Legal from './Legal';
import GenericModal from '../Common/GenericModal'


//action
import {
    showLoading,
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"

import $ from 'jquery';

import {
    setTyc,
    finalizarVenta
} from "../../reducers/PreguntasTyC/PreguntasTyCActions"

import { statement } from '@babel/template';

const GreenCheckbox = withStyles({
    root: {
        marginBottom: 3,
        color: "#66b843",
        '&$checked': {
            color: "#66b843"
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    container: {
        marginTop: 25
    },
    dataBox: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    mainText: {
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Roboto",
        color: "#606162",
        textAlign: "center"
    },
    enviaremosText: {
        marginBottom: 30,
        marginTop: 10,
        fontSize: "18px",
        color: "#9b9b9b"
    },
    aceptoText: {
        marginBottom: 20,
        fontSize: "16px",
        fontFamily: "Roboto",
        color: "#9b9b9b",
        textAlign: "center"
    },
    terminosLink: {
        color: "#f37320",
        textDecoration: "underline",
        cursor: "pointer"
    },
    terminosImg: {
        width: 200,
        height: 138,
        marginTop: "30px",
        marginBottom: "30px"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    }
}))


const PreguntasTyC = () => {
    const classes = useStyles();
    const tycPreguntas = useSelector(state => state.tycPreguntas)

    const dispatch = useDispatch()

    let [state, setState] = useState({
        aceptoTerminos: false,
        open: false,
        openTyc: false
    })

    const handleModal = (key, flag, cb = null) => () => {

        setOpenModal(key, flag)

        if (cb !== null) cb()
    }

    const setOpenModal = (key, flag) => {
        let newState = { ...state }
        newState[key] = flag

        setState(newState)
    }

    useEffect(() => {
        $(".load").fadeOut(700);
    }, []);

    const handleChange = () => {
        dispatch(setTyc(!tycPreguntas.aceptoTerminos))

        setState({ aceptoTerminos: !state.aceptoTerminos })
    }

    const tyc = () => {
        $(".load").fadeIn(700, () => {
            dispatch(finalizarVenta())
        });
    }

    const verModal = () => {
        alert("HOAOA")
    }

    const handleDrawerClose = () => {
        setState({
            ...state,
            open: !state.open
        });
    };


    const { openTyc } = state

    return (
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <img src={terminosImg} className={classes.terminosImg} />

                <span className={classes.mainText}>
                    Listo, para finalizar aceptá
                </span>
                <span className={classes.mainText}>
                    los Términos y Condiciones
                </span>

                <span className={classes.enviaremosText}>
                    Te los enviaremos adjuntos a tu email.
                </span>


                <span className={classes.aceptoText}>
                    <GreenCheckbox checked={tycPreguntas.aceptoTerminos} onChange={handleChange} value={state.aceptoTerminos} />
                    <span className={classes.containerGeneral}>
                        Acepto los <a  onClick={handleModal("openTyc", true)} className={classes.terminosLink}>Términos y Condiciones</a>
                    </span>
                    <span> del producto y <a className={classes.terminosLink} href="https://www.hipotecario.com.ar/personas/comisiones-cargos-y-tasas/" target="_blank">anexo</a></span>
                </span>
                <BuhoBankButton disabled={!tycPreguntas.aceptoTerminos} onClick={tyc} text={"Finalizar"} />
            </section>

            <GenericModal open={openTyc} dialogSize={true}>
                <span>Términos y condiciones</span>
                <Legal />
                <Button onClick={handleModal("openTyc", false)}>
                    Cerrar
                </Button>
            </GenericModal>
        </section>
    )
};

export default PreguntasTyC;