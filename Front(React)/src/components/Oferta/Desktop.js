//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


//Material
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


//Components
import Beneficios from "./Detalle/Beneficios";
import Tarjeta from "./Detalle/Tarjeta";
import Aerolineas from "./Detalle/Aerolineas";
import Importes from "./Detalle/Importes";
import SubmitButton from './Detalle/SubmitButton';

//Actions
import {
    setDataBeneficio
} from "../../reducers/BeneficiosShow/BeneficioActions"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        letterSpacing: "normal",
    },
    appbar: {
        alignItems: 'center',
        backgroundColor: "white",
        width: "100%"
    },
    tabsSize: {
        width: "100%"
    },
    tabSize: {
        width: "50%",
        maxWidth: "none !important"
    },
    emprendedorHeaderTabCommon: {
        fontSize: "14px",
        lineHeight: "1.41",
        textAlign: "center",
        opacity: "1 !important"
    },
    emprendedorHeaderTabBlack: {
        color: "#b29f70 !important",
        backgroundColor: "#000000"
    },
    emprendedorHeaderTabOthers: {
        color: "#ffffff !important",
        backgroundColor: "#90d0c0"
    },
    indicator: {
        backgroundColor: '#b29f70'
    },
    emprendedorContainerSubmit: {
        textAlign: "center"
    },
    emprendedorPlatinumComparator: {
        backgroundColor: "#989a9c",
    },
    emprendedorGoldComparator: {
        backgroundColor: "#d0a64c"
    },
    emprendedorBuhoComparator: {
        backgroundColor: "#f47524"
    },
    emprendedorIndicator: {
        backgroundColor: '#ffffff',
    },
    tabInactive: {
        color: "rgba(255, 255, 255, 0.5) !important"
    },
    divisorLine: {
        width: "1px",
        borderRight: "solid 1.1px #e2e2e2",

        maxHeight: "300px",
        height: "100%"
    },
    containerDivisorLine: {
        paddingTop: "52px"
    },
    paddingContainerMulti: {
        '& div': {
            padding: '0px'
        }
    },
    paddingContainerSubmit: {
        padding: "0px 0px 0px 271px",
        margin: "61px 0px 30px 0px"
    },
    distanceTop: {
        marginTop: "68px"
    },
    benefSizeMultiDesktop: {
        minHeight: "350px"
    },
    separationLineDivisor: {
        marginLeft: "-42px"
    }
}));

function Desktop(props) {
    const classes = useStyles();
    let beneficioShow = useSelector(state => state.beneficio);
    const dispatch = useDispatch();

    const changeStyleActive = valTab => event => {
        let objSend = {
            isBeneficioClicked: valTab
        };
        dispatch(setDataBeneficio(objSend))
    }

    function handleChange(event, newValue) {       
        let objSend = {
            isDetalleClicked: newValue
        };
        dispatch(setDataBeneficio(objSend))
    }

    return (
        <div>
            {!props.isEmprendedor ?
                //oferta si no es emprendedor
                <div className={[classes.root, classes.containerDesktop].join(" ")}>
                    <Grid container>
                        <Grid item xs={12} container
                            direction="row">
                            <Grid item xs={6}>
                                <Tarjeta screenSize={props.screenSize} namePackWord={props.namePackWord}
                                    limitCard={props.limitCard} products={props.products} isCardEmp={props.isCardEmp}
                                    creditCardDesc={props.creditCardDesc} packageSelected={props.packageSelected} />
                                <Aerolineas screenSize={props.screenSize} aerolineasDesc={props.aerolineasDesc}
                                    creditCardDesc={props.creadiCardDesc} packageSelected={props.packageSelected} />
                            </Grid>
                            <Grid item xs={1} className={classes.containerDivisorLine}>
                                <div className={classes.divisorLine} />
                            </Grid>
                            <Grid item xs={5} className={classes.separationLineDivisor}>
                                <Beneficios screenSize={props.screenSize} benefits={props.benefits} packageSelected={props.packageSelected} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container item xs={6} className={classes.paddingContainerSubmit}>
                            <SubmitButton packageSelected={props.packageSelected} />
                        </Grid>
                        <Grid container item xs={6}>
                            <Importes screenSize={props.screenSize} creenSize={props.screenSize}
                                cost={props.cost} isMultipleOffer={props.isMultipleOffer} />
                        </Grid>
                    </Grid>
                </div>
                :
                //multioferta si es emprendedor
                <div className={classes.root}>
                    <AppBar position="static" className={classes.appbar}>
                        <Tabs value={beneficioShow.isDetalleClicked} onChange={handleChange} aria-label="simple tabs example"
                            className={classes.tabsSize}
                            classes={{
                                indicator: props.namePackWord.includes("Black") ? classes.indicator : classes.emprendedorIndicator
                            }}>
                            <Tab label="Detalle" {...a11yProps(0)}
                                className={[classes.tabSize, classes.emprendedorHeaderTabCommon,
                                props.namePackWord.includes("Black") ? classes.emprendedorHeaderTabBlack : classes.emprendedorHeaderTabOthers,
                                props.styleEmprendedorComparator != null ? classes[props.styleEmprendedorComparator] : "",
                                !beneficioShow.isBeneficioClicked ? classes.tabInactive : ""].join(" ")}
                                onClick={changeStyleActive(true)}
                            />
                            <Tab label="Beneficios" {...a11yProps(1)}
                                className={[classes.tabSize, classes.emprendedorHeaderTabCommon,
                                props.namePackWord.includes("Black") ? classes.emprendedorHeaderTabBlack : classes.emprendedorHeaderTabOthers,
                                props.styleEmprendedorComparator != null ? classes[props.styleEmprendedorComparator] : "",
                                beneficioShow.isBeneficioClicked ? classes.tabInactive : ""].join(" ")}
                                onClick={changeStyleActive(false)}
                            />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={beneficioShow.isDetalleClicked} index={0} className={classes.paddingContainerMulti}>
                        <Tarjeta screenSize={props.screenSize} namePackWord={props.namePackWord} isEmprendedor={props.isEmprendedor}
                            limitCard={props.limitCard} products={props.products} isCardEmp={props.isCardEmp}
                            creditCardDesc={props.creditCardDesc} packageSelected={props.packageSelected} />
                        <Aerolineas screenSize={props.screenSize} isMultipleOffer={props.isMultipleOffer}
                            aerolineasDesc={props.aerolineasDesc} packageSelected={props.packageSelected} />
                        <Grid container direction="row">
                            <Grid item xs={12}>
                                <Importes screenSize={props.screenSize} isEmprendedor={props.isEmprendedor} cost={props.cost}
                                    isMultipleOffer={props.isMultipleOffer} />
                            </Grid>
                            <Grid item xs={12} className={classes.emprendedorContainerSubmit} align='center'>
                                <SubmitButton packageSelected={props.packageSelected} />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={beneficioShow.isDetalleClicked} index={1}>
                        <div className={classes.benefSizeMultiDesktop}>
                            <Beneficios screenSize={props.screenSize} benefits={props.benefits} packageSelected={props.packageSelected} />
                        </div>
                        <div className={classes.distanceTop}>
                            <SubmitButton packageSelected={props.packageSelected} />
                        </div>
                    </TabPanel>
                </div>
            }
        </div>


    );
}

export default Desktop;