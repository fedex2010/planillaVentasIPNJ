//Dependencies
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Fab';

 
  const StyledButton = withStyles({
    root: {
        fontFamily: "Roboto",
        fontSize: "14px",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#ffffff",
        paddingBottom: "17px",
        paddingTop: "17px",
        paddingLeft: "40px",
        paddingRight: "40px",
        borderRadius: "29.7px",
        boxShadow: "0 3px 10px 0 rgba(243, 115, 32, 0.68)",
        backgroundColor: "#fd7e14",
        cursor:"pointer",
	    height:"auto"
    } 
  })(Button);

const BuhoBankButton = (props) => { 
    let customStyle = {}
    if(props.buttonStyle){
        customStyle = props.buttonStyle
    }

    let variant = "extended"
    if(props.variant){
        variant = props.variant
    }

    return(
        <StyledButton onClick={props.onClick} 
                      variant={variant} 
                      style={customStyle}
                      disabled={ (props.disabled && props.disabled===true) ? true : false }>
            {props.text}
        </StyledButton>
    ) 
};
    
export default BuhoBankButton;
