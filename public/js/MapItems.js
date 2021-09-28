import {o, w, k, regions} from './MapRegions.js';

import MapItem from './MapItem.js';
import MapTextItem from './MapTextItem.js';

// Converts a coordinate from the regional coordinate system to the world coordinate system
function convertCoords(regionId, x, y) {
    const region = regions.find(x => x.id === regionId);
    const xcoord = region.center[1] - (w/2) + (w*x);
    const ycoord = region.center[0] + (k/2) - (k*y);
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
function findClosest(staticMapItems, mapItem) {
    let closestNames = [];

    staticMapItems.map(mapTextItem => {
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

export function generateMapItems(){
    const retrieveStaticData = new Promise((resolve, reject) => {
        fetch("/map/api/static")
        .then(response => response.json())
        .then(data => {
            console.log('Loading Static Map Data..');
            let staticMapItems = [];
            data.forEach(region => {
                if(region === null) { return; }
                region.mapTextItems.map(mapTextItem => {
                    let coords = convertCoords(region.regionId, mapTextItem.x, mapTextItem.y);
                    let mapTextItemObject = new MapTextItem(region.regionId, mapTextItem.text, coords.xcoord, coords.ycoord);
                    staticMapItems.push(mapTextItemObject);
                });
            });
            resolve(staticMapItems);
        }).catch(error => {
            reject(error);
        });
    });
        
    const retrieveDynamicData = new Promise((resolve, reject) => {
        fetch("/map/api/dynamic")
        .then(response => response.json())
        .then(data => {
            console.log('Loading Dynamic Map Data..');
            let dynamicMapItems = [];
            data.forEach(region => {
                if(region === null) { return; }
                region.mapItems.map(mapItem => {
                    const coords = convertCoords(region.regionId, mapItem.x, mapItem.y);
                    const mapItemObject = new MapItem(region.regionId, mapItem.teamId, mapItem.iconType, coords.xcoord, coords.ycoord, mapItem.flags);
                    if (mapItemObject.iconImage != null) {
                        dynamicMapItems.push(mapItemObject);
                    }
                });
            });
            resolve(dynamicMapItems);
        }).catch(error => {
            reject(error);
        });
    });

    retrieveStaticData.then((staticData) => {
        retrieveDynamicData.then((dynamicData) => {
            dynamicData.map((mapItem) => {
                try{
                    let marker = L.marker([mapItem.y, mapItem.x], {icon:mapItem.iconImage, pane:mapItem.pane}).addTo(mapItem.layer);
        
                    //Faction Icon
                    let factionIcon = "";
                    switch(mapItem.teamId){
                        case 1:
                            factionIcon = "<img src='./icons/LogoColonial.png' style='width:24px;height:24px;vertical-align:middle;'/> ";
                            break;
                        case 2:
                            factionIcon = "<img src='./icons/LogoWarden.png' style='width:24px;height:24px;vertical-align:middle;'/> ";
                            break;
                    }
        
                    marker.bindTooltip(`${factionIcon}<strong><font color='#d67b52'>${findClosest(staticData, mapItem)}</font></strong><br />${mapItem.teamPrefix}${mapItem.description}<br />${mapItem.regionName}`);
                }
                catch(error){
                    console.log(`Error - Could not load Map Marker ${mapItem.iconType} in ${mapItem.regionName}.\n` + error);
                }
            });
        }).catch((error) => {
            console.log('Error - Could not load Dynamic Map Data.\n' + error);
        });
    }).catch((error) => {
        console.log('Error - Could not load Static Map Data.\n' + error);
    });
}