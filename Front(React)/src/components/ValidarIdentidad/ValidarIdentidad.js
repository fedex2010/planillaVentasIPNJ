//Dependencies
import React,{ useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
//material
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//reducers
import { enviarMail } from "../../reducers/Mail/MailActions"
//components
import mailImg from "../../images/validar-identidad/mail.png"
import { SnackBarContext } from "../SnackBarContext";
import {
    showLoading,
    hideLoading
} from "../../reducers/Navegacion/NavegacionActions"


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
        width: "80%",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
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
        flexDirection: "column"
    },
    mainText:{
        fontWeight: "700",
        color: "#606162",
        textAlign: "center",
        fontSize: "1.5rem",
        lineHeight: "110%",
    },
    adviceText:{
        color: "#606162",
        fontSize: "18px",
        marginTop: 15,
        marginBottom: 55
    },
    resendMailBox:{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexDirection: "column"
    },
    questionText:{
        fontWeight: "700",
        color: "#606162",
        textAlign: "center",
        fontSize: "18px",
        lineHeight: "110%",
    },
    helperText:{
        color: "#606162",
        fontSize: "16px",
        marginTop: 5,
        marginBottom: 25
    },
    mailImg:{
        width: 245,
        height: 163,
        marginBottom:75
    },
    button:{
        color:"#f07339"
    }
}))

const ValidarIdentidad = ( ) => {
    const [snackState, setSnackState] = useContext(SnackBarContext);
    const [state, setState] = React.useState({
        mail:null
    });
    const datosPersonales = useSelector(state => state.datosBasicos);

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value.trim()});
    };




    const dispatch = useDispatch();

    const [showResendMail,setShowResendMail] = useState(false)
    const [sendindMail,setSendindMail] = useState(false)

    useEffect(() => {
        dispatch( hideLoading() )        
    },[]);

    const toggleResendMail = () => {
        setShowResendMail(!showResendMail)
    }

    
 
    const handleMail = () => {
        dispatch( enviarMail({
            email:state.mail
        }))
        .then( response => {

            setSendindMail(true)

            setSnackState({
                ...snackState,
                open: true,
                text:"¡Listo! Te lo reenviamos",
                styles:{
                    backgroundColor:"green"    
                }
            })
            
            setTimeout( () => { 
                setSnackState({
                    ...snackState,
                    open: false,
                }); 
                setSendindMail(false)
            }, 2000);
        })
        //COMO MOSTRAR ESTE MENSAJE DE ERROR???
        .catch( error => console.error(error) )
    }

    const classes = useStyles();
    
    let resendMailBoxVisibility = (showResendMail) ? {display:"none"} :  {display:"flex"} 
    let sendOtherMailBoxVisibility = (showResendMail) ? {display:"flex"} :  {display:"none"} 

    if(sendindMail){
        resendMailBoxVisibility =  {display:"none"} 
        sendOtherMailBoxVisibility =  {display:"none"} 
    }

    return(
        <section className={classes.mainContainer}>
            <section className={classes.dataBox}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} >
                        <section className={classes.sectionBox}>
                            <img src={mailImg} className={classes.mailImg} />
                            <span className={classes.mainText}>
                                Abrí desde el celular
                            </span>
                            <span className={classes.mainText}>
                                el link que te enviamos por email
                            </span>
                            <span className={classes.adviceText}>
                                (Si no lo ves, revisá en correo no deseado o "spam")
                            </span>

                            <section className={classes.resendMailBox} style={resendMailBoxVisibility}>
                                <span className={classes.questionText}>
                                    ¿No te llegó el email?
                                </span>
                                <span className={classes.helperText}>
                                    Te lo enviamos a <strong>{datosPersonales.email}</strong>
                                </span>
                                
                                <Button onClick={handleMail} href="#text-buttons" className={classes.button}>
                                    REENVIAR
                                </Button>
                                <Button onClick={toggleResendMail} className={classes.button}>
                                    ENVIAR A OTRO MAIL
                                </Button>
                            </section>
                            <section className={classes.resendMailBox} style={sendOtherMailBoxVisibility}>
                                <TextField
                                    onChange={handleChange('mail')}
                                    fullWidth
                                    placeholder={"Ingresá el nuevo mail"}
                                    name="email"
                                />
                                <section className={classes.buttonGroup}>
                                    <Button  onClick={handleMail} >
                                        Enviar
                                    </Button>
                                    <Button  onClick={toggleResendMail} >
                                        Cancelar
                                    </Button>
                                </section>
                            </section>
                        </section>
                            
                    </Grid>
                </Grid>
            </section>
        </section>
    ) 
};
    
export default ValidarIdentidad;