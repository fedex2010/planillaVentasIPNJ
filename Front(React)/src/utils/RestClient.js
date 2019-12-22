
import axios from 'axios'
import GlobalValidationsUtils from './GlobalValidationsUtils'

const instance = axios.create();

const doGet = (url , params = {}) => {
    
    return instance.get( url , {
        ...params,
        timeout: 60000
      })
      .then( response => response )

      .catch( error => {
        console.error("*******************")
        console.error(error)
        console.error("*******************")
        
        throw error
        
        /*if( GlobalValidationsUtils.check(error) ){
        }*/

      })
}

const doPost = (url,data = {}) => {
  
    return instance.post(url, data,{timeout: 60000})
      
      .then( response => response )

      .catch( error => {
        console.error("*******************")
        console.error(error)
        console.error("*******************")

        throw error
        /*if( GlobalValidationsUtils.check(error) ){

        }*/
      })  
}

const doPut = (url,data) => {
    return instance.put(url, data)
      
    .then( response => response )

    .catch( error => {
      

      throw error
    })  
}

const doDelete = (url) => {
    return instance.put(url)
      
    .then( response => response )

    .catch( error => {

     

      throw error
    })  
}

const RestClient = {
    doGet,
    doPost,
    doPut,
    doDelete
}

export default RestClient
