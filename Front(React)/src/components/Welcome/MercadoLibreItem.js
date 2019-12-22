//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import mpImage from "../../images/welcome/carousel/mercado-pago.png"
import mlImage from "../../images/welcome/carousel/mercado-libre.png"

const useStyles = makeStyles( theme => ({
  
  verticalHr: { 
    border:"none",
    borderLeft: "1px solid hsla(200, 10%, 50%,100)",
    height: "100vh",
    width: 1
  },
  quinceOff:{
    fontSize: "50px",
    fontWeight: 900,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f37320",
  },
  images:{
    paddingTop: 20
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
  }
}))

const MercadoLibreItem = (props) => {
  const classes = useStyles();
  const item1 = clsx(props.item, props.item1)
  const item2 = clsx(props.item, props.item2)

  const textDias = clsx(classes.text, classes.dias)
  const aclaracionDias = clsx(classes.text, classes.aclaracion)

  return (
    <div className={props.boxItem}>
        <div  className={item1}>
          <span className={classes.quinceOff}>15% OFF</span>
        </div>
        <div  className={item2}>
          <section className={classes.images}>
            <img src={mlImage} />
            <img src={mpImage} />
          </section>
          <section className={textDias}>
            Sabados y domingos
          </section>
          <section className={aclaracionDias}>
            Con debito - tope de reintegro $500
          </section>
        </div>
    </div>
    )
  };
    
export default MercadoLibreItem;