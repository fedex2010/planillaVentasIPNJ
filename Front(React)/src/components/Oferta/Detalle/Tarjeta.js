//Dependencies
import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { isMobileOnly, isTablet } from 'react-device-detect';
import { useSelector, useDispatch } from 'react-redux'


//material
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

//util
import tarjetaImageBlack from '../../../images/ofertas/tarjeta/tc-sign-buho.png';
import tarjetaImageBuho from '../../../images/ofertas/tarjeta/tc-white-buho.png';
import tarjetaImageGold from '../../../images/ofertas/tarjeta/tc-gold-buho.png';
import tarjetaImagePlatinum from '../../../images/ofertas/tarjeta/tc-plat-buho.png';
import checkedImage from '../../../images/ofertas/checked.png';



const useStyles = makeStyles(theme => ({
    styleImage: {
        width: "72px",
        height: "41px",
        marginRight: "13px"
    },
    styleImageCell: {
        width: "70px",
        height: "40px",
        marginRight: "13px"
    },
    tarjeta: {
        margin: "52px 0px 0px 58px"
    },
    tarjetaTablet: {
        margin: "37px 0px 0px 56px"
    },
    tarjetaMobile: {
        margin: "33px 0px 0px 22px"
    },

    tarjetaMulti: {
        margin: "35px 0px 0px 33px"
    },

    tarjetaTabletMulti: {
        margin: "41px 0px 0px 56px"
    },


    commonStyle: {
        fontFamily: "Roboto",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
    },
    tarjetaItems: {
        fontSize: "16px",
        color: "#616161",
    },
    tarjetaHeader: {
        margin: "0px 0px 4px 0px",
        color: "#333333"
    },
    tarjetaHeaderMobile: {
        margin: "0px",
        fontSize: "13px",
        color: "#333333"
    },
    tarjetaHeaderTablet: {
        fontSize: "18px",
    },
    tarjetaHeaderDesktop: {
        fontSize: "16px",
    },

    tarjetaMontoMobile: {
        fontWeight: "bold",
        fontSize: "14px"
    },
    poderCompraMobile: {
        fontSize: "10px !important"
    },

    tarjetaMontoTablet: {
        fontWeight: "bold",
        fontSize: "18px"
    },
    poderCompraTablet: {
        fontSize: "12px !important"
    },

    tarjetaMontoDesktop: {
        fontWeight: "bold",
        fontSize: "16px"
    },
    poderCompraDesktop: {
        fontSize: "10px !important"
    },

    tarjetaItemsDesktop: {
        fontSize: "13px",
        color: "#333333"
    },
    tarjetaItemsTablet: {
        fontSize: "15px",
        color: "#333333"
    },
    tarjetaItemsMobile: {
        fontSize: "12px",
        color: "#333333"
    },
    iconChecked: {
        width: "11px",
        height: "8px",
        opacity: "0.4",
        textAlign: "center",
        marginRight: "22px"
    },
    checkBoxStyle: {
        padding: "0px",
        width: "18px",
        margin: "0px 15px 32px 0px"
    },
    checkBoxUnchecked: {
        color: " blue"
    },
    divisorLine: {
        width: "401px",
        height: "1px",
        borderTop: "solid 1px #e2e2e2",
        margin: "10px 0px 10px -10px"
    },
    divisorLineTablet: {
        width: "632px"
    },
    divisorLineMobile: {
        width: "100%"
    },
    containerCTACTE: {
        height: "15px",
        margin: "0px 3px 32px -3px"
    }
}))

