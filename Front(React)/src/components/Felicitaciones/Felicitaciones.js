//Dependencies
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'

//actions
import {
    showLoading,
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"

//material
import Button from '@material-ui/core/Button';

//components
import okImg from "../../images/felicitaciones/ok-icon.png"
import BuhoBankButton from "../Common/BuhoBankButton"
import $ from 'jquery';
import GenericModal from '../Common/GenericModal'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 75
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
        textAlign: "center",
        position: "relative"
    },
    enviaremosText: {
        fontFamily: "Roboto",
        marginBottom: 60,
        marginTop: 30,
        fontSize: "18px",
        color: "#9b9b9b",
        textAlign: "center"

    },
    aceptoText: {
        marginBottom: 20,
        fontSize: "16px",
        fontFamily: "Roboto-Bold",
        color: "#9b9b9b",
        textAlign: "center"
    },
    terminosLink: {
        color: "#f37320",
        textDecoration: "underline",
        cursor: "pointer"
    },
    okImg: {
        width: 100,
        height: 100,
        marginTop: "30px",
        marginBottom: "30px"
    },
    linkModalDomicilio: {
        fontSize: "14px",
        margin: 0,
        cursor: "pointer",
        position: "absolute",
        top: "500px"
    }
}))

const Felicitaciones = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const formaDeEntrega = useSelector(state => state.formaDeEntrega);

    const [state, setState] = useState({
        openDomicilioModal: false
    })

    const datosBasicos = useSelector(state => state.datosBasicos)

    const aHomeBanking = () => {
        window.location.href = "https://hb.hipotecario.com.ar/hb/#/"
    }

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
        $(".load").fadeOut(1400);
    }, []);


    const { openDomicilioModal } = state;

    return (
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <img src={okImg} className={classes.okImg} />

                <span className={classes.mainText}>
                    ¡Bienvenido {datosBasicos.nombre}! <br />
                    Revisá tu mail
                </span>

                <span className={classes.enviaremosText}>
                    Te enviamos la información de entrega <br />
                    de tus tarjetas a: <b>{datosBasicos.email}</b>
                </span>
            </section>

            {
                formaDeEntrega.formaDeEntrega == 2 || formaDeEntrega.formaDeEntrega == 3 ?
                    <div className={[classes.linkModalDomicilio, classes.enviaremosText].join(" ")} onClick={handleModal("openDomicilioModal", true)}>
                        ¿Qué pasa si el titular de la tarjeta no está
            presente en el domicilio para recibirla?</div>
                    :
                    null
            }

            <GenericModal open={openDomicilioModal} dialogSize={true}>
                <span>¿Qué pasa si el titular de la tarjeta no
			está presente en el domicilio para recibirla?</span>
                <span>
                    Si en la tercera visita el correo no encuentra al titular, se
                volverá a enviar la tarjeta junto con el contrato luego
                de aproximadamente 30 días. En este caso el envío puede
                ser recibido por cualquier mayor de 18 años presentando
                su DNI, pero la tarjeta no quedará habilitada
                automáticamente. Para finalizar el trámite, el
                titular deberá acercarse a cualquier Sucursal del Banco Hipotecario
                o Correo Andreani y entregar el contrato firmado y fotocopia de su
                DNI. Después de analizar la documentación
                recibida, se desbloqueará el plástico y el usuario podrá
                habilitar su Tarjeta de Crédito llamando a los siguientes
                números: 4379-3440(CABA y GCBA), o 0810-999-8472
                (Interior del país).
                </span>
                <Button onClick={handleModal("openDomicilioModal", false)}>
                    Cerrar
                </Button>
            </GenericModal>

        </section>
    )
};

export default Felicitaciones;