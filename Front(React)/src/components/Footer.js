//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/styles';

//material
import Grid from '@material-ui/core/Grid';

//images
import nortonImg from "../images/footer/norton-av-logo.png"
import sidImg from "../images/footer/sid.png"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: '#f1f1f1',
    color: "#717171"
  },
  footerContainer: {
    maxWidth: "1140px",

    margin: "0 auto",
    width: theme.medidasSitio.mobileWidth,
    [theme.breakpoints.up('sm')]: {
      width: theme.medidasSitio.tabletWidth
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.medidasSitio.desktopWidth
    }
  },
  links: {
    flexGrow: 1,
    paddingBottom: "38px",
    paddingTop: "38px"
  },
  boxLink: {
    textAlign: "center"
  },
  centerBoxLink: {
    extend: 'boxLink',
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: "0px 2px 0px 2px"
  },
  aLink: {
    textDecoration: "none",
    color: "#717171",
    textTransform: "uppercase",
    fontSize: "10px"
  },
  images: {
    flexGrow: 1,
  },
  nortonImg: {
    marginLeft: 40,
    marginRight: 40
  },
  hipotecarioText: {
    marginBottom: 15
  },
  footerImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <footer className={classes.mainContainer}>
      <Grid container className={classes.footerContainer}>
        <Grid item xs={12} container alignItems="center" justify="space-evenly" direction="row" className={classes.links}>
          <Grid item xs={12} sm={4} className={classes.boxLink}>
            <a className={classes.aLink} href="/buhobank/tarjetas/pdp" target="_blank">Protección de datos personales</a>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.centerBoxLink}>
            <a className={classes.aLink} href="/buhobank/rar" target="_blank">Responsables de atención de reclamos</a>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.boxLink}>
            <a className={classes.aLink} href="/buhobank/ttyc" target="_blank">Términos y condiciones</a>
          </Grid>
        </Grid>

        <Grid item xs={12} container alignItems="center" justify="center" direction="row" className={classes.images}>
          <Grid item xs={12} className={classes.footerImageContainer}>
            <span>@ 2018 Banco Hipotecario</span>
            <img src={nortonImg} className={classes.nortonImg} />
            <img src={sidImg} />
          </Grid>
        </Grid>
      </Grid>

    </footer>
  )
}

export default Footer;