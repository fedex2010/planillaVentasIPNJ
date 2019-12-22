//Dependencies
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux'

//material
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
//actions
import {
    setRespuesta,
    enviarRespuesta,
    chequearDictamen
} from "../../reducers/Preguntas/PreguntasActions"

import {
    showLoading,
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"

import $ from 'jquery';

//components
import BuhoBankButton from "../Common/BuhoBankButton"


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100
    },
    container:{
        marginTop: 25
    },
    dataBox:{
        width: "90%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up('sm')]: {
            width: "70%"
        },
    },
    mainText:{
        fontSize: "24px",
        fontWeight: "bold",
        color: "#4a4a4a"
    },
    containerSectionBox:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    sectionBox:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column",
        marginBottom:30
    },
    mainText:{
        fontWeight: "400",
        color: "#5d5d5d",
        textAlign: "center",
        fontSize: "1.64rem",
        lineHeight: "110%",
        margin: "0.82rem 0 0.656rem 0"
    },
    secondaryText:{
        color: "#5d5d5d",
        fontSize: "15px",
        marginBottom: "35px"
    },
    titleSectionPanel:{
        marginLeft: 20,
        fontSize: 15,
        color: "#5d5d5d"
    }
}))

const ObtenerPreguntas = ( ) => {
    const preguntas = useSelector(state => state.preguntas)
    const dispatch = useDispatch()

    useEffect(() => {
        
        if( !preguntas.preguntas.lenght && preguntas.dictamen !== ""){
            dispatch( chequearDictamen() )
        }else{
            $(".load").fadeOut(700);    
        }

    }, []);

    const estasTodasLasPreguntasRespuestas = () => {
        let {respuesta1,respuesta2,respuesta3,respuesta4,respuesta5} = preguntas

        let isOk = respuesta1 !== null && 
               respuesta2 !== null &&  
               respuesta3 !== null &&  
               respuesta4 !== null &&  
               respuesta5 !== null

        return isOk
    }

    const setRespuestaToReduced = (nro) => (event) => {
        dispatch( setRespuesta({
            nro,
            respuesta: event.target.value
        }))
    }
    
    const continuar = () => {
        $(".load").fadeIn(700, () => {
            dispatch( enviarRespuesta() )
        });    

    }

    const classes = useStyles();
    
    let disableButton = !estasTodasLasPreguntasRespuestas()

    return(
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <section className={classes.sectionBox}>
                    <span className={classes.mainText}>
                        Respondé las siguientes preguntas
                    </span>
                    <span className={classes.secondaryText}>
                        Necesitamos que contestes estas preguntas para validar tu identidad
                    </span>
                    
                    <div className={classes.accordionBox}>
                        {preguntas.preguntas.map(( data, index ) => {
                            return (
                                <ExpansionPanel key={index} className={classes.expansionPanel}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" >
                                        
                                        <HelpOutlineIcon />     
                                        <span className={classes.titleSectionPanel}>
                                                {data.texto} 
                                        </span>   

                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <RadioGroup
                                                aria-label="gender"
                                                name={"respuesta" + (index + 1)}
                                                className={null}
                                                value={preguntas["respuesta"+(index + 1)]}
                                                onChange={setRespuestaToReduced((index + 1))}
                                                >
                                                
                                            {data.respuestas.map(( data, index ) => {
                                                return(
                                                    <FormControlLabel key={index} value={data.codigo} label={data.texto} 
                                                                        control={<Radio/>} />
                                                )
                                            })}
                                                                                                
                                            </RadioGroup>
                                        </FormControl>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            );
                        })}
                    </div>
                </section>
                <BuhoBankButton onClick={continuar} disabled={disableButton} text={"continuar"} />
                            
            </section>
        </section>
    ) 
};
    
export default ObtenerPreguntas;