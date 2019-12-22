//Dependencies
import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { isMobileOnly } from 'react-device-detect';
import { useState } from 'react';
import { useSelector } from 'react-redux'

//material
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

//images header
import headerImageDesktopBlack from '../../images/ofertas/header/header-desk-black.png';
import headerImageTabletBlack from '../../images/ofertas/header/header-tablet-black.png';
import headerImageDesktopPlatinum from '../../images/ofertas/header/header-desk-platinum.png';
import headerImageTabletPlatinum from '../../images/ofertas/header/header-tablet-platinum.png';
import headerImageDesktopGold from '../../images/ofertas/header/header-desk-gold.png';
import headerImageTabletGold from '../../images/ofertas/header/header-tablet-gold.png';
import headerImageDesktopBuho from '../../images/ofertas/header/header-desk-buho.png'
import headerImageTabletBuho from '../../images/ofertas/header/header-tablet-buho.png'

//Component
import MobileTablet from "./MobileTablet";
import Desktop from "./Desktop";
import Legales from "./Legales";

const useStyles = makeStyles(theme => ({
    imageSize: {
        width: '100%'
    },
    containerImage: {
        height: "70px"
    },
    card: {
        minWidth: 275,
        borderRadius: "25px"
    },
    desktopCard: {
        width: "1003px",
        //height: "495px",
        margin: "auto",
    },
    desktopCardMultiple: {
        minWidth: "479px",
        minHeight: "630px"
    },
    tabletCard: {
        width: "728px",
        minHeight: "556px",
        margin: "auto"
    },
    mobileCard: {
        width: "100%",
        marginLeft: "0px",
        boxShadow: "none",
        borderRadius: "0px",
        minHeight: "550px"
    },
    container: {
        marginBottom: "30px"
    },
    cardSizes: {
        marginTop: "-5px",
       // height: "530px",
        padding: "0px !important"
    },

    cardSizeOneOfferTablet: {
        minHeight: "500px"
    },

    cardSizeOneOfferMobile: {
        minHeight: "530px"
    },

    cardSizeDesktopMultiple: {
        minHeight: "560px"
    },

    cardSizeDesktop: {
        //height: "450px",
        minHeight: "400px"
    },
    commonStyle: {
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        fontFamily: "Roboto",
        color: "#666666",
        margin: "30px 0px 19px 0px",
        textAlign: "center",
    },
    poderCompra: {
        fontSize: "12px"
    },
    mobileNoEmprendedor: {
        margin: "0px 0px 20px 0px"
    },
    mobileTitleStyle: {
        height: "21px",
        fontSize: "18px",
        letterSpacing: "0.11px",
    },
    tabletTitleStyle: {
        height: "30px",
        fontSize: "26px",
        letterSpacing: "0.16px",
        textAlign: "center",
        color: "#666666",
        textAlign: "center",
        width: "100%"
    },
    desktopTitleStyle: {
        height: "28px",
        fontSize: "24px",
        letterSpacing: "0.15px",
        textAlign: "center",
        color: "#666666"
    },
    mobileImageHeaderBlackPlatinum: {
        lineHeight: "54px",
        height: "54px",
        backgroundColor: "#000000",
        marginBottom: "0px",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px"
    },
    mobileImageHeaderGold: {
        backgroundColor: "#d6ab4f",
    },
    mobileImageHeaderBuho: {
        backgroundColor: "#f47524",
    },
    commonPackName: {
        height: "24px",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: "bold",
        fontStretch: "condensed",
        letterSpacing: "normal",
        color: "#ffffff"
    },
    blackPlatinumPack: {
        color: "#c0ac7f"
    }
    ,
    goldBuhoPack: {
        color: "#ffffff"
    },
    emprendedorDesktop: {
        width: "70%",
        marginLeft: "15%"
    },
    headerCardEmprendedor: {
        height: "60px !important",
        position: "relative"
    },
    titleEmpHeaderCommon: {
        height: "14px",
        opacity: "0.8",
        fontSize: "12px",
        display: "block",
        marginTop: "-40px"
    },
    titleEmpHeaderBlack: {
        color: "#b29f70",
    },
    titleEmpHeaderOthers: {
        color: "#ffffff",
    },
    commonStyleEmprHeader: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        width: "226px",
        height: "24px",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center"
    },
    emprendedorBlackPack: {
        color: "#b29f70"
    },
    emprendedorOthesPacks: {
        color: "#ffffff"
    },
    emprendedorHeaderContainerCommon: {
        lineHeight: "54px",
        height: "54px",
        borderTopRightRadius: "25px",
        borderTopLeftRadius: "25px",
        marginBottom: "0px"
    },
    emprendedorHeaderContainerBlack: {
        lineHeight: "54px",
        height: "54px",
        borderTopRightRadius: "25px",
        borderTopLeftRadius: "25px",
        backgroundColor: "#000000",
        marginBottom: "0px"
    },
    emprendedorHeaderContainerOthers: {
        backgroundColor: "#90d0c0",
    },
    emprendedorMargin: {
        marginBottom: "0px",
        marginTop: "0px",
        paddingBottom: "0px !important"
    },
    emprendedorMobileTabletHeaderCommon: {
        width: "50%",
        display: "inline-block"
    },
    emprendedorMobileTabletHeaderLeft: {
        borderTopRightRadius: "0px",
    },
    emprendedorMobileTabletHeaderRight: {
        borderTopLeftRadius: "0px",
    },
    flapInactive: {
        backgroundColor: "#ffffff"
    },
    textFlapInactive: {
        opacity: "0.2",
        color: "#333333"
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
    emprendedorTabHeaderTablet: {
        fontSize: "18px"
    },
    emprendedorTabTabletMobile: {
        fontSize: "12px"
    },
    emprendedorTabSubHeaderMobile: {
        fontSize: "10px"
    },
    tabletContainerCard: {
       /* width: "90%",
        marginLeft: "5%"*/
        width: "728px",
        minHeight: "550px",
        margin: "auto"
    },
    mobileContainerCard: {
        width: "100%"
    },
    mobileTabRect: {
        borderRadius: "0px"
    },
    triangle: {
        zIndex: "0",
        position: "absolute",
        top: "98.1%",
        left: "100%",
        marginLeft: "-50%",
        content: '',
        width: "0",
        height: "0",
        borderTop: "solid 5px #000000",
        borderLeft: "solid 5px transparent",
        borderRight: "solid 5px transparent",
    },
    triangleColorEmprendedor: {
        borderTop: "solid 5px #90d0c0"
    },
    triangleColorEmprendedorBuho: {
        borderTop: "solid 5px #f47524"
    },
    triangleColorEmprendedorPlatinum: {
        borderTop: "solid 5px #989a9c"
    },
    triangleColorEmprendedorGold: {
        borderTop: "solid 5px #d6ab4f"
    },
    containerDesktop: {
        width: "70%",
        marginLeft: "15%",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px"
    },
    paddingBottomCardContent: {
        paddingBottom: "0px !important"
    }
}))

