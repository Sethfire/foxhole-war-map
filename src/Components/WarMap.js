import React from "react";

import L from 'leaflet';
import {Map, TileLayer, Marker, Circle, LayerGroup} from 'react-leaflet';

import {mapBounds, mapHeight, mapWidth, mapOrigin, o, w, k, mapArray} from '../mapData.js';
import {MapItem} from './MapItem.js';
import MapRegions from './MapRegions.js';

/*
var testIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/the-fellowship-of-the-warapi/Assets/master/Map%20Icons/Bases/MapIconForwardBase1.png',
    iconSize: [24,24],
    iconAnchor: [12,12],
    popupAnchor: [0, -24]
});
*/
 
class WarMap extends React.Component{

    constructor() {
        super();

        this.state = {
            mapItems: 0
        }
    }

    componentDidMount() {
        fetch("https://war-service-live.foxholeservices.com/api/worldconquest/maps/DeadLandsHex/dynamic/public")
            .then(response => response.json())
            .then(data => {
                for (var i in data.mapItems) {
                    let mapItem = data.mapItems[i];
                    let mapItemObject = new MapItem(1,mapItem.teamId,mapItem.iconType,mapItem.x,mapItem.y,mapItem.flags);
                    console.log(mapItemObject);
                }
            });
    }

    convertCoords(regionId,x,y) {
        var xcoord = mapArray[regionId].center[1] - (w/2) + (w*x);
        var ycoord = mapArray[regionId].center[0] + (k/2) - (k*y);
        return {ycoord,xcoord};
    }

    render() {
        return (
            <Map className="warMap"
                zoomControl={true}
                attributionControl={true}
        
                crs={L.CRS.Simple}
                center={[-128, 128]}
                zoom={3}
                minZoom={2}
                maxZoom={5}

                maxBounds={[[-256,-50],[0,306]]}
                maxBoundsViscosity={1.0}
            >
                <TileLayer url='https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Sat%20Tiles/{z}/{z}_{x}_{y}.png' />
                <Marker position={[-200,50]} />
                <MapRegions />
            </Map>
        );
    }
}

export default WarMap;