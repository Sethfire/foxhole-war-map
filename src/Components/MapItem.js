class MapItem{
    constructor(regionId, teamId, iconType, x, y, flags) {
        this.regionId = regionId;
        this.teamId = teamId;
        this.iconType = iconType;
        this.x = x;
        this.y = y;
        this.flags = flags;

        switch(iconType) {
            case 5:
                this.description = 'Town (Tier 1)';
                this.iconImage = '';
                break;
            case 6:
                this.description = 'Town (Tier 2)';
                this.iconImage = '';
                break;
            case 7:
                this.description = 'Town (Tier 3)';
                this.iconImage = '';
                break;
            //default:
            //    console.log(iconType);
            /*
            case 11: //Hospital
              iconType = "Icon_hospital";break;
            case 12: //Vehicle Factory
              iconType = "Icon_vehicle";break;
            case 17: //Refinery
              iconType = "Icon_refinery";break;
            case 18: //Shipyard
              iconType = "Icon_shipyard";break;
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
            case 33: //Storage
              iconType = "Icon_storage";break;
            case 34: //Factory
              iconType = "Icon_factory";break;
            case 35: //Safehouse
              iconType = "Icon_safehouse";break;
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
            case 45: //Relic Base 1
              iconType = "Icon_relicBase";break;
            case 46: //Relic Base 2
              iconType = "Icon_relicBase";break;
            case 47: //Relic Base 3
              iconType = "Icon_relicBase";break;
            */
        }
    }


}

export {MapItem};