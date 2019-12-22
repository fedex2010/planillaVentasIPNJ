
import axios from 'axios';

const KEY_PREFIX = "bh_"

class ProxyRequester{
    
    static getResource(url, config = {}){
        let { timeout = 60000 } = config

        let dataSaved = sessionStorage.getItem(KEY_PREFIX + url)
        
        if( dataSaved === null ){

            return axios.get( url ,{timeout})
                            .then( response =>{
                                sessionStorage.setItem( KEY_PREFIX + url, JSON.stringify(response))
                                return response
                            })
                            .catch( err => {
                                sessionStorage.removeItem( KEY_PREFIX + url )
                                throw err
                            })

        }else{
            return new Promise(function(resolve, reject) {
                resolve( JSON.parse(dataSaved) )  
              })
        }
    }
}

export default ProxyRequester;
