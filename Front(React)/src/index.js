import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import * as serviceWorker from './serviceWorker';
import { Router  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//redux
import { Provider } from 'react-redux'
import { createStore2,createPersistor } from './reducers/store'
import { PersistGate } from 'redux-persist/integration/react'

//Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Routes
import AppRoutes from './Routes';



//APPLICATION BASE STYLE
//estructura de theme : 
//"https://material-ui.com/es/customization/default-theme/?expend-path=$.breakpoints.values"
const theme = createMuiTheme({
    footer:{
        background:"black"
    },
    palette: {
        primary: {
            light: '#ff7043',
            main: '#f47321',
            dark: '#f47321',
            contrastText: '#FFF'
        }
    },
    overrides: {
        MuiInput: {
            underline: {
                "&&&&:hover:before": {
                    borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: "30px !important",
                padding: "8px 25px 8px 25px",
                height: "auto",
                fontWeight: "normal"
            },
          },
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"RobotoBH"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
   	  '"DIN-Condensed-Bold"'
        ].join(','),
      },
      breakpoints:{
        values:{
            xl: 1200,
            lg: 992,
            md: 768,
            sm: 576,
            xs: 0
        }
      },
      medidasSitio:{
        mobileWidth:"90%",
        tabletWidth:"85%",
        desktopWidth:"70%",
     }
});

export const browserHistory = createBrowserHistory();

ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={createStore2()}>
                <PersistGate loading={null} persistor={createPersistor()}>
                    <Router history={browserHistory}>
                        <AppRoutes />
                    </Router >
                </PersistGate>
            </Provider>
        </MuiThemeProvider>
    ,
    document.getElementById('root')
);
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

