/**
 * PageOB404.js
 * @author Jaiván Piña
 */

//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import $ from 'jquery';
import { onBoardingDigital } from '../../actions/actions'

//material-ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//Assets
import error from '../../static/img/404.png';

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                marginTop: '',
                marginBottom: ''
            },
            disabledBtn: false,
        }
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        $(".load").fadeOut(700);
    }

    onLoad() {
        var diferencia = window.innerHeight - (window.innerHeight / 2) - (this.refs.description.clientHeight/2) ;
        var marginTop = {
            marginTop: diferencia + 'px',
            marginBottom: diferencia + 'px'
        }
        this.setState({
            style: marginTop
        });
    }
    render() {
        return (
            <div className="onboarding">
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <div ref="description" style={this.state.style}>
                        <Grid item xs={12} sm={12}>
                            <img src={error} className="error" onLoad={this.onLoad} />
                        </Grid>
                        <Grid item xs={12}>
                            <div className="content-description">
                                <h5 className="not-found" >404</h5>
                                <h6 className="description">La página solicitada no existe.</h6>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default NotFound;