//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Carousel from "./Carousel/Carousel"
import BuhoBankButton from '../Common/BuhoBankButton';

const useStyles = makeStyles(theme => ({
    mainContainer: {
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      flexDirection: "column",
      paddingTop: "5em",
      paddingBottom : "5em"
    },

    carouselBox:{
        width: "100%",
        display: "flex",
        [theme.breakpoints.up('md')]: {
            maxWidth: "75%"
        }
    }
  }))
    
const Ofertas =     ( ) => {
    const toBeneficios = () =>{
        window.open("https://www.hipotecario.com.ar/personas/beneficios-personas/","_blank")
    }

    const classes = useStyles();
    let buttonStyle = {
        borderRadius: "17.3px",
        backgroundColor: "#ffffff",
        fontSize: "14px",
        fontWight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#f37320",
        border: "2px solid",
        marginTop: "15px"
    }

    return(
        <section className={classes.mainContainer}>
            <section className={classes.carouselBox}>
                <Carousel />
            </section>
            <BuhoBankButton onClick={toBeneficios}  buttonStyle={buttonStyle} text="todos los beneficios"/>
        </section>
    ) 
};
    
export default Ofertas;