const Tarjeta = (props) => {
    const classes = useStyles();
    let oferta = useSelector(state => state.oferta);
    const [state, setState] = React.useState({
        ctaCteEmp: true,
        ctaCteInd: false
    });

    oferta[0].ctaCte = state.ctaCteInd;
    if (oferta[1] != undefined)
        oferta[1].ctaCte = state.ctaCteEmp;

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });

        oferta[0].ctaCte = state.ctaCteInd;
        if (oferta[1] != undefined)
            oferta[1].ctaCte = state.ctaCteEmp;
    };

    let itemsPackage = [
        {
            descripcion: "Tarjeta de Débito Visa",
            isAvailable: false
        },
        {
            descripcion: "Cuentas en Pesos y Dólares",
            isAvailable: false
        },
        {
            descripcion: "Cuenta Corriente en Pesos",
            isAvailable: false
        }
    ]

    let cajasCount = 0;
    props.products.forEach((item, index) => {
        switch (item.categoria) {
            case "CUENTA CORRIENTE": itemsPackage[2].isAvailable = true;
                break;
            case "CAJA DE AHORRO": if (item.moneda.descripcion == "DOLARES" || item.moneda.descripcion == "PESOS") cajasCount++;
                break;
            case "TARJETA DE DEBITO": itemsPackage[0].isAvailable = true;
                break;
        }
        if (cajasCount > 1)
            itemsPackage[1].isAvailable = true;
    });

    let imageCard;
    switch (true) {
        case props.namePackWord.includes("Black"): imageCard = tarjetaImageBlack;
            break;
        case props.namePackWord.includes("Platinum"): imageCard = tarjetaImagePlatinum;
            break;
        case props.namePackWord.includes("Gold"): imageCard = tarjetaImageGold;
            break;
        case props.namePackWord.includes("Buho"): imageCard = tarjetaImageBuho;
            break;
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12} container
                    direction="row" className={[classes.tarjeta, isTablet ? classes.tarjetaTablet : " ",
                    isMobileOnly ? classes.tarjetaMobile : " ", classes.commonStyle,
                    props.isMultipleOffer ? classes.tarjetaMulti : " ", props.isMultipleOffer && isTablet ? classes.tarjetaTabletMulti : " "].join(" ")}>
                    <Grid item container sm={12} direction="row" alignItems="center">

                        <img src={checkedImage} className={classes.iconChecked}></img>

                        <img src={imageCard} className={[isMobileOnly ? classes.styleImageCell : classes.styleImage].join(" ")}></img>

                        <Grid item xs={7}>
                            <p className={[classes["tarjetaHeader" + props.screenSize], classes.tarjetaHeader].join(" ")}>Tarjeta de credito {props.creditCardDesc}</p>
                            <span className={classes["tarjetaMonto" + props.screenSize]}>${props.limitCard}</span>
                            <span className={classes["poderCompra" + props.screenSize]}> de poder de compra*</span>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={[classes.divisorLine, isTablet ? classes.divisorLineTablet : "", isMobileOnly ? classes.divisorLineMobile : ""].join(" ")} />
                        </Grid>

                    </Grid>



                    {
                        itemsPackage.map((item, key) => {
                            return <Grid item container sm={12} className={classes.tarjetaItems} key={key}>
                                {
                                    item.descripcion == "Cuenta Corriente en Pesos" ?
                                        <div className={classes.containerCTACTE}>
                                            {
                                                props.isCardEmp ?
                                                    <img src={checkedImage} className={classes.iconChecked}></img>
                                                    :
                                                    <Checkbox
                                                        checked={state.ctaCteInd}
                                                        value="ctaCteInd"
                                                        onChange={handleChange('ctaCteInd')}
                                                        className={classes.checkBoxStyle}
                                                        color="primary"
                                                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                        icon={<CheckBoxOutlineBlankIcon color="primary" />}
                                                    />
                                            }
                                        </div>
                                        :
                                        <img src={checkedImage} className={classes.iconChecked}></img>
                                }
                                <label className={classes["tarjetaItems" + props.screenSize]}>{item.descripcion}</label>


                                {
                                    itemsPackage.length - 1 != key ?
                                        <Grid item xs={12}>
                                            <div className={[classes.divisorLine, isTablet ? classes.divisorLineTablet : "", isMobileOnly ? classes.divisorLineMobile : ""].join(" ")} />
                                        </Grid>
                                        :
                                        null
                                }
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </div>
    )
};

export default Tarjeta;