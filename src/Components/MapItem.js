import * as MapIcon from '../IconData.js';

class MapItem{
    constructor(regionId, teamId, iconType, x, y, flags) {
        this.regionId = regionId;
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
				this.teamPrefix = 'Colonial';
				break;
			case 'WARDENS':
				this.teamId = 2;
				this.teamPrefix = 'Warden';
				break;
			default:
				console.log('ERROR: Unknown TeamID - '+teamId);
		}
		
        switch(iconType) {
            case 5:
                this.description = 'Town (Tier 1)';
                this.iconImage = MapIcon.StaticBase1[this.teamId];
                break;
            case 6:
                this.description = 'Town (Tier 2)';
                this.iconImage = MapIcon.StaticBase2[this.teamId];
                break;
            case 7:
                this.description = 'Town (Tier 3)';
                this.iconImage = MapIcon.StaticBase3[this.teamId];
                break;
			case 11:
				this.description = 'Hospital';
				this.iconImage = MapIcon.Hospital[this.teamId];
				break;
			case 12:
				this.description = 'Vehicle Factory';
				this.iconImage = MapIcon.VehicleFactory[0];
				break;
			case 17:
				this.description = 'Refinery';
				this.iconImage = MapIcon.Manufacturing[this.teamId];
				break;
			case 18:
				this.description = 'Shipyard';
				//this.iconImage = MapIcon.Shipyard[this.teamId];
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
			case 23:
				this.description = 'Sulfur Field';
				this.iconImage = MapIcon.Sulfur;
				break;
			case 32:
				this.description = 'Sulfur Mine';
				this.iconImage = MapIcon.SulfurMine;
				break;
			case 33:
				this.description = 'Storage Facility';
				this.iconImage = MapIcon.StorageFacility[this.teamId];
				break;
			case 34:
				this.description = 'Factory';
				this.iconImage = MapIcon.Factory[this.teamId];
				break;
			case 35:
				this.description = 'Safehouse';
				this.iconImage = MapIcon.Safehouse[this.teamId];
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
            //default:
            //    console.log(iconType);
            /*
            case 20: //Scrapyard
              iconType = "Icon_salvage";break;
            case 21: //Component Yard
              iconType = "Icon_component";break;
            case 23: //Sulfur Node
              iconType = "Icon_sulfur";break;
            case 27: //Keep
              iconType = "Icon_keep";break;
            case 28: //Tower
              iconType = "Icon_tower";break;
            case 29: //Fort
              iconType = "Icon_fort";break;
            case 38: //Salvage Mine
              iconType = "Icon_salvagemine";break;
            case 32: //Sulfur Mine
              iconType = "Icon_sulfurmine";break;
            case 36: //Advanced Ammo Factory
              iconType = "Icon_ammofactory";break;
            case 37: //Rocket Site
              iconType = "Icon_rocket";break;
            case 39: //Construction Yard
              iconType = "Icon_constructionyard";break;
            case 40: //Component Mine
              iconType = "Icon_componentmine";break;
            case 41: //Oil Well
              iconType = "Icon_oilwell";break;
            case 44: //Cursed Fort
              iconType = "Icon_cursed";break;
            */
        }

		console.log(this);
    }
}

export default MapItem;