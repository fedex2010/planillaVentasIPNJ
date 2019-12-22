//Dependencies
import React from 'react';


//material
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    subTitle: {
        fontWeight: "600",
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
    },
    textDescription: {
        marginTop: "0px"
    }
}))

const Pdp = props => {
    const classes = useStyles();

    return (

        <div>
            <p>
                CON MOTIVO DEL ART. 6° DE LA LEY N° 25.326, AUTORIZO AL BANCO A REGISTRAR MIS DATOS
                 PERSONALES Y PRESTO CONFORMIDAD PARA QUE SEAN UTILIZADOS PARA LA CONSIDERACIÓN DE
                  CUALQUIER PRODUCTO O SERVICIO QUE PUEDA SOLICITAR AL BANCO Y/O A CUALQUIERA DE SUS
                  SOCIEDADES CONTROLANTES, CONTROLADAS, SUJETAS A CONTROL COMÚN Y/O VINCULADAS, PARA
                  EL PROCESAMIENTO DE LAS RESPECTIVAS OPERACIONES, Y PARA CUALQUIER OFRECIMIENTO QUE
                  EL BANCO Y SUS SOCIEDADES CONTROLANTES, CONTROLADAS, SUJETAS A CONTROL COMÚN Y/O
                   VINCULADAS PUEDAN EFECTUARLE EN EL FUTURO, QUEDÁNDOLES VEDADA TODA OTRA UTILIZACIÓN
                  DE LOS DATOS.
            </p>
        </div>

    )
};

export default Pdp;