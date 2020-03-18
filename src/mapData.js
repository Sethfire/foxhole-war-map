import L from 'leaflet';

const mapBounds = [[-228,0],[-28,256]]
const mapHeight = mapBounds[1][0]-mapBounds[0][0];
const mapWidth = mapBounds[1][1]-mapBounds[0][1];
const mapOrigin = {x:128,y:-128}

export const o = mapOrigin; // Shortened
export const w = mapWidth/5.5 // Standard Region Width
export const k = w*Math.sqrt(3)/2 // Standard Region Height

export const mapArray=[
    //{id:0,name:'',center:[]},
    //{id:1,name:'',center:[]},
    //{id:2,name:'',center:[]},
    {id:3,name:'Deadlands',center:[o.y,o.x]},
    {id:4,name:'Callahans Passage',center:[o.y+k,o.x]},
    {id:5,name:'Marban Hollow',center:[o.y+0.5*k,o.x+0.75*w]},
    {id:6,name:'Umbral Wildwood',center:[o.y-k,o.x]},
    {id:7,name:'The Moors',center:[o.y+1.5*k,o.x-0.75*w]},
    {id:8,name:'The Heartlands',center:[o.y-1.5*k,o.x-0.75*w]},
    {id:9,name:'Loch Mór',center:[o.y-0.5*k,o.x-0.75*w]},
    {id:10,name:'The Linn of Mercy',center:[o.y+0.5*k,o.x-0.75*w]},
    {id:11,name:'Reaching Trail',center:[o.y+2*k,o.x]},
    {id:12,name:'Stonecradle',center:[o.y+k,o.x-1.5*w]},
    {id:13,name:'Farranac Coast',center:[o.y,o.x-1.5*w]},
    {id:14,name:'Westgate',center:[o.y-k,o.x-1.5*w]},
    {id:15,name:'Fisherman\'s Row',center:[o.y-0.5*k,o.x-2.25*w]},
    {id:16,name:'The Oarbreaker Isles',center:[o.y+0.5*k,o.x-2.25*w]},
    {id:17,name:'Great March',center:[o.y-2*k,o.x]},
    {id:18,name:'Tempest Island',center:[o.y-0.5*k,o.x+2.25*w]},
    {id:19,name:'Godcrofts',center:[o.y+0.5*k,o.x+2.25*w]},
    {id:20,name:'Endless Shore',center:[o.y,o.x+1.5*w]},
    {id:21,name:'Allod\'s Bight',center:[o.y-k,o.x+1.5*w]},
    {id:22,name:'Weathered Expanse',center:[o.y+k,o.x+1.5*w]},
    {id:23,name:'The Drowned Vale',center:[o.y-0.5*k,o.x+0.75*w]},
    {id:24,name:'Shackled Chasm',center:[o.y-1.5*k,o.x+0.75*w]},
    {id:25,name:'Viper Pit',center:[o.y+1.5*k,o.x+0.75*w]},
]

export const regionBorders = mapArray.map(region => {
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

export const regionLabels = mapArray.map(region => {
    if (region.name != '') {
        return ({
            divIcon: L.divIcon({className: "regionLabel", html: region.name, iconSize: [150,30], iconAnchor: [75,15]}),
            position: region.center
        });
    }
})