import React from "react";

import {Polygon, LayerGroup} from 'react-leaflet';
import * as mapData from '../mapData.js';

class MapRegions extends React.Component{

    constructor() {
        super();

        this.state = {
            regionBorders: mapData.regionBorders
        }
    }

    render() {
        const regionBorders = this.state.regionBorders.map(regionBorder => 
            <Polygon color='black' opacity={0.1} fillOpacity={0} positions={regionBorder}/>
        )

        return(
            <LayerGroup>{regionBorders}</LayerGroup>
        );
    }
}

export default MapRegions;