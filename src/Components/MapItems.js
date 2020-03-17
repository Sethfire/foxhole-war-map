import React from 'react';

import L from 'leaflet';
import {Marker, LayerGroup, Tooltip} from 'react-leaflet';
import {o, w, k, mapArray} from '../mapData.js';

import MapItem from './MapItem.js';
import * as MapIcon from '../IconData.js';


function convertCoords(regionId,x,y) {
	var xcoord = mapArray[regionId-3].center[1] - (w/2) + (w*x);
	var ycoord = mapArray[regionId-3].center[0] + (k/2) - (k*y);
	return {xcoord,ycoord};
}

class MapItems extends React.Component{

    constructor() {
        super();

        this.state = {
			mapMarkers: []
        }
    }

    componentDidMount() {
        fetch("https://war-service-live.foxholeservices.com/api/worldconquest/maps/DeadLandsHex/dynamic/public")
            .then(response => response.json())
            .then(data => {
                for (var i in data.mapItems) {
                    let mapItem = data.mapItems[i];
					let coords = convertCoords(3, mapItem.x, mapItem.y);
                    let mapItemObject = new MapItem(3,mapItem.teamId,mapItem.iconType,coords.xcoord,coords.ycoord,mapItem.flags);
					if (mapItemObject.iconImage != null) {
						this.setState(prevState => {
							const mapMarkers = prevState.mapMarkers.concat(mapItemObject);
							return { mapMarkers };
						});
					}
                }
            });
    }

    render() {
        const mapMarkers = this.state.mapMarkers.map(mapItem =>
			<Marker icon={mapItem.iconImage} position={[mapItem.y,mapItem.x]}>
                <Tooltip>{mapItem.teamPrefix}{mapItem.description}<br />{mapItem.regionName} </Tooltip> 
            </Marker> 
		);
		console.log(this.state.mapMarkers);
        return(
            <LayerGroup>
				{mapMarkers}
			</LayerGroup>
        );
    }
}

export default MapItems;