import React from "react";

import L from 'leaflet';
import {Map, TileLayer, Marker, Circle, LayerGroup, LayersControl, Popup} from 'react-leaflet';

import {mapBounds, mapHeight, mapWidth, mapOrigin, o, w, k, mapArray} from '../mapData.js';
import {MapItem} from './MapItem.js';
import MapRegions from './MapRegions.js';
import MapItems from './MapItems.js';

const {BaseLayer, Overlay} = LayersControl;
 
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
                <MapRegions />
				<MapItems />
				
				<LayersControl position="topright">
					<BaseLayer checked name="Original Map">
						<TileLayer url='https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Tiles/{z}/{z}_{x}_{y}.png' />
					</BaseLayer>
					
					<BaseLayer name="Satellite Map">
						<TileLayer url='https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Sat%20Tiles/{z}/{z}_{x}_{y}.png' />
					</BaseLayer>
				</LayersControl>		
            </Map>
        );
    }
}

export default WarMap;