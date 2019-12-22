//config
import config from '../../config/config';

//Dependencies
import React, { useState, useRef, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery';

//material
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
    textSub: {
        fontWeight: "600",
        fontFamily: "Roboto, sans-serif"
    },
    containerImage: {
        textAlign: "center",
        margin: "20px 0px 20px 0px"
    },
    containerItem: {
        margin: "0px 0px 20px 0px",
        textAlign: "left"
    },
    aLink: {
        textDecoration: "none",
        color: "#f47321"
    },
    mailStyle: {
        fontSize: "10px"
    }
}))

const Rar = props => {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} container direction="row" spacing={8}>
                    <Grid item xs={12} md={4}>
                        <div className={classes.containerImage}>
                            <FontAwesomeIcon style={{ width: '50px', height: '50px', color: '#666666' }} icon={faPhoneAlt} size="xl" />
                        </div>
                        <div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Por teléfono:</span> Centro de atención al cliente: 0810-222-2472/0800-666-1009.</div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Desde el exterior:</span> (5411) 4335-1675 - En sucursales: Tótem telefónico</div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Por fax:</span> 0810-222-2328.</div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.containerImage}>
                            <FontAwesomeIcon style={{ width: '50px', height: '50px', color: '#666666' }} icon={faDesktop} size="xl" />
                        </div>
                        <div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Por internet:</span> A través del portal del Banco Hipotecario: <a className={classes.aLink} href="https://www.hipotecario.com.ar/" target="_blank">www.hipotecario.com.ar</a></div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Por escrito:</span> En la mesa general de entrada, sucursales y stand de ventas - Hipermercado Libertad.</div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Por correo postal:</span> Reconquista 151(C1003ABC) Capital Federal.</div>

                            <div className={classes.containerItem}><span className={classes.textSub}>Por correo electronico:</span> <span className={classes.mailStyle}>responsablesatencionusuarios@hipotecario.com.ar</span></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.containerImage}>
                            <FontAwesomeIcon style={{ width: '60px', height: '60px', color: '#666666' }} icon={faUserFriends} size="xl" />
                        </div>
                        <div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Responsable titular:</span> Paola Feller / responsablesatencionusuarios@hipotecario.com.ar - Tel.: (54 11) 4346-2799 / Fax: 0810-222-2328.</div>        
                            <div className={classes.containerItem}><span className={classes.textSub}>Responsable suplente:</span> Fernanda Riboldi / <span className={classes.mailStyle}>responsablesatencionusuarios@hipotecario.com.ar</span> - Tel.: (54 11) 4346-2799 / Fax: 0810-222-2328.</div>
                            <div className={classes.containerItem}><span className={classes.textSub}>Responsable suplente:</span> Lucas Javier Rodríguez Santillán / <span className={classes.mailStyle}>responsablesatencionusuarios@hipotecario.com.ar</span> - Tel.: (54 11) 4346-2799 / Fax: 0810-222-2328.</div>
                        </div>


                    </Grid>

                </Grid>
            </Grid>




        </div>

    )
};

export default Rar;