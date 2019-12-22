var path 			= require('path');
var util 			= require('util');
var rootPath        = path.normalize(__dirname + '/..');
var env             = process.env.REACT_APP_APP_ENV || 'dev';

//let config = require (__dirname + util.format('/'+env+'.config.js') ) 

/*config.getBasePathImages = function(){
    return (process.env.PUBLIC_URL === "") ? "http://localhost:5000" : process.env.PUBLIC_URL
}*/

//TOMAR DESDE ARCHIVO DE CONF
let config ={
    prod:{
        debugGA:false,
        siteKey:"6LeAmsEUAAAAAJxmchc-m60T7T9EsfoMzGjNEqgF",
    },
    dev: {
        debugGA:true,
        siteKey:"6LcglsEUAAAAADodCXwJkvcHHfdkb0hiY-GULQbD"
    }
}

console.log("ENV: " + env)

let confToExport = config[env]
confToExport.env = env

export default confToExport;


