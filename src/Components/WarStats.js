import React from "react";

class WarStats extends React.Component{
    render() {
        return (
            <div className='war-box' id='war-stats'>
                <p><font color='#d67b52'>State of the War</font></p>
                <table style={{width:'100%'}} id='war-table'>
                    <tbody>
                        <tr>
                            <th></th>
                            <th><img src='/icons/LogoColonial.png' width='32px' height='32px' /></th>
                            <th><img src='/icons/LogoWarden.png' width='32px' height='32px' /></th>
                        </tr>
                        <tr>
                            <th><img src='/icons/MapIconStaticBase1.png' width='32px' height='32px' /></th>
                            <th className='war-table-data'>0</th>
                            <th className='war-table-data'>0</th>
                        </tr>
                        <tr>
                            <th><img src='/icons/MapIconStaticBase2.png' width='32px' height='32px' /></th>
                            <th className='war-table-data'>0</th>
                            <th className='war-table-data'>0</th>
                        </tr>
                        <tr>
                            <th><img src='/icons/MapIconStaticBase3.png' width='32px' height='32px' /></th>
                            <th className='war-table-data'>0</th>
                            <th className='war-table-data'>0</th>
                        </tr>
                        <tr>
                            <th><img src='/icons/MapIconCivicCenter.png' width='32px' height='32px' /></th>
                            <th className='war-table-data'>0/<font color='#d67b52'>0</font></th>
                            <th className='war-table-data'>0/<font color='#d67b52'>0</font></th>
                        </tr>
                        <tr>
                            <th><img src='/icons/MapIconRelicBase.png' width='32px' height='32px' /></th>
                            <th className='war-table-data'>0</th>
                            <th className='war-table-data'>0</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WarStats;