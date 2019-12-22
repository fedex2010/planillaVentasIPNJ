//Dependencies
import React from 'react';
 
 import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

const RecapchaDatosBasicos = ( ) => {
   const { executeRecaptcha } = useGoogleReCaptcha();
   const token = executeRecaptcha("login_page");
   
   token.then( r => console.log(r)).catch( e => console.error(e))


   return(
        <section >
             
        </section>
   ) 
};
    
export default RecapchaDatosBasicos;
