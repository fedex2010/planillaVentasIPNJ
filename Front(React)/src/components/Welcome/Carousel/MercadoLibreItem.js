//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import mpImage from "../../../images/welcome/carousel/mercado-pago.png"
import mlImage from "../../../images/welcome/carousel/mercado-libre.png"

const useStyles = makeStyles(theme => ({

  quinceOff: {
    fontSize: "50px",
    fontWeight: 900,
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f37320",
  },
  boxImages: {
    paddingTop: 20,
    '& img:first-child': {
      marginRight: 10
    },
    [theme.breakpoints.down('md')]: {
      display: "flex",
      marginBottom: 10
    }
  },
  img: {
    width: 106,
    height: 98
  },
  text: {
    fontWeight: "normal",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    marginBottom: "1px"
  },
  dias: {
    fontSize: "20px",
    lineHeight: 1.4,
    color: "#4a4a4a"
  },
  aclaracion: {
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

const MercadoLibreItem = (props) => {
  const classes = useStyles();
  const item1 = clsx(props.item, props.item1)
  const item2 = clsx(props.item, props.item2)

  const textDias = clsx(classes.text, classes.dias)
  const aclaracionDias = clsx(classes.text, classes.aclaracion)

  return (
    <div className={props.boxItem}>
      <div className={item1}>
        <span className={classes.quinceOff}>15% OFF
          <span className={classes.legalReference}>
            (3)
                </span>
        </span>
      </div>
      <hr className={props.verticalHr} />
      <div className={item2}>
        <section className={classes.boxImages}>
          <img className={classes.img} src={mlImage} />
          <img className={classes.img} style={{ marginTop: 1 }} src={mpImage} />
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