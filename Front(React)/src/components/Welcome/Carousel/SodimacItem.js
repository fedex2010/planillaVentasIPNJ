//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import sodimacImage from "../../../images/welcome/carousel/sodimac.png"

const useStyles = makeStyles( theme => ({
  
  verticalHr: { 
    border:"none",
    borderLeft: "1px solid #EFECED",
    height: "190px",
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
    height:40
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

const SodimacItem = (props) => {
  const classes = useStyles();
  const item1 = clsx(props.item, props.item1)
  const item2 = clsx(props.item, props.item2)

  const textDias = clsx(classes.text, classes.dias)
  const aclaracionDias = clsx(classes.text, classes.aclaracion)

  return (
    <div className={props.boxItem}>
        <div  className={item1}>
            <span className={classes.sinInteres}>
                18 cuotas
            </span>
            <span className={classes.sinInteres}>
                sin interes
                <span className={classes.legalReference}>
                    (1)(*)
                </span>
            </span>        
        </div>
        <hr className={props.verticalHr}/>
        <div  className={item2}>
          <section style={{textAlign:"center"}}>
            <img  className={classes.images} src={sodimacImage} />
          </section>
          <section className={textDias}>
            Todos los jueves
          </section>
          <section className={aclaracionDias}>
            Con tarjeta de crédito
          </section>
        </div>
    </div>
    )
  };
    
export default SodimacItem;