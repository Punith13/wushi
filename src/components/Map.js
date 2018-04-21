import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Polygon } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import icon from '../resources/css/img/nab_atm.jpeg';
import AlipayScreen from './AlipayScreen';
import { getAlipayImage } from '../Actions';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

const GettingStartedGoogleMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap ref={props.onMapLoad} zoom={props.zoom} center={props.center} onClick={props.onMapClick} >

            <MarkerClusterer averageCenter enableRetinaIcons={true} gridSize={30} zoomOnClick={false} >
                    {props.googleLocationMarkers.map((marker, index) =>
                        <Marker key={index} position={marker.position} 
                                onClick={() => props.onVendorMarkerClick(marker)}
                        />
                    )}
        	</MarkerClusterer> 

			{/* {props.polygons.map((polygon, index) => (
				<Polygon
					path={polygon.coords}
					onRightClick={() => console.log('you clicked ' + polygon)}
					onClick={() => props.onPolygonClick(polygon)}
					key={polygon.id}
					options={polygon.options}
				/>

			))}
			<MarkerClusterer averageCenter enableRetinaIcons={true} gridSize={30} zoomOnClick={false} >
				{props.markers.map(marker => (
					<Marker key={marker._id}
						{ ...marker} 
						options={{ icon: { url: icon, scaledSize: new window.google.maps.Size(31, 43) } }}
						onClick={() => props.onMarkerClick(marker)}
					/>
				))}
        	</MarkerClusterer> */}
            <MarkerClusterer averageCenter enableRetinaIcons={true} gridSize={30} zoomOnClick={false} >
				{props.markers.map(marker => (
					<Marker key={marker.id}
						{ ...marker} 
						options={{ icon: { url: icon, scaledSize: new window.google.maps.Size(30, 40) } }}
						onClick={() => props.onMarkerClick(marker)}
					/>
				))}
        	</MarkerClusterer> 
		</GoogleMap>
	))
);

class Map extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            center : {
                lat: -37.745344, 
                lng: 144.935107
            }, 
            zoom : 8, 
            googleLocationMarkers: [], 
            open : false
        }
	}
    
	handleMapLoad(map) {
		this._mapComponent = map;
	}

	handleMapClick(event) {
		console.log(event.latLng.lat(), event.latLng.lng());
    }

    callback(results, status) {
        if (status == window.google.maps.places.PlacesServiceStatus.OK) {
            const markerData = results.map( el => {
                return {
                    id: el.id, 
                    position: {
                        lat: el.geometry.location.lat(), 
                        lng: el.geometry.location.lng()
                    }
                }
            });
            this.setState({ googleLocationMarkers: markerData })
        }
      }

    componentWillReceiveProps(nextProps){
          const map = this._mapComponent.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          var request = {
            bounds: map.getBounds(),
            keyword: nextProps.googleLocation
          };
          const service = new window.google.maps.places.PlacesService(map);
          service.radarSearch(request, this.callback.bind(this));
    }

    onVendorMarkerClick(){
        this.setState({ open: true})

        this.props.getAlipayImage('AUD', '10');
    }
    
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Helmet title="Wushi Integrated" />
				<GettingStartedGoogleMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBSWVa68rndgUrYRRxC2cXrd-KDP24G8qA"
					loadingElement={<div style={{ height: '100vh' }} />}
					containerElement={<div style={{ height: '100vh' }} />}
					mapElement={<div style={{ height: '100vh' }} />}
					center={this.state.center}
                    markers={this.props.markers}
					onMapLoad={map => this.handleMapLoad(map)}
					onMapClick={e => this.handleMapClick(e)}
					zoom={this.state.zoom}
                    googleLocationMarkers={this.state.googleLocationMarkers}
                    onVendorMarkerClick={this.onVendorMarkerClick.bind(this)}
				/>
                <AlipayScreen open={this.state.open}/>
			</div>
		);
	}
}

// onPolygonClick={polygon => this.selectConstituency(polygon)}
// onMarkerClick={marker => this.props.loadPollingBoothDemographicData()}

/* markers={this.props.markers}
polygons={this.props.polygons} */

const mapStateToProps = ({ locationState, googleLocationState }) => {
	return {
        markers: locationState.atm, 
        googleLocation: googleLocationState.googleLocation
	};
};

// polygons: mapState.polygons, 

export default connect(mapStateToProps, {getAlipayImage})(Map);
