//Dependencies
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import { setValueDatosBasicos } from "../../reducers/DatosBasicos/DatosBasicosActions"
import { cambiarUrl } from "../../reducers/Navegacion/NavegacionActions"

import RestClient from "../../utils/RestClient"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    dataBox:{
        width: "70%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    mainText:{
        marginTop: 20,
        color: "#797979",
        fontWeight: "normal",
        fontSize: 40
    },
    secondaryText:{
        color: "#797979",
        fontWeight: "normal",
        fontSize: 20
    },
    formBox:{
        width:"80%"
    }
}))

const PaginaDePrueba = ( ) => {
    const classes = useStyles();
    
    const datosBasicos = useSelector(state => state.datosBasicos)
    const dispatch = useDispatch()

    const handleChange = name => event => {
        let data = {}
        data[name] = event.target.value
        
        dispatch( setValueDatosBasicos(data) )
        //dispatch( justReload( data ) )
    };

    const onSubmit = () => {
        console.log("formulario valido")
        
        dispatch( cambiarUrl({
            urlNueva: "/pagina-de-prueba"  
        }))
    };

    return(
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <span className={classes.mainText}>
                PaginaDePrueba
                </span>
                <span className={classes.secondaryText}>
                    Completá tus datos y conocé el límite al que vas a poder acceder.
                </span>
                <ValidatorForm onSubmit={onSubmit} onError={errors => console.log(errors)} className={classes.formBox} >
                    <Grid container >
                        <Grid item xs={12} md={6}>
                            <TextValidator
                                fullWidth
                                label="Nombre"
                                onChange={handleChange('nombre')}
                                name="nombre"
                                value={datosBasicos.nombre}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextValidator
                                fullWidth
                                label="Apellido"
                                onChange={handleChange('apellido')}
                                name="apellido"
                                value={datosBasicos.apellido}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Button type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </section>
        </section>
   ) 
};
    
export default PaginaDePrueba;