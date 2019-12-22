//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logoHipotecarioImg from '../images/logoHipotecario.png'
import Helper from './Common/Helper'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: 20,
        backgroundColor: "white",
        margin: "0 auto",

        width: theme.medidasSitio.mobileWidth,
        [theme.breakpoints.up('sm')]: {
            width: theme.medidasSitio.tabletWidth
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.medidasSitio.desktopWidth
        }
    },
    headerBox: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    }
}))

const Header = () => {
    const classes = useStyles();
    const urlWelcome= "/buhobank/tarjetas/"

    return (
        <div className={classes.mainContainer}>
            <div className={classes.headerBox}>
                    <a href={urlWelcome}>
                    <img style={{ width: 147, height: 52 }} src={logoHipotecarioImg} />
                    </a>
                <Helper />
            </div>
        </div>
    )
}

export default Header;