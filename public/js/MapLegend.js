import { mapLayers } from "./MapLayers.js";

const HTMLIcons = {
    TownBase: "<img src='./icons/MapIconTownBaseTier1.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    RelicBase: "<img src='./icons/MapIconRelicBase.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Keep: "<img src='./icons/MapIconKeep.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Safehouse: "<img src='./icons/MapIconSafehouse.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    
    ObservationTower: "<img src='./icons/MapIconObservationTower.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    RocketSite: "<img src='./icons/MapIconRocketSite.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    CoastalGun: "<img src='./icons/MapIconCoastalGun.png' style='width:24px;height:24px;vertical-align:middle;'/>",

    Hospital: "<img src='./icons/MapIconHospital.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Factory: "<img src='./icons/MapIconFactory.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    AmmoFactory: "<img src='./icons/MapIconArmory.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    VehicleFactory: "<img src='./icons/MapIconVehicle.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    StorageDepot: "<img src='./icons/MapIconStorageFacility.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Manufacturing: "<img src='./icons/MapIconManufacturing.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Shipyard: "<img src='./icons/MapIconShipyard.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    ConstructionYard: "<img src='./icons/MapIconConstructionYard.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    MassProductionFactory: "<img src='./icons/MapIconMassProductionFactory.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    Seaport: "<img src='./icons/MapIconSeaport.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    EngineeringCenter: "<img src='./icons/MapIconTechCenter.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    
    SalvageField: "<img src='./icons/MapIconSalvage.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    ComponentField: "<img src='./icons/MapIconComponents.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    SulfurField: "<img src='./icons/MapIconSulfur.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    
    SalvageMine: "<img src='./icons/MapIconSalvageMine.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    ComponentMine: "<img src='./icons/MapIconComponentMine.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    SulfurMine: "<img src='./icons/MapIconSulfurMine.png' style='width:24px;height:24px;vertical-align:middle;'/>",
    OilWell: "<img src='./icons/MapIconOilWell.png' style='width:24px;height:24px;vertical-align:middle;'/>",
};

const baseTree = [
    {label: "Original Map", layer: mapLayers.OriginalMapTiles},
    {label: "Satellite Map", layer: mapLayers.SatelliteMapTiles},
];

const overlaysTree = {
    label: "<strong>Map Legend</strong>",
    children: [
        { label: "Region Names",                                                layer: mapLayers.RegionNames },
        { label: "Region Borders",                                              layer: mapLayers.RegionBorders },
        {
            label: "<strong>Bases</strong>",
            children: [
                { label: HTMLIcons.TownBase + " Town Bases",                    layer: mapLayers.TownBases },
                { label: HTMLIcons.RelicBase + ' Relic Bases',                  layer: mapLayers.RelicBases },
                { label: HTMLIcons.Keep + ' Keeps',                             layer: mapLayers.Keeps },
                { label: HTMLIcons.Safehouse + ' Safehouses',                   layer: mapLayers.Safehouses },
            ]
        },
        {
            label: "<strong>Structures</strong>",
            children: [
                { label: HTMLIcons.ObservationTower + " Observation Towers",    layer: mapLayers.ObservationTowers },
                { label: HTMLIcons.RocketSite + " Rocket Sites",                layer: mapLayers.RocketSites },
                { label: HTMLIcons.CoastalGun + " Coastal Guns",                layer: mapLayers.CoastalGuns },
            ]
        },
        {
            label: "<strong>Logistics</strong>",
            children: [
                { label: HTMLIcons.Hospital + " Hospitals",                     layer: mapLayers.Hospitals },
                { label: HTMLIcons.Factory + " Factories",                      layer: mapLayers.Factories },
                { label: HTMLIcons.VehicleFactory + " Vehicle Factories",       layer: mapLayers.VehicleFactories },
                { label: HTMLIcons.StorageDepot + " Storage Depot",             layer: mapLayers.StorageDepot },
                { label: HTMLIcons.Manufacturing + " Refineries",               layer: mapLayers.Refineries },
                { label: HTMLIcons.Shipyard + " Shipyards",                     layer: mapLayers.Shipyards },
                { label: HTMLIcons.ConstructionYard + " Construction Yards",    layer: mapLayers.ConstructionYards },
                { label: HTMLIcons.MassProductionFactory + " Mass Production Factories",  layer: mapLayers.MassProductionFactories },
                { label: HTMLIcons.Seaport + " Sea Ports",                      layer: mapLayers.Seaports },
                { label: HTMLIcons.EngineeringCenter + " Engineering Centers",  layer: mapLayers.EngineeringCenters },
            ]
        },
        {
            label: "<strong>Resources</strong>",
            children: [
                { label: HTMLIcons.SalvageField + " Salvage Field",             layer: mapLayers.SalvageFields },
                { label: HTMLIcons.ComponentField + " Component Field",         layer: mapLayers.ComponentFields },
                { label: HTMLIcons.SulfurField + " Sulfur Field",               layer: mapLayers.SulfurFields },
            ]
        },
        {
            label: "<strong>Mines</strong>",
            children: [
                { label: HTMLIcons.SalvageMine + " Salvage Mines",              layer: mapLayers.SalvageMines },
                { label: HTMLIcons.ComponentMine + " Component Mines",          layer: mapLayers.ComponentMines },
                { label: HTMLIcons.SulfurMine + " Sulfur Mines",                layer: mapLayers.SulfurMines },
                { label: HTMLIcons.OilWell + " Oil Wells",                      layer: mapLayers.OilWells },
            ]
        }
    ]
};

const options = {
    sortLayers: false,
    collapsed: true,
  
    namedToggle: false,
    selectorBack: false,
  };

export function mapLegend(){
    return L.control.layers.tree(baseTree, overlaysTree, options);
}