const XMLHttpRequest = require('xhr2');
const fs = require('fs');

const regions = [
    "DeadLandsHex",        //3 
    "CallahansPassageHex",  //4
    "MarbanHollow",         //5
    "UmbralWildwoodHex",    //6
    "MooringCountyHex",     //7
    "HeartlandsHex",        //8
    "LochMorHex",           //9
    "LinnMercyHex",         //10
    "ReachingTrailHex",     //11
    "StonecradleHex",       //12
    "FarranacCoastHex",     //13
    "WestgateHex",          //14
    "FishermansRowHex",     //15
    "OarbreakerHex",        //16                 
    "GreatMarchHex",        //17
    "TempestIslandHex",     //18
    "GodcroftsHex",         //19
    "EndlessShoreHex",      //20
    "AllodsBightHex",       //21
    "WeatheredExpanseHex",  //22
    "DrownedValeHex",       //23
    "ShackledChasmHex",     //24
    "ViperPitHex", //25
    "NevishLineHex", //29
    "AcrithiaHex", //30
    "RedRiverHex", //31
    "CallumsCapeHex", //32
    "SpeakingWoodsHex", //33
    "BasinSionnachHex", //34
    "HowlCountyHex", //35
    "ClansheadValleyHex", //36
    "MorgensCrossingHex", //37
    "TheFingersHex", //38
    "TerminusHex", //39
    "KalokaiHex", //40
    "AshFieldsHex", //41
    "OriginHex" //42
]          

module.exports.updateWarData = function () {
    //console.log("Updating War Data");

    queryActiveMaps().then(data => {
        fs.writeFileSync('data/activemaps.json', JSON.stringify(data, null, 1));
    });

    var dynamicPromises = regions.map(region => queryRegionDynamic(region));
    Promise.all(dynamicPromises).then(data => {
        fs.writeFileSync('data/dynamic.json', JSON.stringify(data, null, 1));
        //console.log("Dynamic War Data Updated");
    });

    var staticPromises = regions.map(region => queryRegionStatic(region));
    Promise.all(staticPromises).then(data => {
        fs.writeFileSync('data/static.json', JSON.stringify(data, null, 1));
        //console.log("Static War Data Updated");
    });
}
    
function queryRegionDynamic (region) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', `https://war-service-live.foxholeservices.com/api/worldconquest/maps/${region}/dynamic/public`, true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function (e) {
	    console.log("== XHR Error ==");
	    console.log(e);
	    console.log(e.target.status);
            resolve(null);
        }

        request.send();
    });
}

function queryRegionStatic (region) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', `https://war-service-live.foxholeservices.com/api/worldconquest/maps/${region}/static`, true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function () {
            resolve(null);
        }

        request.send();
    });
}

function queryActiveMaps () {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps', true);
        request.responseType = "json";

        request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
                resolve(this.response);
            } else {
                resolve(null);
            }
        }
        
        request.onerror = function () {
            resolve(null);
        }

        request.send();
    });
}