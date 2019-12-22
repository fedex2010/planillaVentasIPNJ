//Dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f1f1f1",
        [theme.breakpoints.down('md')]: {
            paddingLeft:15,
            paddingRight:15
        }
    },
    mainBox: {
        maxWidth: "1140px",
        paddingTop: "70px",
        [theme.breakpoints.down('md')]: {
            paddingTop: 10,
        }
    },
    cftText: {
        fontSize: "30px",
        lineHeight: "normal",
        color:" #999999"
    },
    legalesText: {
        color: "#717171",
        textAlign: "justify",
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 0
    },
    legalesLink:{
        color:"#f37320"
    }
}))

const Legales = ( ) => {
    const classes = useStyles();

   return(
        <section className={classes.mainContainer}>
            <section className={classes.mainBox}>
                <p className={classes.cftText}>
                    (*)CFT 0,00%
                </p>
                <p className={classes.legalesText}>
                    LA PRESENTE NO IMPLICA OFERTA DE CRÉDITO NI ACEPTACIÓN DE LA SOLICITUD POR PARTE DE 
                    ESTE BANCO. CONSULTE CONDICIONES VIGENTES AL MOMENTO DE CONTRATACIÓN. EL EFECTIVO 
                    OTORGAMIENTO DE LA TARJETA DE CRÉDITO SE ENCUENTRA SUJETO A LA APROBACIÓN PREVIA POR 
                    PARTE DE ESTE BANCO. EL BANCO PODRÁ REQUERIR, SI ASÍ LO CONSIDERASE, DOCUMENTACIÓN 
                    ADICIONAL, INCLUYENDO AQUELLA QUE ACREDITE INGRESOS DEL CLIENTE. LA COMISIÓN DE 
                    RENOVACIÓN ANUAL SERÁN BONIFICADOS ÚNICAMENTE PARA NUEVOS CLIENTES QUE NO SEAN 
                    TITULARES DE PRODUCTOS DE ESTE BANCO AL MOMENTO DE LA CONTRATACIÓN DE LA TARJETA DE 
                    CRÉDITO POR <a href="https://www.buhobank.com" className={classes.legalesLink}>www.buhobank.com</a>. 
                    EL BANCO PODRÁ DEJAR SIN EFECTO EN CUALQUIER MOMENTO, 
                    PREVIA NOTIFICACIÓN AL CLIENTE CON 60 DÍAS DE ANTICIPACIÓN, LAS BONIFICACIONES DE 
                    COMISIONES Y/O CARGOS MENCIONADOS EN LA PIEZA. PROMOCIONES VÁLIDAS EN LA REPÚBLICA 
                    ARGENTINA SÓLO PARA LOS DESTINATARIOS DE ESTA PIEZA QUE SOLICITEN UNA TARJETA DE 
                    CRÉDITO MEDIANTE <a href="https://www.buhobank.com" className={classes.legalesLink}>www.buhobank.com</a> 
                    PARA COMPRAS QUE EFECTUEN EN LOS COMERCIOS Y DIAS 
                    INDICADOS EN LA PIEZA ENTRE EL 01/10/2019 Y 31/12/2019, AMBOS INCLUSIVE, CON LA
                     TARJETA DE CRÉDITO VISA EMITIDA POR ESTE BANCO QUE NO REGISTREN MORA. QUEDAN 
                     EXCLUIDAS LAS TARJETAS DE CRÉDITO LIBERTAD VISA BANCO HIPOTECARIO. 
                     NO ACUMULABLE CON OTRAS PROMOCIONES Y/O DESCUENTOS VIGENTES. NO APLICA A LOS PAGOS 
                     REALIZADOS POR LA PLATAFORMA DE PAGOS MÓVILES (POS MÓVIL, BOTÓN DE PAGO Y 
                     BILLETERA ELECTRÓNICA). NO APLICA A LOS CONSUMOS REALIZADOS POR MERCADO PAGO. 
                     CONSULTE EL AHORRO APLICABLE Y VIGENTE EN CADA COMERCIO ANTES DE EFECTUAR LA COMPRA. 
                     LOS TOPES INDICADOS SON MENSUALES CALENDARIO Y POR CUENTA. EL REINTEGRO SE VERÁ 
                     REFLEJADO EN EL RESUMEN DE CUENTA DONDE INGRESE EL CONSUMO, O EN EL POSTERIOR EN 
                     SU CASO. EN CASO DE COMPRA EN CUOTAS LA TOTALIDAD DEL REINTEGRO SE EFECTUARÁ JUNTO 
                     CON EL INGRESO EN EL RESUMEN DE LA 1RA CUOTA. CUANDO AQUELLAS PROMOCIONES QUE SEAN 
                     TAMBIEN PARA CONSUMOS EFECTUADOS CON TARJETA DE DÉBITO, EL REINTEGRO SE ACREDITARÁ 
                     A LOS 10 DÍAS HÁBILES DE EFECTUADO EL CONSUMO EN LA CUENTA DE ORIGEN DE LOS FONDOS. 
                     (*) COSTO FINANCIERO TOTAL (CFT) 0.00% ÚNICAMENTE PARA PLANES DE 18 CUOTAS SEGÚN SE 
                     INDICA EN LA PIEZA CON TASA NOMINAL ANUAL (TNA) / TASA EFECTIVA ANUAL (TEA) 0.00%. 
                     (1) QUEDA EXCLUIDO RUBROS PATIO CONSTRUCTOR / TELEVISORES / CLIMATIZACIÓN / 
                     PEQUEÑO ELECTRO. (2) VÁLIDA EXCLUSIVAMENTE PARA PRODUCTOS SELECCIONADOS DE LAS 
                     CATEGORÍAS LÍNEA BLANCA (AIRE ACONDICIONADO, LAVAVAJILLAS, LAVARROPAS Y SECARROPAS,
                      COCINAS, HORNOS Y ANAFES, CALEFACTORES Y ESTUFAS, TERMOTANQUES Y CALEFONES, 
                      HELADERAS, CONGELADORES Y FREEZERS),TELEVISORES, COMPUTADORAS, NOTEBOOK Y TABLETS. 
                      CELULARES 4G (EXCEPTO CELULARES IPHONE), MUEBLES, COLCHONES, BICICLETAS Y JUGUETES.
                       QUEDAN EXCLUIDAS LAS SUCURSALES OUTLET. (3) SÓLO PARA CONSUMOS EFECTUADOS EN TODAS LAS PLATAFORMAS DE MERCADO LIBRE Y MERCADO PAGO CON TARJETA DE DÉBITO VISA EMITIDA POR ESTE BANCO. EL REINTEGRO SE CALCULARÁ SOBRE EL MONTO FACTURADO. (4) PARA CLIENTES TITULARES DE UN PAQUETE MULTIPRODUCTO GOLD PACK Y BUHO PACK EL PORCENTAJE DE REINTEGRO SERÁ DEL 20% DEL MONTO TOTAL DEL CONSUMO. TOPE MENSUAL Y POR CUENTA: $ 550. PARA CLIENTES TITULARES DE UN PAQUETE MULTIPRODUCTO PLATINUM Y BLACK PACK EL PORCENTAJE DE REINTEGRO SERÁ DEL 25% DEL MONTO TOTAL DEL CONSUMO. TOPE MENSUAL Y POR CUENTA: $ 700. (5) DESCUENTO CON TARJETA DE DÉBITO Y CRÉDITO SÁBADO Y DOMINGO: 20%. DESCUENTO CON TARJETA DE DÉBITO Y CRÉDITO LUNES A VIERNES: 15%. BONIFICACIÓN EN LÍNEA DE CAJA. BANCO HIPOTECARIO S.A. CUIT 30-50001107-2, RECONQUISTA 151 (1003) CABA.</p>
            </section>
        </section>
   ) 
};
    
export default Legales;