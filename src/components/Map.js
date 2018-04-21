import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Polygon } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import icon from '../resources/css/img/nab_atm.jpeg';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

// const mapTypeControlOptions = 

// const zoomControlOptions = {
//     position: window.google.maps.ControlPosition.LEFT_CENTER
// }

// mapTypeControlOptions={mapTypeControlOptions}

// zoomControlOptions={zoomControlOptions}

const GettingStartedGoogleMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap ref={props.onMapLoad} zoom={props.zoom} center={props.center} onClick={props.onMapClick} >

            <SearchBox
                ref={props.onSearchBoxMounted}
                bounds={props.bounds}
                controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
                onPlacesChanged={props.onPlacesChanged}
            >
            <input
                onChange={props.simulateOnChange}
                type="text"
                placeholder="Search other places"
                value={props.simulateSearchVal}
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    marginTop: `27px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
            </SearchBox>
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

    component
    
    simulateOnChange(){

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
                    simulateSearchVal="Asian groceries near me"
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
