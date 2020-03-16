import L from 'leaflet';

const MapIcon = L.Icon.extend({
	options: {
		iconSize: [24,24],
		iconAnchor: [12,12],
		popupAnchor: [0, -24]
	}
});

export const StaticBase1 = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase1.png'});
export const StaticBase2 = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase2.png'});
export const StaticBase3 = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase3.png'});