//Dependencies
import React, { useEffect } from 'react';
import $ from 'jquery';

//material
import { makeStyles } from '@material-ui/core/styles';

//image
import linkHeader from '../../images/linkFooter/header_Legales.png'

//components
import Ttyc from './Ttyc.js'
import Rar from './Rar.js'
import Pdp from './Pdp.js';

const useStyles = makeStyles(theme => ({
    headerImg: {
        width: "100%"
    },
    container: {
        position: "relative",
        textAlign: "center",
        color: "white",
        fontFamily: "Roboto, sans-serif",
        fontSize: "52px"
    },
    centered: {
        position: "absolute",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    bodyStyle: {
        width: "70%",
        minHeight: "200px",
        margin: "auto",
        textAlign: "justify",
        lineHeight: "1.5",
        fontFamily: "Roboto, sans-serif",
        fontWeight: "normal"
    },
    '@media  screen and (max-width: 900px)': {
        container: {
            fontSize: "35px"
        },
        bodyStyle: {
            width: "85%",
        }
    },
    '@media  screen and (max-width: 600px)': {
        container: {
            fontSize: "28px"
        }
    },
    '@media  screen and (max-width: 400px)': {
        container: {
            fontSize: "20px"
        }
    }

}))

const LinkFooter = props => {

    const classes = useStyles();

    let headerText;
    let bodyText;

    switch (props.footerLink) {
        case 'pdp':
            headerText = "Protección de datos personales";
            bodyText = <Pdp/>;
            break;
        case 'rar':
            headerText = "Responsables de atención a reclamos";
            bodyText = <Rar/>
            break;
        case 'ttyc':
            headerText = "Términos y Condiciones Generales";
            bodyText = <Ttyc/>;
            break;
    }

    console.dir(bodyText)


    useEffect(() => {
        $(".load").fadeOut();
    }, []);


    return (
        <div>
            <div className={classes.container}>
                <img className={classes.headerImg} src={linkHeader} />
                <div className={classes.centered}>{headerText}</div>
            </div>
            <div className={classes.bodyStyle}>
                {bodyText}
            </div>
        </div>
    )
};

export default LinkFooter;