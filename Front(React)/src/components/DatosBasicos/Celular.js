//Dependencies
import React,{ useState,forwardRef,useImperativeHandle } from 'react';
//material
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//utils
import {handleKeyPressNum, handlePasteNum} from "../../utils/ValidationInput"


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left"
    },
    label:{
        textTransform: "uppercase !important",
        fontSize: "9px !important",
        marginBottom: ""
    },
    labelError:{
        color:"#f44336 !important",
        fontSize: "0.75rem",
        marginLeft: "21px"
    },
    inputsContainer: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "left"
    },
    cod:{
        marginTop:5,
        marginRight:15,
        color: "#999"
    },
    inputBox:{
        width:"20%"
    }
}))

const Celular = forwardRef( ( props, ref ) => {
    
    const {externalSubmitted,onChange,celular} = props
    const [colorLabel,setColorLabel] = useState( { } )
    const classes = useStyles();

    const handleChange = () => e => {
        let {name,value} = e.target

        if( (name === "cod" && value.length <= 4) || (name === "numero" && value.length <= 8)){

            celular[name] = value
            onChange(celular)    

        }
    }

    const onFocus = () => {
        setColorLabel( { color : "#f47321"} )
    }

    const onBlur = () => {
        setColorLabel( { color : ""} )
    }

    useImperativeHandle(ref, () => ({
        isDataOk() {
          return isDataOk()
        }
    }));

    const isDataOk = () => {
        let {cod, numero} = props.celular

        return (cod.length === 2 && numero.length === 8) ||
               (cod.length === 3 && numero.length === 7) ||
               (cod.length === 4 && numero.length === 6)
    }

    
    let textError = "", inputError = false, fechaTextClass =  {...colorLabel, color: "rgba(0, 0, 0, 0.54)"}
    if(externalSubmitted && !isDataOk()){
        textError = "Debe tener 10 caracteres (Ej.: 11 49999999)."
        inputError = true
        fechaTextClass = {color:"#f44336"}
    }

    return(
        <section className={classes.mainContainer}>
            <section style={{marginBottom:10}}>
                <label classes={classes.label} style={fechaTextClass}>Celular</label>
            </section>
            <section className={classes.inputsContainer}>
                <span className={classes.cod}>0</span> 
                <TextField
                    className={classes.inputBox}
                    name="cod"
                    value={celular.cod}
                    error={inputError}
                    onChange={handleChange()}
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onKeyPress={handleKeyPressNum}
                    onPaste={handlePasteNum}
                />
                <span className={classes.cod}>15</span> 
                <TextField
                    name="numero"
                    value={celular.numero}
                    error={inputError}
                    onChange={handleChange()}
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onKeyPress={handleKeyPressNum}
                    onPaste={handlePasteNum}
                />    
            </section>
            <section>
                <span className={classes.labelError}>{textError}</span>
            </section>
        </section>
   ) 
});
    
export default Celular;