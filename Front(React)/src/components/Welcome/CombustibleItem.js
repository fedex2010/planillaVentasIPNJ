//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import combustibleImage from "../../images/welcome/carousel/combustible.png"

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
    width:45,
    height:54
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

const CombustibleItem = (props) => {
  const classes = useStyles();
  const item1 = clsx(props.item, props.item1)
  const item2 = clsx(props.item, props.item2)

  const textDias = clsx(classes.text, classes.dias)
  const aclaracionDias = clsx(classes.text, classes.aclaracion)

  return (
    <div className={props.boxItem}>
        <div  className={item1}>
            <span className={classes.sinInteres}>
                Hasta
            </span>
            <span className={classes.sinInteres}>
                25% OFF
                <span className={classes.legalReference}>
                    (1)
                </span>
            </span>        </div>
        <div  className={item2}>
          <section style={{textAlign:"center"}}>
            <img  className={classes.images} src={combustibleImage} />
          </section>
          <section className={textDias}>
            Todos los miércoles
          </section>
          <section className={aclaracionDias}>
            Con Débito - Tope de reintegro $700.
          </section>
        </div>
    </div>
    )
  };
    
export default CombustibleItem;