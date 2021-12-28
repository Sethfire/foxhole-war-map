const XMLHttpRequest = require('xhr2');
const fs = require('fs');

const shards = [
    { name:'live-1', url:'https://war-service-live.foxholeservices.com/api'},
    { name:'live-2', url:'https://war-service-live-2.foxholeservices.com/api'},
    //{ name:'dev', url:'https://war-service-dev.foxholeservices.com/api'}
];

module.exports.updateWarData = function () {
    // Create data folder if it does not exist
    if(!fs.existsSync('data')) fs.mkdirSync('data');
    // Loop through shards
    shards.forEach(shard => {
        // Create folders for each shard
        if(!fs.existsSync(`data/${shard.name}`)) fs.mkdirSync(`data/${shard.name}`);
        
        // Query active regions
        queryRegions(shard).then(regions => {
            // Save regions to file
            fs.writeFileSync(`data/${shard.name}/regions.json`, JSON.stringify(regions, null, 1));

            // Query war state
            queryWarState(shard).then(data => {
                fs.writeFileSync(`data/${shard.name}/war.json`, JSON.stringify(data, null, 1));
            }).catch(error => {
                console.error(error);
            });

            // Query dynamic regions
            Promise.all(regions.map(region => queryRegionDynamic(shard, region))).then(data => {
                // Save dynamic regions to file
                fs.writeFileSync(`data/${shard.name}/dynamic.json`, JSON.stringify(data, null, 1));
            }).catch(error => {
                console.error(error);
            });

            // Query static regions
            Promise.all(regions.map(region => queryRegionStatic(shard, region))).then(data => {
                // Save static regions to file
                fs.writeFileSync(`data/${shard.name}/static.json`, JSON.stringify(data, null, 1));
            }).catch(error => {
                console.error(error);
            });
        }).catch(error => {
            console.error(error);
        });
    }); 
}

/**
 * Query Dynamic Region
 * @param shard
 * @param region
 * @returns Dynamic Region Data
 */
function queryRegionDynamic(shard, region) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `${shard.url}/worldconquest/maps/${region}/dynamic/public`, true);
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
 * @param shard
 * @param region
 * @returns Static Region Data
 */
function queryRegionStatic(shard, region) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `${shard.url}/worldconquest/maps/${region}/static`, true);
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
 * @param shard
 * @returns List of regions
 */
function queryRegions(shard) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `${shard.url}/worldconquest/maps`, true);
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

/**
 * Query War State
 * @param shard
 * @returns war state
 */
function queryWarState(shard) {
    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', `${shard.url}/worldconquest/war`, true);
        request.responseType = 'json';

        request.onload = function () {
            if (request.status === 200) {
                resolve(this.response);
            } else {
                reject(`Received ${request.status} from war state request`);
            }
        }
        
        request.onerror = function (error) {
            reject(error);
        }

        request.send();
    });
}