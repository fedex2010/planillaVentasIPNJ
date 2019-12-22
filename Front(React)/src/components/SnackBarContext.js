import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Grow from '@material-ui/core/Grow';

const SnackBarContext = React.createContext([{}, () => {}]);

function GrowTransition(props) {
    return <Grow {...props} />;
  }

const SnackBarContextProvider = (props) => {

  const [snackState, setSnackState] = useState({
        open: false,
        styles:{
        }
    });
  
  const handleOnClose = () =>{
    setSnackState({
      ...snackState,
      open:false
    })
  }

  let styles = {
    padding:"1.2em",
    ...snackState.styles
  }

  let text = "Por favor, revisá los campos en rojo"

  if(snackState.text){
    text = snackState.text
  }
  
  return (
    <SnackBarContext.Provider value={[snackState, setSnackState]}>
        {props.children}

        <Snackbar anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={snackState.open}
              onClose={handleOnClose}
              TransitionComponent={Grow}>
            
              <SnackbarContent
                aria-describedby="client-snackbar"
                message={
                  <span id="client-snackbar" style={styles}>
                    {text}
                  </span>
                }
              />
              
        </Snackbar>

    </SnackBarContext.Provider>
  );
}

export { SnackBarContext, SnackBarContextProvider };