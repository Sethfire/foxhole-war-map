import React from 'react';
import L from 'leaflet';
import {Marker, LayerGroup, Tooltip} from 'react-leaflet';
import {o, w, k, mapArray} from './MapData.js';

import MapItem from './MapItem.js';
import * as MapIcon from './IconData.js';


function convertCoords(regionId,x,y) {
	var xcoord = mapArray[regionId-3].center[1] - (w/2) + (w*x);
	var ycoord = mapArray[regionId-3].center[0] + (k/2) - (k*y);
	return {xcoord,ycoord};
}

class MapItems extends React.Component{

    constructor() {
        super();
        this.state = {
            mapLoaded: false,
			mapMarkers: []
        }
    }

    componentDidMount() {
        fetch(process.env.PUBLIC_URL+'testdata.json')
        .then(response => response.json())
        .then(data => {
            data.dynamic.map(region => {
                const regionData = JSON.parse(region.data);
                regionData.mapItems.map(mapItem => {
                    let coords = convertCoords(regionData.regionId, mapItem.x, mapItem.y);
                    let mapItemObject = new MapItem(regionData.regionId,mapItem.teamId,mapItem.iconType,coords.xcoord,coords.ycoord,mapItem.flags);
                    if (mapItemObject.iconImage != null) {
                        this.setState(prevState => {
                            const mapMarkers = prevState.mapMarkers.concat(mapItemObject);
                            return { mapMarkers };
                        });
                    }
                });
            });
            this.setState({
                mapLoaded: true
            });
        });
    }

    render() {
        if (this.state.mapLoaded) {
            const mapMarkers = this.state.mapMarkers.map(mapItem => {
                return(
                    <Marker icon={mapItem.iconImage} position={[mapItem.y,mapItem.x]}>
                        <Tooltip sticky><strong><font color='#d67b52'>Placeholder Name</font></strong><br />{mapItem.teamPrefix}{mapItem.description}<br />{mapItem.regionName} </Tooltip> 
                    </Marker> 
                );
            });
            return(
                <LayerGroup>
                    {mapMarkers}
                </LayerGroup>
            );
        } else {
            return null;
        }
    }
}

export default MapItems;