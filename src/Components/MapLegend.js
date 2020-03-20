import React from "react";

class mapLegend extends React.Component{
    render() {
        return (
            <div className='war-box' id='map-legend'>
                <p>
                    <h1>Map Legend</h1>

                    <b>Bases</b><br />
                    <label>
                        <input name='town-halls' type='checkbox' />
                        <img src='/icons/MapIconStaticBase2.png' width='24px' height='24px' /> Town Halls
                    </label><br />
                    <label>
                        <input name='relic-bases' type='checkbox' />
                        <img src='/icons/MapIconRelicBase.png' width='24px' height='24px' /> Relic Bases
                    </label><br />
                    <label>
                        <input name='safehouses' type='checkbox' />
                        <img src='/icons/MapIconSafehouse.png' width='24px' height='24px' /> Safehouses
                    </label><br />
                    <label>
                        <input name='keeps' type='checkbox' />
                        <img src='/icons/MapIconKeep.png' width='24px' height='24px' /> Keeps
                    </label><br />

                    <b>World Structures</b><br />
                    <label>
                        <input name='obs-tower' type='checkbox' />
                        <img src='/icons/MapIconObservationTower.png' width='24px' height='24px' /> Observation Towers
                    </label><br />

                    <label>
                        <input name='rocket-site' type='checkbox' />
                        <img src='/icons/MapIconRocketSite.png' width='24px' height='24px' /> Rocket Sites
                    </label><br />

                    <b>Logistics</b><br />
                    <label>
                        <input name='refinery' type='checkbox' />
                        <img src='/icons/MapIconManufacturing.png' width='24px' height='24px' /> Refinery
                    </label><br />
                    <label>
                        <input name='factory' type='checkbox' />
                        <img src='/icons/MapIconFactory.png' width='24px' height='24px' /> Factory
                    </label><br />
                    <label>
                        <input name='armory' type='checkbox' />
                        <img src='/icons/MapIconArmory.png' width='24px' height='24px' /> Armory
                    </label><br />
                    <label>
                        <input name='vehicle' type='checkbox' />
                        <img src='/icons/MapIconVehicle.png' width='24px' height='24px' /> Vehicle Factory
                    </label><br />
                    <label>
                        <input name='storage' type='checkbox' />
                        <img src='/icons/MapIconStorageFacility.png' width='24px' height='24px' /> Storage Facility
                    </label><br />
                    <label>
                        <input name='shipyard' type='checkbox' />
                        <img src='/icons/MapIconShipyard.png' width='24px' height='24px' /> Shipyard
                    </label><br />
                    <label>
                        <input name='construction' type='checkbox' />
                        <img src='/icons/MapIconConstructionYard.png' width='24px' height='24px' /> Construction Yards
                    </label><br />
                    <label>
                        <input name='hospital' type='checkbox' />
                        <img src='/icons/MapIconHospital.png' width='24px' height='24px' /> Hospitals
                    </label><br />

                    <b>Resources</b><br />
                </p>
            </div>
        );
    }
}

export default mapLegend;