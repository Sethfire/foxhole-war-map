import * as MapIcon from './IconData.js';
import * as MapData from './MapData.js';

export default class MapTextItem{
    constructor(regionId, text, x, y) {
        this.regionId = regionId;
        this.text = text;
        this.x = x;
        this.y = y;
    }
}
