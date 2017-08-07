import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeMapAction } from '../actions/googleMapsActions';

class Map extends Component {
    mapRef;

    componentDidMount() {
        this.props.dispatch(initializeMapAction({
            ref: this.mapRef,
            zoom: 13,
            center: {
                lat: -25.3631,
                lng: 131.044
            }
        }));
    }

    render() {
        return(
            <div id="map" ref={el => this.mapRef = el}>Loading...</div>
        )
    }
}


const mapStateToProps = ({ map, routes }) => ({
    routes,
    map
});

export default connect(mapStateToProps)(Map);
