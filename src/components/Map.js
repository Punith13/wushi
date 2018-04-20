import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Polygon } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import icon from '../resources/css/img/nab_atm.jpeg';

// const mapTypeControlOptions = 

// const zoomControlOptions = {
//     position: window.google.maps.ControlPosition.LEFT_CENTER
// }

// mapTypeControlOptions={mapTypeControlOptions}

// zoomControlOptions={zoomControlOptions}

const GettingStartedGoogleMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap ref={props.onMapLoad} zoom={props.zoom} center={props.center} onClick={props.onMapClick} >
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
					<Marker key={marker._id}
						{ ...marker} 
						options={{ icon: { url: icon, scaledSize: new window.google.maps.Size(30, 40) } }}
						onClick={() => props.onMarkerClick(marker)}
					/>
				))}
        	</MarkerClusterer> */}
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
            zoom : 8
        }
	}

	componentDidMount() {
		// this.props.changeZoomCenter({
		// 	center: {
		// 		lat: 15.011064944887153,
		// 		lng: 76.95246969112031
		// 	}, 
		// 	zoom: 6
		// })
		//this.props.getPolygons();
	}

	handleMapLoad(map) {
		this._mapComponent = map;
	}

	handleMapClick(event) {
		console.log(event.latLng.lat(), event.latLng.lng());
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Helmet title="Wushi Integrated" />
				<GettingStartedGoogleMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: '100vh' }} />}
					containerElement={<div style={{ height: '100vh' }} />}
					mapElement={<div style={{ height: '100vh' }} />}
					center={this.state.center}
                    markers={this.props.markers}
					onMapLoad={map => this.handleMapLoad(map)}
					onMapClick={e => this.handleMapClick(e)}
					zoom={this.state.zoom}
				/>
			</div>
		);
	}
}

// onPolygonClick={polygon => this.selectConstituency(polygon)}
// onMarkerClick={marker => this.props.loadPollingBoothDemographicData()}

/* markers={this.props.markers}
polygons={this.props.polygons} */

const mapStateToProps = ({ locationState }) => {
    console.log(locationState);
	return {
		markers: locationState.atm
	};
};

// polygons: mapState.polygons, 

export default connect(mapStateToProps)(Map);
