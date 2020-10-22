import * as MapIcon from './IconData.js';
import * as MapData from './MapData.js';

export default class MapItem{
    constructor(regionId, teamId, iconType, x, y, flags) {
        this.regionId = regionId;
        this.regionName = MapData.mapArray[regionId-3].name;
        this.iconType = iconType;
        this.x = x;
        this.y = y;
        this.flags = flags;

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
            case 5:
                this.description = 'Town Hall (Tier 1)';
                this.iconImage = MapIcon.StaticBase1[this.teamId];
                break;
            case 6:
                this.description = 'Town Hall (Tier 2)';
                this.iconImage = MapIcon.StaticBase2[this.teamId];
                break;
            case 7:
                this.description = 'Town Hall (Tier 3)';
                this.iconImage = MapIcon.StaticBase3[this.teamId];
                break;
            case 11:
                this.description = 'Hospital';
                this.iconImage = MapIcon.Hospital[this.teamId];
                break;
            case 12:
                this.description = 'Vehicle Factory';
                this.iconImage = MapIcon.VehicleFactory[this.teamId];
                break;
            case 17:
                this.description = 'Refinery';
                this.iconImage = MapIcon.Manufacturing[this.teamId];
                break;
            case 18:
                this.description = 'Shipyard';
                this.iconImage = MapIcon.Shipyard[this.teamId];
                break;
            case 19:
                this.description = 'Engineering Center';
                this.iconImage = MapIcon.TechCenter[this.teamId];
                break;
            case 20:
                this.description = 'Salvage Field';
                this.iconImage = MapIcon.Salvage;
                break;
            case 21:
                this.description = 'Component Field';
                this.iconImage = MapIcon.Components;
                break;
            case 22:
                this.description = 'Fuel Field';
                this.iconImage = MapIcon.Fuel;
                break;
            case 23:
                this.description = 'Sulfur Field';
                this.iconImage = MapIcon.Sulfur;
                break;
            case 27:
                this.description = 'Keep';
                this.iconImage = MapIcon.Keep[this.teamId];
                break;
            case 28:
                this.description = 'Observation Tower';
                this.iconImage = MapIcon.ObservationTower[this.teamId];
                break;
            case 29: //Unused
                this.description = 'Fort';
                //this.iconImage = MapIcon.Fort;
                break;
            case 32:
                this.description = 'Sulfur Mine';
                this.iconImage = MapIcon.SulfurMine;
                break;
            case 33:
                this.description = 'Storage Depot';
                this.iconImage = MapIcon.StorageFacility[this.teamId];
                break;
            case 34:
                this.description = 'Factory';
                this.iconImage = MapIcon.Factory[this.teamId];
                break;
            case 35:
                this.description = 'Safe House';
                this.iconImage = MapIcon.Safehouse[this.teamId];
                break;
            case 36:
                this.description = 'Armory';
                this.iconImage = MapIcon.Armory[this.teamId];
                break;
            case 37: //TODO: Rocket Site
                this.description = 'Rocket Site';
                this.iconImage = MapIcon.RocketSite[0];
                break;
            case 39:
                this.description = 'Construction Yard';
                this.iconImage = MapIcon.ConstructionYard[this.teamId];
                break;
            case 38:
                this.description = 'Salvage Mine';
                this.iconImage = MapIcon.SalvageMine;
                break;
            case 40:
                this.description = 'Component Mine';
                this.iconImage = MapIcon.ComponentMine;
                break;
            case 41:
                this.description = 'Oil Well';
                this.iconImage = MapIcon.OilWell;
                break;
            case 45: case 46: case 47:
                this.description = 'Relic Base';
                this.iconImage = MapIcon.RelicBase[this.teamId];
                break;
            case 51:
                this.description = 'Mass Production Factory';
                this.iconImage = MapIcon.MassProductionFactory[this.teamId];
                break;
            case 52:
                this.description = 'Seaport';
                this.iconImage = MapIcon.Seaport[this.teamId];
                break;
            case 53:
                this.description = 'Coastal Gun';
                this.iconImage = MapIcon.CoastalGun[this.teamId];
            break;
            default:
                console.log('ERROR: Unknown IconType - '+iconType);
        }
    }
}
