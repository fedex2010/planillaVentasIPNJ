//Dependencies
import React  from 'react';
import useReactRouter from 'use-react-router';
//material
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import ReactLoading from 'react-loading';
import clsx from 'clsx';
//components
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { SnackBarContextProvider } from "./SnackBarContext";

const useStyles = makeStyles({
  mainContainer: {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    background: 'white',
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  welcomenContainer:{
    paddingLeft: "0",
    paddingRight: "0"
  },
  loadingSurface:{
    width: "100%",
    height:"100hv",
    display:"flex",
    alignContent:"center",
    justifyContent:"center"
  }
});

export default function App(props){
  const classes = useStyles();
  const {  location } = useReactRouter();
  const mainContainerStyles = clsx(classes.mainContainer, classes.welcomenContainer)

  //no muestro el header en la landing
  let header = <Header />

  if(location.pathname === "/buhobank/tarjetas/welcome" 
            || location.pathname === "/buhobank/tarjetas/"
            || location.pathname === "/buhobank/tarjetas"
            || location.pathname === "/"){
    header = null
  }
  
  return (
    <CssBaseline>
        <div className={mainContainerStyles}>
            {header}

            <div className="load">
              <ReactLoading type='spin' delay={1} color="#f47321" className="loading" />
            </div>
            
            <SnackBarContextProvider>
              <main>
                <Content body={props.children} />
              </main>
            </SnackBarContextProvider>

            <Footer />    
        </div >
    </CssBaseline>
  );
}
