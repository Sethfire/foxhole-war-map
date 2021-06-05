import {o, w, k, regions} from './MapRegions.js';

import MapItem from './MapItem.js';
import MapTextItem from './MapTextItem.js';

var mapState = {
    mapTextItems: [],
    mapItems: [],
    staticLoaded: false,
    dynamicLoaded: false,
}

// Converts a coordinate from the regional coordinate system to the world coordinate system
function convertCoords(regionId, x, y) {
    let xcoord = regions[regionId-3].center[1] - (w/2) + (w*x);
    let ycoord = regions[regionId-3].center[0] + (k/2) - (k*y);
    return {xcoord,ycoord};
}

// Compares the distance between two values.
function compare(a, b) {
    if (a.distance < b.distance) {
        return -1;
    }
    if (a.distance > b.distance) {
        return 1;
    }
    return 0;
}

// Finds the closest name for a given map item. 
function findClosest(mapItem) {
    let closestNames = [];

    mapState.mapTextItems.map(mapTextItem => {
        if (mapItem.regionId === mapTextItem.regionId) {
            let xdif = Math.abs(mapItem.x - mapTextItem.x);
            let ydif = Math.abs(mapItem.y - mapTextItem.y);
            let distance = Math.sqrt(Math.pow(xdif, 2) + Math.pow(ydif, 2));
            closestNames.push({text: mapTextItem.text, distance: distance});
        }
    });

    //console.log(mapItem.regionId, closestNames);
    closestNames.sort(compare);
    return closestNames[0].text;
}

function retrieveStaticData(callback){
    fetch("/map/api/static")
    .then(response => response.json())
    .then(data => {
        console.log('Loading Static Map Data..');
        data.forEach(region => {
            if(region === null) { return; }
            region.mapTextItems.map(mapTextItem => {
                let coords = convertCoords(region.regionId, mapTextItem.x, mapTextItem.y);
                let mapTextItemObject = new MapTextItem(region.regionId, mapTextItem.text, coords.xcoord, coords.ycoord);
                mapState.mapTextItems.push(mapTextItemObject);
            });
        });
        callback();
    }).catch(error => {
        console.log('Error - Could not load Static Map Data.\n' + error);
    });
}
    
function retrieveDynamicData(callback){
    fetch("/map/api/dynamic")
    .then(response => response.json())
    .then(data => {
        console.log('Loading Dynamic Map Data..');
        data.forEach(region => {
            if(region === null) { return; }
            region.mapItems.map(mapItem => {
                let coords = convertCoords(region.regionId, mapItem.x, mapItem.y);
                let mapItemObject = new MapItem(region.regionId, mapItem.teamId, mapItem.iconType, coords.xcoord, coords.ycoord, mapItem.flags);
                if (mapItemObject.iconImage != null) {
                    mapState.mapItems.push(mapItemObject);
                }
            });
        });
        callback();
    }).catch(error => {
        console.log('Error - Could not load Dynamic Map Data.\n' + error);
    });
}

export function generateMapItems(){
    retrieveStaticData(staticLoaded);
}

function staticLoaded(){
    retrieveDynamicData(dynamicLoaded);
}

function dynamicLoaded(){
    mapState.mapItems.map(mapItem => {
        try{
            var marker = L.marker([mapItem.y, mapItem.x], {
                    icon: mapItem.iconImage,
                    pane: mapItem.pane,
            }).addTo(mapItem.layer);

            //Faction Icon
            var factionIcon = "";
            switch(mapItem.teamId){
                case 1:
                    factionIcon = "<img src='./icons/LogoColonial.png' style='width:24px;height:24px;vertical-align:middle;'/> ";
                    break;
                case 2:
                    factionIcon = "<img src='./icons/LogoWarden.png' style='width:24px;height:24px;vertical-align:middle;'/> ";
                    break;
            }

            marker.bindTooltip(`${factionIcon}<strong><font color='#d67b52'>${findClosest(mapItem)}</font></strong><br />${mapItem.teamPrefix}${mapItem.description}<br />${mapItem.regionName}`);
        }
        catch(error){
            console.log(`Error - Could not load Map Marker ${mapItem.iconType} in ${mapItem.regionName}.\n` + error);
        }
    });

}