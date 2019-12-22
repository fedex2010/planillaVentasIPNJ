//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import colorShopImage from "../../images/welcome/carousel/colorshop.png"

const useStyles = makeStyles( theme => ({
  
  verticalHr: { 
    border:"none",
    borderLeft: "1px solid hsla(200, 10%, 50%,100)",
    height: "100vh",
    width: 1
  },
  veinteOff:{
    fontSize: "50px",
    fontWeight: 900,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f37320",
  },
  sinInteres:{
    fontSize: "40px",
    fontWeight: "bold",
    color: "#f37320",
  },
  images:{
    width:260,
    height:125
  },
  text:{
    fontWeight: "normal",  
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    marginBottom: "1px"
  },
  dias:{
    fontSize: "20px",
    lineHeight: 1.4,
    color: "#4a4a4a"
  },
  aclaracion:{
    fontSize: "14px",
    lineHeight: 2,
    color: "#999"
  },
  legalReference:{
    fontSize: "10px",
    position: "absolute",
    lineHeight: "30px",
    paddingLeft: "3px"
  }
}))

const ColorShopItem = (props) => {
  const classes = useStyles();
  const item1 = clsx(props.item, props.item1)
  const item2 = clsx(props.item, props.item2)

  const textDias = clsx(classes.text, classes.dias)
  const aclaracionDias = clsx(classes.text, classes.aclaracion)

  return (
    <div className={props.boxItem}>
        <div  className={item1}>
            <span className={classes.veinteOff}>20% OFF</span>
        </div>
        <div  className={item2}>
          <section style={{textAlign:"center"}}>
            <img  className={classes.images} src={colorShopImage} />
          </section>
          <section className={textDias}>
            Sabados y domingos
          </section>
          <section className={aclaracionDias}>
            Con débito y crédito
          </section>
        </div>
    </div>
    )
  };
    
export default ColorShopItem;