import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeMapAction } from '../actions/googleMapsActions';

class Map extends Component {
    mapRef;

    componentDidMount() {
        this.props.dispatch(initializeMapAction({
            ref: this.mapRef,
            center: {
                lat: 29.423795,
                lng: -98.492306
            },
            zoom: 12
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
