import React from "react";

import {Polygon, LayerGroup} from 'react-leaflet';
import {mapBounds, mapHeight, mapWidth, mapOrigin, o, w, k, mapArray} from '../mapData.js';

class MapRegions extends React.Component{

    constructor() {
        super();

        const regionBorders = mapArray.map(region => {
			if (region.name != '') {
				let item = region.center;
				return ([
					[item[0],item[1]-w/2],
					[item[0]+k/2,item[1]-w/4],
					[item[0]+k/2,item[1]+w/4],
					[item[0],item[1]+w/2],
					[item[0]-k/2,item[1]+w/4],
					[item[0]-k/2,item[1]-w/4],
				]);
			}
        })
		
		console.log(regionBorders);

        this.state = {
            regionBorders: regionBorders
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