import L from 'leaflet';

const MapIcon = L.Icon.extend({
	options: {
		iconSize: [24,24],
		iconAnchor: [12,12],
		popupAnchor: [0, 0]
	}
});

export const StaticBase1 = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase1.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase1Colonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase1Warden.png'})
]
export const StaticBase2 = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase2.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase2Colonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase2Warden.png'})
]
export const StaticBase3 = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase3.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase3Colonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStaticBase3Warden.png'})
]
export const Safehouse = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSafehouse.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSafehouseColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSafehouseWarden.png'})
]
export const RelicBase = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconRelicBase.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconRelicBaseColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconRelicBaseWarden.png'})
]

/* Logistics */

export const Armory = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconArmory.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconArmoryColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconArmoryWarden.png'})
]

export const Factory = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconFactory.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconFactoryColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconFactoryWarden.png'})
]

export const Manufacturing = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconManufacturing.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconManufacturingColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconManufacturingWarden.png'})
]

export const StorageFacility = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStorageFacility.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStorageFacilityColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconStorageFacilityWarden.png'})
]

export const VehicleFactory = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconVehicle.png'}),
	//new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconVehicleColonial.png'}),
	//new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconVehicleWarden.png'})
]

export const ConstructionYards = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconConstructionYard.png'}),
	//new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconConstructionYardColonial.png'}),
	//new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconConstructionYardWarden.png'})
]

export const Hospital = [
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconHospital.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconHospitalColonial.png'}),
	new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconHospitalWarden.png'})
]

/* Resources */

export const Salvage = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSalvage.png'});
export const SalvageMine = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSalvageMine.png'});
export const Components = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconComponents.png'});
export const ComponentMine = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconComponentMine.png'});
export const Sulfur = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSulfur.png'});
export const SulfurMine = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconSulfurMine.png'});
export const Fuel = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconFuel.png'});
export const OilWell = new MapIcon({iconUrl: process.env.PUBLIC_URL + '/icons/MapIconOilWell.png'});