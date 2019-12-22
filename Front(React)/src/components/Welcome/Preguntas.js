//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        [theme.breakpoints.down('md')]: {
            paddingLeft:15,
            paddingRight:15
        }
    },
    mainBox: {
        maxWidth: "1140px",
        paddingTop: "10px",
        paddingBottom: "30px"
    },
    frequentQuestions : {
        fontSize: "42px",
        fontStyle: "normal",
        fontStretch: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        color: "#333333",
        marginBottom: "75px",
        fontWeight: "300",
        [theme.breakpoints.down('md')]: {
            fontSize: "32px",
        }
    },
    accordionBox:{
        width: "100%"
    },
    expansionPanel: {
        marginBottom: "20px",
        boxShadow: "none"
    },
    titleSectionPanel: {
        fontSize: "20px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.4",
        letterSpacing: "normal",
        color: "#333333",
        width: "100%",
        textAlign: "left"
    },
    descriptionSectionPanel: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        color: "#808080",
        textAlign: "left"
    },
    linkAqui: {
        textDecoration: "none",
        color: "#fd7e14"
    }
}))

const Preguntas = ( ) => {
    const classes = useStyles();

    let contentAccordion = [
        {
            title: "¿Qué requisitos debo cumplir?",
            description: "Nacionalidad: argentino o extranjero con residencia permanente en el país. Edad: 18 a 80 años al momento del alta, con permanencia hasta 85 años. Ingreso neto mínimo: $ 14.500."
        },
        {
            title: "¿Como mantengo la bonificación después del primer año?",
            description: "Podrás hacerlo acreditando el sueldo en Banco Hipotecario o mediante otras opciones, dependiendo del servicio al que accedas."
        },
        {
            title: "¿Qué significa 100% online?",
            description: "Te podrás dar de alta como cliente sin necesidad de acercarte al Banco a firmar ningún papel. Para esto, solamente necesitás tener a mano tu DNI y algún dispositivo móvil como el celular o tablet. Durante el proceso te vamos a pedir fotos del frente y dorso del DNI y unas selfies para estar seguros que sos vos y así poder dar de alta los productos. Luego recibirás las tarjetas en tu domicilio o en alguna Sucursal del Banco, lo que te resulte más cómodo."
        },
        {
            title: "¿Seguís con dudas?",
            description: <span>Hacé click 
                <a href="https://hipotecario.microsoftcrmportals.com" target="_blank" className={classes.linkAqui}> aquí </a> 
            para obtener más información.</span>
        }
    ]

   return(
        <section className={classes.mainContainer}>
            <section className={classes.mainBox}>
                <p className={classes.frequentQuestions}>
                    Preguntas frecuentes
                </p>

                <div className={classes.accordionBox}>

                    {contentAccordion.map(( data, index ) => {
                        return (
                            <ExpansionPanel key={index} className={classes.expansionPanel}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <span className={classes.titleSectionPanel}>
                                        <strong> {data.title} </strong>
                                    </span>   
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>
                                    <span className={classes.descriptionSectionPanel}>
                                        {data.description}
                                    </span>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })}
                      
                </div>
            </section>
        </section>
   ) 
};
    
export default Preguntas;