import * as MapIcon from './MapIcons.js';
import * as MapData from './MapRegions.js';
import { mapLayers } from './MapLayers.js';
import { regions } from './MapRegions.js';

export default class MapItem{
    constructor(regionId, teamId, iconType, x, y, flags) {
        this.regionId = regionId;
        
        const region = regions.find(x => x.id === regionId);
        this.regionName = region.name;
        this.iconType = iconType;
        this.x = x;
        this.y = y;
        this.flags = flags;
        this.layer = mapLayers.StaticBases;

        this.teamId = teamId;
        switch(teamId) {
            case 'NONE':
                this.teamId = 0;
                this.teamPrefix = '';
                break;
            case 'COLONIALS':
                this.teamId = 1;
                this.teamPrefix = 'Colonial ';
                break;
            case 'WARDENS':
                this.teamId = 2;
                this.teamPrefix = 'Warden ';
                break;
            default:
                console.log('ERROR: Unknown TeamID - '+teamId);
        }
        
        switch(iconType) {
            /*
            case 5:
                this.description = 'Town Hall (Tier 1)';
                this.iconImage = MapIcon.StaticBase1[this.teamId];
                this.layer = mapLayers.StaticBases;
                this.pane = 'basesPane';
                break;
            case 6:
                this.description = 'Town Hall (Tier 2)';
                this.iconImage = MapIcon.StaticBase2[this.teamId];
                this.layer = mapLayers.StaticBases;
                this.pane = 'basesPane';
                break;
            case 7:
                this.description = 'Town Hall (Tier 3)';
                this.iconImage = MapIcon.StaticBase3[this.teamId];
                this.layer = mapLayers.StaticBases;
                this.pane = 'basesPane';
                break;
            */
            case 11:
                this.description = 'Hospital';
                this.iconImage = MapIcon.Hospital[this.teamId];
                this.layer = mapLayers.Hospitals;
                this.pane = 'structuresPane';
                break;
            case 12:
                this.description = 'Vehicle Factory';
                this.iconImage = MapIcon.VehicleFactory[this.teamId];
                this.layer = mapLayers.VehicleFactories;
                this.pane = 'structuresPane';
                break;
            case 17:
                this.description = 'Refinery';
                this.iconImage = MapIcon.Manufacturing[this.teamId];
                this.layer = mapLayers.Refineries;
                this.pane = 'structuresPane';
                break;
            case 18:
                this.description = 'Shipyard';
                this.iconImage = MapIcon.Shipyard[this.teamId];
                this.layer = mapLayers.Shipyards;
                this.pane = 'structuresPane';
                break;
            case 19:
                this.description = 'Engineering Center';
                this.iconImage = MapIcon.TechCenter[this.teamId];
                this.layer = mapLayers.EngineeringCenters;
                this.pane = 'structuresPane';
                break;
            case 20:
                this.description = 'Salvage Field';
                this.iconImage = MapIcon.Salvage;
                this.layer = mapLayers.SalvageFields;
                this.pane = 'resourcesPane';
                break;
            case 21:
                this.description = 'Component Field';
                this.iconImage = MapIcon.Components;
                this.layer = mapLayers.ComponentFields;
                this.pane = 'resourcesPane';
                break;
            /*
            case 22:
                this.description = 'Fuel Field';
                this.iconImage = MapIcon.Fuel;
                this.pane = 'resourcesPane';
                break;
            */
            case 23:
                this.description = 'Sulfur Field';
                this.iconImage = MapIcon.Sulfur;
                this.layer = mapLayers.SulfurFields;
                this.pane = 'resourcesPane';
                break;
            case 27:
                this.description = 'Keep';
                this.iconImage = MapIcon.Keep[this.teamId];
                this.layer = mapLayers.Keeps;
                this.pane = 'basesPane';
                break;
            case 28:
                this.description = 'Observation Tower';
                this.iconImage = MapIcon.ObservationTower[this.teamId];
                this.layer = mapLayers.ObservationTowers;
                this.pane = 'structuresPane';
                break;
            /*
            case 29:
                this.description = 'Fort';
                this.iconImage = MapIcon.Fort;
                this.layer = mapLayers.Forts;
                this.pane = 'basesPane';
                break;
            */
            case 32:
                this.description = 'Sulfur Mine';
                this.iconImage = MapIcon.SulfurMine;
                this.layer = mapLayers.SulfurMines;
                this.pane = 'resourcesPane';
                break;
            case 33:
                this.description = 'Storage Depot';
                this.iconImage = MapIcon.StorageFacility[this.teamId];
                this.layer = mapLayers.StorageDepot;
                this.pane = 'structuresPane';
                break;
            case 34:
                this.description = 'Factory';
                this.iconImage = MapIcon.Factory[this.teamId];
                this.layer = mapLayers.Factories;
                this.pane = 'structuresPane';
                break;
            case 35:
                this.description = 'Safe House';
                this.iconImage = MapIcon.Safehouse[this.teamId];
                this.layer = mapLayers.Safehouses;
                this.pane = 'structuresPane';
                break;
            /*
            case 36:
                this.description = 'Armory';
                this.iconImage = MapIcon.Armory[this.teamId];
                this.layer = mapLayers.AmmoFactories;
                this.pane = 'structuresPane';
                break;
            */
            case 37:
                this.description = 'Rocket Site';
                this.iconImage = MapIcon.RocketSite[0];
                this.layer = mapLayers.RocketSites;
                this.pane = 'structuresPane';
                break;
            case 39:
                this.description = 'Construction Yard';
                this.iconImage = MapIcon.ConstructionYard[this.teamId];
                this.layer = mapLayers.ConstructionYards;
                this.pane = 'structuresPane';
                break;
            case 38:
                this.description = 'Salvage Mine';
                this.iconImage = MapIcon.SalvageMine;
                this.layer = mapLayers.SalvageMines;
                this.pane = 'resourcesPane';
                break;
            case 40:
                this.description = 'Component Mine';
                this.iconImage = MapIcon.ComponentMine;
                this.layer = mapLayers.ComponentMines;
                this.pane = 'resourcesPane';
                break;
            case 41:
                this.description = 'Oil Well';
                this.iconImage = MapIcon.OilWell;
                this.layer = mapLayers.OilWells;
                this.pane = 'resourcesPane';
                break;
            case 45: case 46: case 47:
                this.description = 'Relic Base';
                this.iconImage = MapIcon.RelicBase[this.teamId];
                this.layer = mapLayers.RelicBases;
                this.pane = 'basesPane';
                break;
            case 51:
                this.description = 'Mass Production Factory';
                this.iconImage = MapIcon.MassProductionFactory[this.teamId];
                this.layer = mapLayers.MassProductionFactories;
                this.pane = 'structuresPane';
                break;
            case 52:
                this.description = 'Seaport';
                this.iconImage = MapIcon.Seaport[this.teamId];
                this.layer = mapLayers.SeaPorts;
                this.pane = 'structuresPane';
                break;
            case 53:
                this.description = 'Coastal Gun';
                this.iconImage = MapIcon.CoastalGun[this.teamId];
                this.layer = mapLayers.CoastalGuns;
                this.pane = 'structuresPane';
            break;
            case 56:
                this.description = 'Town Base (Tier 1)';
                this.iconImage = MapIcon.TownBase1[this.teamId];
                this.layer = mapLayers.TownBases;
                this.pane = 'basesPane';
                break;
            case 57:
                this.description = 'Town Base (Tier 2)';
                this.iconImage = MapIcon.TownBase2[this.teamId];
                this.layer = mapLayers.TownBases;
                this.pane = 'basesPane';
                break;
            case 58:
                this.description = 'Town Base (Tier 3)';
                this.iconImage = MapIcon.TownBase3[this.teamId];
                this.layer = mapLayers.TownBases;
                this.pane = 'basesPane';
                break;
            default:
                console.log('Unknown IconType - ' + iconType);
        }
    }
}