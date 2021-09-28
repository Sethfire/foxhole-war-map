const XMLHttpRequest = require('xhr2');
const fs = require('fs');

module.exports.updateWarData = function () {
    // Create data folder if it does not exist
    if(!fs.existsSync('data')) fs.mkdirSync('data');

    // Query active regions
    queryRegions().then(regions => {
        // Save regions to file
        fs.writeFileSync('data/regions.json', JSON.stringify(regions, null, 1));

        // Query dynamic regions
        const dynamicRegions = regions.map(region => queryRegionDynamic(region));
        Promise.all(dynamicRegions).then(data => {
            // Save dynamic regions to file
            fs.writeFileSync('data/dynamic.json', JSON.stringify(data, null, 1));
        }).catch(error => {
            console.error(error);
        });
    
        // Query static regions
        const staticRegions = regions.map(region => queryRegionStatic(region));
        Promise.all(staticRegions).then(data => {
            // Save synamic regions to file
            fs.writeFileSync('data/static.json', JSON.stringify(data, null, 1));
        }).catch(error => {
            console.error(error);
        });
    }).catch(error => {
        console.error(error);
    });
}

/**
 * Query Dynamic Region
 * @param {string} region 
 * @returns Dynamic Region Data
 */
function queryRegionDynamic(region) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `https://war-service-live.foxholeservices.com/api/worldconquest/maps/${region}/dynamic/public`, true);
        request.responseType = 'json';

        request.onload = function () {
            if (request.status === 200) {
                resolve(this.response);
            } else {
                reject(`Received ${request.status} from dynamic ${region} request`);
            }
        }
        
        request.onerror = function(error) {
            reject(error);
        }

        request.send();
    });
}

/**
 * Query Static Region
 * @param {string} region 
 * @returns Static Region Data
 */
function queryRegionStatic(region) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `https://war-service-live.foxholeservices.com/api/worldconquest/maps/${region}/static`, true);
        request.responseType = 'json';

        request.onload = function () {
            if (request.status === 200) {
                resolve(this.response);
            } else {
                reject(`Received ${request.status} from static ${region} request`);
            }
        }
        
        request.onerror = function (error) {
            reject(error);
        }

        request.send();
    });
}

/**
 * Query Active Regions
 * @returns List of regions
 */
function queryRegions() {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://war-service-live.foxholeservices.com/api/worldconquest/maps', true);
        request.responseType = 'json';

        request.onload = function () {
            if (request.status === 200) {
                resolve(this.response);
            } else {
                reject(`Received ${request.status} from regions request`);
            }
        }
        
        request.onerror = function (error) {
            reject(error);
        }

        request.send();
    });
}