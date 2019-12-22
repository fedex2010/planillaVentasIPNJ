
//Dependencies
import React  from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';


const BuhoBankSelect = (props) => {

  const isValid = () => {
    if( !!props.optional ){
      return true
    }
    
    return !!props.value === true && props.value !== -1
  }

  const handleChange = (e) => {
    props.setItem(e)
  }

  let {
      value = "",
      label ,
      name, 
      errorMessage="error",
      externalSubmitted=false,
      menuItems = []
    } = props

         

    let errorTag = null
    let errorStyle = false

    if(externalSubmitted && !isValid()){
      errorTag = <FormHelperText style={{color:"red"}}>{errorMessage}</FormHelperText>
      errorStyle = true
    }

    console.log("-------------------------")
    console.log(menuItems)
      
    return (
      <FormControl fullWidth className="ip-form-control" error={errorStyle}>
          <InputLabel htmlFor={name}>{label} </InputLabel>
          <Select  onChange={handleChange} name={name} value={value}>
                {
                  Object.keys(generos).map((genero, key) => (
                    <MenuItem key={key} value={genero}>
                        {generos[genero]}
                    </MenuItem>
                  ))
                }
              <MenuItem value={-1}>Seleccioná</MenuItem>
          </Select>
          {errorTag}
      </FormControl>
    );
}

export default BuhoBankSelect;
