//Dependencies
import React,{ useState,forwardRef,useImperativeHandle } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
    },
    label:{
        textTransform: "uppercase !important",
        fontSize: "9px !important",
        marginBottom: 20
    },
    errorText:{
        color:"#f44336",
        fontSize:"0.75rem"
    },
    buttonContainer: {
        marginTop:2
    },
    buttonError:{
        borderColor: "#f44336"
    }
}))

const Genero = forwardRef( ( props, ref ) => {

    const classes = useStyles();
    
    const {externalSubmitted,onChange,genero} = props

    const [alignment, setAlignment] = React.useState( genero );
    
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
        onChange(newAlignment)    
    };

    const isDataOk = () => {
        return genero !== ""
    }

    useImperativeHandle(ref, () => ({
        isDataOk() {
          return isDataOk()
        }
    }));


    let buttonClass = {}
    let generoTextClass =  {color: "rgba(0, 0, 0, 0.54)"}
    let errorText = ""
    if( externalSubmitted && !isDataOk() ){
        buttonClass = classes.buttonError
        errorText = <span className={classes.errorText}>Seleccioná tu genero</span>
        generoTextClass = {color:"#f44336"}
    }

    return(
        <section className={classes.mainContainer}>
             <section>
                <label classes={classes.label} style={generoTextClass}>Genero</label>
            </section>
            <section className={classes.buttonContainer}>
                <ToggleButtonGroup style={{width:"100%"}} value={alignment} exclusive onChange={handleAlignment}>
                    <ToggleButton value="M" className={buttonClass}  style={{width:"50%"}}>
                        Masculino
                    </ToggleButton>
                    <ToggleButton value="F" className={buttonClass} style={{width:"50%"}}>
                        Femenino
                    </ToggleButton>
                </ToggleButtonGroup>                 
            </section>
            {errorText}
        </section>
   ) 
});
    
export default Genero;