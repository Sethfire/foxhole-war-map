import React from "react";
import L from 'leaflet';
import {Map, TileLayer, LayerGroup, LayersControl} from 'react-leaflet';

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

    render() {
        return (
            <Map className='war-box' id="war-map"
                zoomControl={true}
                attributionControl={true}
        
                crs={L.CRS.Simple}
                center={[-128, 128]}
                zoom={3}
                minZoom={2}
                maxZoom={5}
                zoomSnap={1}
                wheelPxPerZoomLevel={60}

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
