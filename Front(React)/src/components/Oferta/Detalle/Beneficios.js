//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { isMobileOnly, isTablet, isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux'

//Material
import Grid from '@material-ui/core/Grid';

//util
import checkedImage from '../../../images/ofertas/checked.png';


const useStyles = makeStyles(theme => ({
   beneficiosItemsCommonStyle: {
      fontFamily: " Roboto",
      fontSize: "13px",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.23",
      letterSpacing: "normal",
      color: "#616161",
      marginTop: "30px",
   },
   beneficiosItemsTablet: {
      fontSize: "14px",
   },
   beneficiosHeader: {
      width: "165px",
      fontFamily: "Roboto",
      fontSize: "13px",
      color: "#333333",
      margin: "50px 0px 24px 0px"
   },
   alignItem: {
      marginTop: "-12px"
   },
   linkBeneficio: {
      color: "#fd7e14"
   },
   iconChecked: {
      width: "11px",
      height: "8px",
      opacity: "0.4",
   },
   containerIcon: {
      textAlign: "center"
   },
   containerRowMargin: {
      margin: "5px 0px 5px 0px"
   },

   itemSize: {
      width: "365px"
   },
   itemSizeTablet: {
      width: "559px"
   },
   itemSizeMobile: {
      width: "295px"
   }
}))

const Beneficios = (props) => {
   const classes = useStyles();
   let oferta = useSelector(state => state.oferta);

   let urlBase = "https://www.hipotecario.com.ar/default.asp?id=";
   let urlTarjeta;
   let urlPaquete;
   switch (oferta[props.packageSelected].paqueteDTO.codigo) {
      case "40": urlTarjeta = "https://www.hipotecario.com.ar/personas/beneficios-personas/";
         urlPaquete = "https://www.hipotecario.com.ar/personas/cuentas/buho-pack/";
         break;
      case "41": urlTarjeta = "https://www.hipotecario.com.ar/personas/beneficios-personas/";
         urlPaquete = "https://www.hipotecario.com.ar/personas/cuentas/gold-pack/";
         break;
      case "42": urlTarjeta = "https://www.hipotecario.com.ar/personas/beneficios-personas/";
         urlPaquete = "https://www.hipotecario.com.ar/buho-one/platinum-pack/";
         break;
      case "43": urlTarjeta = "https://www.hipotecario.com.ar/personas/beneficios-personas/";
         urlPaquete = "https://www.hipotecario.com.ar/buho-one/black-pack/";
         break;
      case "47": urlTarjeta = "https://www.hipotecario.com.ar/buho-emprendedor/beneficios/";
         urlPaquete = "https://www.hipotecario.com.ar/buho-emprendedor/emprendedor-pack/";
         break;
      case "53": urlTarjeta = "https://www.hipotecario.com.ar/buho-emprendedor/beneficios/";
         urlPaquete = "https://www.hipotecario.com.ar/buho-one/emprendedor-black-pack/";
         break;
   }

   let lasItemLink = <Grid container direction="row" justify="flex-start" className={classes.containerRowMargin}>
      <Grid item xs={1} className={classes.containerIcon}>
         <img src={checkedImage} className={classes.iconChecked}></img>
      </Grid>
      <Grid item xs={11} className={classes.alignItem}>
         <p className={[isMobileOnly ? classes.itemSizeMobile : "",
         isTablet ? classes.itemSizeTablet : "",
         !isMobile ? classes.itemSize : ""]}>
            Conocé todos los beneficios de <a className={classes.linkBeneficio} href={urlTarjeta} target="_blank">tus tarjetas </a>
            y de tu <a className={classes.linkBeneficio} href={urlPaquete} target="_blank">tu pack</a>.
         </p>
      </Grid>
   </Grid>;

   return (
      <div className={[classes.beneficiosItemsCommonStyle,
      props.screenSize == "Tablet" ? classes.beneficiosItemsTablet : null].join(" ")}>
         {
            !isMobile && oferta[1] == undefined ?
               <h3 className={classes.beneficiosHeader}>Disfrutá de estos beneficios:</h3>
               :
               null
         }
         {props.benefits.map((item, key) => {
            return <div key={key}>
               <div>
                  <Grid container direction="row" justify="flex-start" className={classes.containerRowMargin}>
                     <Grid item xs={1} className={classes.containerIcon}>
                        <img src={checkedImage} className={classes.iconChecked}></img>
                     </Grid>
                     <Grid item xs={11} className={classes.alignItem}>
                        <p dangerouslySetInnerHTML={{ __html: item.descBeneficio }}
                           className={[isMobileOnly ? classes.itemSizeMobile : "",
                           isTablet ? classes.itemSizeTablet : "",
                           !isMobile ? classes.itemSize : ""].join(" ")}></p>
                     </Grid>
                  </Grid>
                  {
                     key == props.benefits.length - 1 ? lasItemLink : null
                  }
               </div>
            </div>
         })
         }
      </div>
   )
};

export default Beneficios;