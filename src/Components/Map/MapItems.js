import React from 'react';
import L from 'leaflet';
import {Marker, LayerGroup, Tooltip, Pane} from 'react-leaflet';
import {o, w, k, mapArray} from './MapData.js';

import MapItem from './MapItem.js';
import MapTextItem from './MapTextItem.js';
import * as MapIcon from './IconData.js';

class MapItems extends React.Component{

    constructor() {
        super();
        this.state = {
            staticLoaded: false,
            dynamicLoaded: false,
            mapItems: [],
            mapTextItems: []
        }
    }

    convertCoords(regionId, x, y) {
        let xcoord = mapArray[regionId-3].center[1] - (w/2) + (w*x);
        let ycoord = mapArray[regionId-3].center[0] + (k/2) - (k*y);
        return {xcoord,ycoord};
    }

    compare(a, b) {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    }

    findClosest(mapItem) {
        let closestNames = [];
    
        this.state.mapTextItems.map(mapTextItem => {
            if (mapItem.regionId === mapTextItem.regionId) {
                let xdif = Math.abs(mapItem.x - mapTextItem.x);
                let ydif = Math.abs(mapItem.y - mapTextItem.y);
                let distance = Math.sqrt(Math.pow(xdif, 2) + Math.pow(ydif, 2));
                closestNames.push({text: mapTextItem.text, distance: distance});
            }
        });
    
        //console.log(mapItem.regionId, closestNames);
        closestNames.sort(this.compare);
        return closestNames[0].text;
    }

    componentDidMount() {

        //fetch(process.env.PUBLIC_URL + '/test-data-static.json')
        fetch('/map/getStatic')
        .then(response => response.json())
        .then(data => {
            console.log('Loading Static Map Data..');
            data.forEach(region => {
                if(region === null) { return; }
                region.mapTextItems.map(mapTextItem => {
                    let coords = this.convertCoords(region.regionId, mapTextItem.x, mapTextItem.y);
                    let mapTextItemObject = new MapTextItem(region.regionId,mapTextItem.text,coords.xcoord,coords.ycoord);
                    this.setState(prevState => {
                        const mapTextItems = prevState.mapTextItems.concat(mapTextItemObject);
                        return { mapTextItems };
                    });
                });
            });
            this.setState({
                staticLoaded: true
            });
        }).catch(error => {
            console.log("Error - Could not load Static Map Data.");
        });

        //fetch(process.env.PUBLIC_URL + '/test-data-dynamic.json')
        fetch('/map/getDynamic')
        .then(response => response.json())
        .then(data => {
            console.log('Loading Dynamic Map Data..');
            data.forEach(region => {
                if(region === null) { return; }
                region.mapItems.map(mapItem => {
                    let coords = this.convertCoords(region.regionId, mapItem.x, mapItem.y);
                    let mapItemObject = new MapItem(region.regionId,mapItem.teamId,mapItem.iconType,coords.xcoord,coords.ycoord,mapItem.flags);
                    if (mapItemObject.iconImage != null) {
                        this.setState(prevState => {
                            const mapItems = prevState.mapItems.concat(mapItemObject);
                            return { mapItems };
                        });
                    }
                });
            });
            this.setState({
                dynamicLoaded: true
            });
        }).catch(error => {
            console.log("Error - Could not load Dynamic Map Data.");
        });
    }

    render() {
        if (this.state.staticLoaded && this.state.dynamicLoaded) {
            console.log('Drawing Map Markers..');
            const mapMarkers = this.state.mapItems.map(mapItem => {
                return(
                    <Marker icon={mapItem.iconImage} position={[mapItem.y,mapItem.x]} pane={mapItem.pane}>
                        <Tooltip sticky><strong><font color='#d67b52'>{this.findClosest(mapItem)}</font></strong><br />{mapItem.teamPrefix}{mapItem.description}<br />{mapItem.regionName}</Tooltip> 
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
