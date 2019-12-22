
import { browserHistory } from "../index"

class GlobalValidationsUtils{

  check(err){
    
    this.sesionIsExpired(err)

    return false
  }

  sesionIsExpired(err){
    console.log(err.response.status)
    
    browserHistory.push( "welcome" )
  }
}

export default new GlobalValidationsUtils()