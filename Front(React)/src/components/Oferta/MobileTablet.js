//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { isTablet, isMobileOnly } from 'react-device-detect';
import { useState } from 'react';

//Material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

//Components
import Beneficios from "./Detalle/Beneficios";
import Tarjeta from "./Detalle/Tarjeta";
import Aerolineas from "./Detalle/Aerolineas";
import Importes from "./Detalle/Importes";
import SubmitButton from './Detalle/SubmitButton';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  optionsColor: {
    backgroundColor: "white"
  },
  appbar: {
    alignItems: 'center',
    backgroundColor: "white",
    width: "100%"
  },
  tabsSize: {
    width: "100%"
  },
  tabSize: {
    width: "50%",
    maxWidth: "none !important"
  },
  commonStyle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontStretch: "normal",
    letterSpacing: "normal"
  },
  isTabInactive: {
    color: "#cccccc"
  },
  mobilePadding: {
    '& div': {
      padding: '0px'
    }
  },
  paddingSubmitMulti: {
    padding: "48px 0px 0px 119px !important"
  },
  benefSizeMob: {
    minHeight: "415px"
  },
  benefSizeMobEmp: {
    minHeight: "376px"
  }
}));

function MobileTablet(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let [isTabActive, setTabState] = useState(true);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  let importeSubmitButtonContainer = <div>
    <Importes isMobile={props.isMobile} screenSize={props.screenSize} cost={props.cost} isMultipleOffer={props.isMultipleOffer} />
    <SubmitButton isMobile={props.isMobile} packageSelected={props.packageSelected} />
  </div>
  if (isTablet) {
    importeSubmitButtonContainer =
      <Grid container>
        <Grid container item xs={6} className={classes.paddingSubmitMulti}>
          <SubmitButton packageSelected={props.packageSelected} />
        </Grid>
        <Grid container item xs={6} >
          <Importes screenSize={props.screenSize} cost={props.cost} isMultipleOffer={props.isMultipleOffer} />
        </Grid>
      </Grid>
  }

  return (
    <div>
      {!props.isEmprendedor ?
        //oferta si no es emprendedor
        <div className={classes.root}>
          <AppBar position="static" className={classes.appbar}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
              className={[classes.commonStyle, classes.tabsSize].join(" ")}
              indicatorColor="primary"
              textColor="primary">
              <Tab label="Detalle" {...a11yProps(0)} className={[classes.tabSize, !isTabActive ? classes.isTabInactive : ""].join(" ")}
                onClick={() => setTabState(isTabActive = true)} />
              <Tab label="Beneficios" {...a11yProps(1)} className={[classes.tabSize, isTabActive ? classes.isTabInactive : ""].join(" ")}
                onClick={() => setTabState(isTabActive = false)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.mobilePadding}>
            <Tarjeta screenSize={props.screenSize} namePackWord={props.namePackWord}
              products={props.products} limitCard={props.limitCard}
              creditCardDesc={props.creditCardDesc} packageSelected={props.packageSelected} />
            <Aerolineas screenSize={props.screenSize} aerolineasDesc={props.aerolineasDesc}
              packageSelected={props.packageSelected} />
            {importeSubmitButtonContainer}
          </TabPanel>
          <TabPanel value={value} index={1} className={isMobileOnly ? classes.mobilePadding : ""}>
            <div className={isMobileOnly ? classes.benefSizeMob : ""}>
              <Beneficios screenSize={props.screenSize} benefits={props.benefits} packageSelected={props.packageSelected} />
            </div>
            {
              isMobileOnly ?
                <SubmitButton packageSelected={props.packageSelected} isMobile={props.isMobile} />
                :
                null
            }
          </TabPanel>
        </div>
        :
        //oferta si es emprendedor
        <div className={classes.root}>
          <AppBar position="static" className={classes.appbar}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
              className={[classes.commonStyle, classes.tabsSize].join(" ")}
              indicatorColor="primary"
              textColor="primary">
              <Tab label="Detalle" {...a11yProps(0)} className={[classes.tabSize, !isTabActive ? classes.isTabInactive : ""].join(" ")}
                onClick={() => setTabState(isTabActive = true)} />
              <Tab label="Beneficios" {...a11yProps(1)} className={[classes.tabSize, isTabActive ? classes.isTabInactive : ""].join(" ")}
                onClick={() => setTabState(isTabActive = false)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.mobilePadding}>
            <Tarjeta screenSize={props.screenSize} namePackWord={props.namePackWord}
              products={props.products} isCardEmp={props.isCardEmp} limitCard={props.limitCard}
              creditCardDesc={props.creditCardDesc} isMultipleOffer={props.isMultipleOffer}
              packageSelected={props.packageSelected} />
            <Aerolineas screenSize={props.screenSize} isMultipleOffer={props.isMultipleOffer}
              aerolineasDesc={props.aerolineasDesc} packageSelected={props.packageSelected} />
            {importeSubmitButtonContainer}
          </TabPanel>
          <TabPanel value={value} index={1} className={isMobileOnly ? classes.mobilePadding : ""}>
            <div className={isMobileOnly ? classes.benefSizeMobEmp : ""}>
              <Beneficios screenSize={props.screenSize} benefits={props.benefits} packageSelected={props.packageSelected} />
            </div>
            {
              isMobileOnly ?
                <SubmitButton packageSelected={props.packageSelected} isMobile={props.isMobile} />
                :
                null
            }
          </TabPanel>
        </div>
      }
    </div>
  );
}

export default MobileTablet;