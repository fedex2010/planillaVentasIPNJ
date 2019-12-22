//Dependencies
import React, { useState } from 'react';
//material
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
//component
import helpImg from '../../images/datos-iniciales/help.png';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  helpImg: {
    cursor: "pointer"
  },
  questionBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  containerHelperText: {
    padding: "15px",
    backgroundColor: "#ececec",
    fontSize: "15px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "400",
  },
  popContainer: {
    borderRadius: "12px"
  },
  telephone: {
    "fontWeight": "bold",
    "color": "#4a90e2",
    "padding": "0px",
    "display": "initial",
    "textDecoration": "underline"
  }
}));

const Helper = (props) => {
  const [open, setOpen] = useState(false)

  const toggleHelp = () => {
    setOpen(!open)
  }

  let helperText = ""; 

  let phoneClass = {
    fontWeight: "bold",
    color: "#4a90e2",
    padding: "0px",
    display: "initial",
    textDecoration: "underline"
  };

  window.document.body.clientWidth > 600 ? 
  helperText = <p>Si tenés alguna duda, <br /> comunicate al
  <strong> 0810-222-7777</strong><br /> de
  <strong> Lu a Vi de 9 a 21hs</strong></p>
  :
  helperText = <p>Si tenés alguna duda, <br /> comunicate al
  <strong> <a style={phoneClass} href='tel:0810-222-7777'>0810-222-7777</a></strong><br/> de
  <strong> Lu a Vi de 9 a 21hs</strong></p>

  const classes = useStyles();

  return (
    <section className={classes.questionBox}>
      <PopupState variant="popover" popupId="demo-popup-popover" className={classes.popContainer}>
        {popupState => (
          <div>
            <IconButton aria-label="delete" {...bindTrigger(popupState)}>
              <img src={helpImg}></img>

            </IconButton>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}>
              <div className={classes.containerHelperText}>
               {helperText}
              </div>
            </Popover>
          </div>
        )}
      </PopupState>
    </section>
  )
};

export default Helper;