
//Dependencies
import React,{ useState, useRef, useEffect, Component} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//CARGAR MEDIDAS DESDE PROPS

export class MapContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
	key : 1,
        latitud: this.props.latitud,
        longitud: this.props.longitud
      };
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.latitud !== this.props.latitud || nextProps.longitud !== this.props.longitud) {
	console.log(this.state.key)

	let key = this.state.key + 1 // SOLO PARA FORZAR RERENDER DEL MAPA

      this.setState({
	key  
	});
      }


    }

    render() {
      let style = {
        width: this.props.width,
        height: this.props.height,
        position: "relative"
      }
    

      return (
        <Map key={this.state.key} zoom={15} google={this.props.google} style={style} initialCenter={{
                                                                    lat: this.props.latitud,
                                                                    lng: this.props.longitud
                                                                    }}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Banco hipotecario'} />
  
        </Map>
      );
    }
  }

export default GoogleApiWrapper(
  (props) => ({
      apiKey: "AIzaSyDWJ49frOXfDKeE0Teqe-IyCP54YcJJJnk"
    }
  )
)(MapContainer)

//TOEKN GOOGLE MAPS: AIzaSyA9tm0VAXy8Dfo_UQD73VU6HVZEyadTXGM 