const Container = (props) => {
    const oferta = useSelector(state => state.oferta)
    const classes = useStyles();
    let [hasToShowEmp, setShowEmp] = useState(true);

    let styleDependsOnSize;
    switch (props.screenSize) {
        case "Mobile": styleDependsOnSize = classes.mobileTitleStyle;
            break;
        case "Tablet": styleDependsOnSize = classes.tabletTitleStyle;
            break;
        default: styleDependsOnSize = classes.desktopTitleStyle;
    }

    let imageHeader;
    switch (true) {
        case props.screenSize == "Tablet" && props.namePackWord.includes("Black"):
            imageHeader = headerImageTabletBlack;
            break;
        case props.screenSize == "Desktop" && props.namePackWord.includes("Black"):
            imageHeader = headerImageDesktopBlack;
            break;
        case props.screenSize == "Tablet" && props.namePackWord.includes("Platinum"):
            imageHeader = headerImageTabletPlatinum;
            break;
        case props.screenSize == "Desktop" && props.namePackWord.includes("Platinum"):
            imageHeader = headerImageDesktopPlatinum;
            break;
        case props.screenSize == "Tablet" && props.namePackWord.includes("Gold"):
            imageHeader = headerImageTabletGold;
            break;
        case props.screenSize == "Desktop" && props.namePackWord.includes("Gold"):
            imageHeader = headerImageDesktopGold;
            break;
        case props.screenSize == "Tablet" && props.namePackWord.includes("Buho"):
            imageHeader = headerImageTabletBuho;
            break;
        case props.screenSize == "Desktop" && props.namePackWord.includes("Buho"):
            imageHeader = headerImageDesktopBuho;
            break;
    }

    let styleEmprendedorComparator;
    if (props.packNameComparator != null) {
        switch (true) {
            case props.packNameComparator.includes("Platinum"): styleEmprendedorComparator = "emprendedorPlatinumComparator";
                break;
            case props.packNameComparator.includes("Gold"): styleEmprendedorComparator = "emprendedorGoldComparator";
                break;
            case props.packNameComparator.includes("Buho"): styleEmprendedorComparator = "emprendedorBuhoComparator";
                break;
        }
    }

    return (
        <div className={classes.container}>
            <p className={[classes.commonStyle, styleDependsOnSize].join(" ")}>
                ¡Tenemos esta oferta para vos!
            </p>
            {!props.isEmprendedor ?
                //muestra oferta unica si no es emprendedor
                <Card className={[classes.card, classes.desktopCard, isMobileOnly ? classes.mobileCard : "", isTablet ? classes.tabletCard : ""].join(" ")}>
                    {
                        isMobileOnly ?
                            <div className={[classes.mobileImageHeaderBlackPlatinum, classes.commonStyle, classes.mobileNoEmprendedor,
                            props.namePackWord == "Gold" ? classes.mobileImageHeaderGold : "",
                            props.namePackWord == "Buho" ? classes.mobileImageHeaderBuho : ""].join(" ")}>
                                <span className={classes.commonPackName}>{props.namePackWord} </span>
                                <span className={[classes.commonPackName, props.namePackWord == "Black" ||
                                    props.namePackWord == "Platinum" ? classes.blackPlatinumPack : classes.goldBuhoPack].join(" ")}>Pack</span>
                            </div>
                            :
                            <div className={[!isTablet ? classes.containerImage : classes.containerImageTablet].join(" ")}>
                                <img className={classes.imageSize} src={imageHeader} />
                            </div>
                    }
                    <CardContent className={[classes.cardSizes, isTablet ? classes.cardSizeOneOfferTablet : "", isMobileOnly ? classes.cardSizeOneOfferMobile : " ",
                    !isMobile ? classes.cardSizeDesktop : ""].join(" ")}>
                        {
                            isMobile ?
                                <MobileTablet isMobile={isMobile} screenSize={props.screenSize} namePackWord={props.namePackWord}
                                    products={oferta[0].paqueteDTO.productos} isCardEmp={null} limitCard={oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal}
                                    cost={oferta[0].paqueteDTO.costo} benefits={oferta[0].paqueteDTO.beneficios} isMultipleOffer={false}
                                    aerolineasDesc={props.aerolineasDesc} creditCardDesc={props.creditCardDesc} packageSelected={0} />
                                :
                                <Desktop screenSize={props.screenSize} namePackWord={props.namePackWord} isEmprendedor={props.isEmprendedor}
                                    limitCard={oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal} products={oferta[0].paqueteDTO.productos}
                                    isCardEmp={null} cost={oferta[0].paqueteDTO.costo} benefits={oferta[0].paqueteDTO.beneficios}
                                    isMultipleOffer={false} aerolineasDesc={props.aerolineasDesc} creditCardDesc={props.creditCardDesc} 
                                    packageSelected={0} />
                        }
                    </CardContent>
                </Card>
                :
                //muestra multioferta si es emprendedor
                <div className={!isMobile ? classes.emprendedorDesktop : ""}>
                    {!isMobile ?
                        //multioferta en desktop
                        <div>
                            <Grid container spacing={8}>
                                <Grid item xs={6}>
                                    <Card className={[classes.card, classes.desktopCardMultiple].join(" ")}>
                                        <div className={[classes.headerCardEmprendedor, classes.emprendedorHeaderContainerCommon, classes.commonStyle, classes.emprendedorMargin,
                                        props.namePackWord.includes("Black") ? classes.emprendedorHeaderContainerBlack : classes.emprendedorHeaderContainerOthers].join(" ")}>
                                            <span className={[classes.commonStyleEmprHeader, props.namePackWord.includes("Black") ?
                                                classes.emprendedorBlackPack : classes.emprendedorOthesPacks].join(" ")}>
                                                {/*props.namePackWord*/ props.packNameHeader} Pack
                                            </span>
                                            <span className={[classes.commonPackName, classes.titleEmpHeaderCommon, props.namePackWord.includes("Black") ?
                                                classes.titleEmpHeaderBlack : classes.titleEmpHeaderOthers].join(" ")}>Para tu actividad comercial y personal</span>
                                        </div>
                                        <CardContent className={[classes.cardSizes, classes.cardSizeDesktopMultiple, classes.paddingBottomCardContent].join(" ")}>
                                            <Desktop isEmprendedor={props.isEmprendedor} screenSize={props.screenSize} namePackWord={props.namePackWord}
                                                styleEmprendedorComparator={null} limitCard={oferta[1].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal}
                                                products={oferta[1].paqueteDTO.productos} isCardEmp={true} cost={oferta[1].paqueteDTO.costo}
                                                benefits={oferta[1].paqueteDTO.beneficios} isMultipleOffer={true} aerolineasDesc={props.aerolineasDesc}
                                                creditCardDesc={props.creditCardDesc} packageSelected={1}/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6}>
                                    <Card className={[classes.card, /*classes.desktopCard*/, classes.desktopCardMultiple].join(" ")}>
                                        <div className={[classes.headerCardEmprendedor, classes.emprendedorHeaderContainerCommon, classes.commonStyle, classes.emprendedorMargin,
                                        props.namePackWord.includes("Black") ? classes.emprendedorHeaderContainerBlack : classes.emprendedorHeaderContainerOthers,
                                        classes[styleEmprendedorComparator]].join(" ")}>
                                            <span className={[classes.commonStyleEmprHeader, props.namePackWord.includes("Black") ?
                                                classes.emprendedorBlackPack : classes.emprendedorOthesPacks].join(" ")}>
                                                {props.packNameComparator} Pack</span>
                                            <span className={[classes.commonPackName, classes.titleEmpHeaderCommon, props.namePackWord.includes("Black") ?
                                                classes.titleEmpHeaderBlack : classes.titleEmpHeaderOthers].join(" ")}>Para tu actividad personal</span>
                                        </div>
                                        <CardContent className={[classes.cardSizes, classes.cardSizeDesktopMultiple, classes.paddingBottomCardContent].join(" ")}>
                                            <Desktop isEmprendedor={props.isEmprendedor} screenSize={props.screenSize} namePackWord={props.packNameComparator}
                                                styleEmprendedorComparator={styleEmprendedorComparator} limitCard={oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal}
                                                products={oferta[0].paqueteDTO.productos} isCardEmp={null} cost={oferta[0].paqueteDTO.costo}
                                                benefits={oferta[0].paqueteDTO.beneficios} isMultipleOffer={true} aerolineasDesc={props.aerolineasDesc}
                                                creditCardDesc={props.creditCardDesc} packageSelected={0}/>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                        :
                        //multioferta en tablet y mobile
                        <Grid container className={isMobileOnly ? classes.mobileContainerCard : classes.tabletContainerCard}>
                            <Grid item xs={12}>
                                <Card className={[classes.card, classes.desktopCard, isMobileOnly ? classes.mobileCard : classes.tabletCard].join(" ")}>
                                    <div className={[classes.headerCardEmprendedor, classes.emprendedorHeaderContainerCommon, classes.commonStyle,
                                    classes.emprendedorMargin, classes.emprendedorMobileTabletHeaderCommon, classes.emprendedorMobileTabletHeaderLeft,
                                    props.namePackWord.includes("Black") ? classes.emprendedorHeaderContainerBlack : classes.emprendedorHeaderContainerOthers,
                                    !hasToShowEmp ? classes.flapInactive : "", isMobileOnly ? classes.mobileTabRect : ""].join(" ")}
                                        onClick={() => setShowEmp(hasToShowEmp = true)}>
                                        <span className={[classes.commonStyleEmprHeader, props.namePackWord.includes("Black") ?
                                            classes.emprendedorBlackPack : classes.emprendedorOthesPacks, !hasToShowEmp ? classes.textFlapInactive : "",
                                        isMobileOnly ? classes.emprendedorTabTabletMobile : classes.emprendedorTabHeaderTablet].join(" ")}>
                                            {/*props.namePackWord*/ props.packNameHeader} Pack
                                     </span>
                                        <span className={[classes.commonPackName, classes.titleEmpHeaderCommon, props.namePackWord.includes("Black") ?
                                            classes.titleEmpHeaderBlack : classes.titleEmpHeaderOthers, !hasToShowEmp ? classes.textFlapInactive : "",
                                        isMobileOnly ? classes.emprendedorTabSubHeaderMobile : classes.emprendedorTabTabletMobile,].join(" ")}>
                                            Para tu actividad comercial y personal
                                            </span>
                                        {
                                            hasToShowEmp ?
                                                <div className={[classes.triangle,
                                                !props.namePackWord.includes("Black") ? classes.triangleColorEmprendedor : ""].join(" ")}></div>
                                                :
                                                ""
                                        }
                                    </div>
                                    <div className={[classes.headerCardEmprendedor, classes.emprendedorHeaderContainerCommon, classes.commonStyle,
                                    classes.emprendedorMargin, classes.emprendedorMobileTabletHeaderCommon, classes.emprendedorMobileTabletHeaderRight,
                                    props.namePackWord.includes("Black") ? classes.emprendedorHeaderContainerBlack : classes.emprendedorHeaderContainerOthers,
                                    hasToShowEmp ? classes.flapInactive : classes[styleEmprendedorComparator], isMobileOnly ? classes.mobileTabRect : ""
                                    ].join(" ")} onClick={() => setShowEmp(hasToShowEmp = false)}>
                                        <span className={[classes.commonStyleEmprHeader, props.namePackWord.includes("Black") ?
                                            classes.emprendedorBlackPack : classes.emprendedorOthesPacks, hasToShowEmp ? classes.textFlapInactive : "",
                                        isMobileOnly ? classes.emprendedorTabTabletMobile : classes.emprendedorTabHeaderTablet].join(" ")}>
                                            {props.packNameComparator} Pack
                                        </span>
                                        <span className={[classes.commonPackName, classes.titleEmpHeaderCommon, props.namePackWord.includes("Black") ?
                                            classes.titleEmpHeaderBlack : classes.titleEmpHeaderOthers, hasToShowEmp ? classes.textFlapInactive : "",
                                        isMobileOnly ? classes.emprendedorTabSubHeaderMobile : classes.emprendedorTabTabletMobile].join(" ")}>
                                            Para tu actividad personal
                                            </span>
                                        {
                                            !hasToShowEmp ? <div className={[classes.triangle,
                                            props.packNameComparator.includes("Buho") ? classes.triangleColorEmprendedorBuho : "",
                                            props.packNameComparator.includes("Gold") ? classes.triangleColorEmprendedorGold : "",
                                            props.packNameComparator.includes("Platinum") ? classes.triangleColorEmprendedorPlatinum : ""].join(" ")}></div>
                                                :
                                                ""
                                        }
                                    </div>

                                    <CardContent className={[classes.cardSizes, classes.paddingBottomCardContent].join(" ")}>
                                        {hasToShowEmp ?
                                            <MobileTablet isMobile={isMobile} isEmprendedor={props.isEmprendedor} screenSize={props.screenSize}
                                                namePackWord={props.namePackWord} products={oferta[1].paqueteDTO.productos} isCardEmp={true}
                                                cost={oferta[1].paqueteDTO.costo} benefits={oferta[1].paqueteDTO.beneficios}
                                                limitCard={oferta[1].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal} isMultipleOffer={true}
                                                aerolineasDesc={props.aerolineasDesc}
                                                creditCardDesc={props.creditCardDesc} packageSelected={1}/>
                                            :
                                            <MobileTablet isMobile={isMobile} isEmprendedor={props.isEmprendedor} screenSize={props.screenSize}
                                                namePackWord={props.packNameComparator} products={oferta[0].paqueteDTO.productos} isCardEmp={null}
                                                cost={oferta[0].paqueteDTO.costo} benefits={oferta[0].paqueteDTO.beneficios}
                                                limitCard={oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraTotal} isMultipleOffer={true}
                                                aerolineasDesc={props.aerolineasDesc}
                                                creditCardDesc={props.creditCardDesc} packageSelected={0}/>
                                        }
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    }
                </div>
            }

            <div className={[classes.commonStyle, classes.poderCompra].join(" ")} style={{ marginTop: "10px" }}>(*)<span style={{ fontWeight: "bold" }}>El poder de compra</span> se compone de los siguientes límites:<span style={{ fontWeight: "bold" }}>${oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompra} en un pago y ${oferta[0].paqueteDTO.tarjetaDeCreditoDTO.limiteCompraCuotas} en cuotas.</span></div>

            <Legales paqueteId={oferta[0].paqueteDTO.codigo} />

        </div>
    )
};

export default Container;