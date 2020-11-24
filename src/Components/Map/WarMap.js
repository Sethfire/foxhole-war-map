import React from 'react';
import L from 'leaflet';
import {Map, TileLayer, ImageOverlay, LayersControl, Pane} from 'react-leaflet';

import MapRegions from './MapRegions.js';
import MapItems from './MapItems.js';

const {BaseLayer, Overlay} = LayersControl;
 
class WarMap extends React.Component{

    constructor() {
        super();

        this.state = {
            mapItems: 0
        }
    }

    render() {
        console.log('Drawing War Map..')
        return (
            <Map className='war-box' id='war-map'
                zoomControl={true}
                doubleClickZoom={false}
                attributionControl={true}
        
                crs={L.CRS.Simple}
                center={[-128, 128]}
                zoom={3}
                minZoom={2}
                maxZoom={5}
                zoomSnap={1}
                wheelPxPerZoomLevel={60}

                maxBounds={[[-256,-50],[0,306]]}
                maxBoundsViscosity={1.0}>

                {/* DEFAULT LEAFLET PANES ZINDEX
                mapPane	'auto' Contains all other map panes
                tilePane	200 GridLayers and TileLayers
                overlayPane	400	Vectors (Paths, like Polylines and Polygons), ImageOverlays and VideoOverlays
                shadowPane	500	Overlay shadows (e.g. Marker shadows)
                markerPane	600	Icons of Markers
                tooltipPane	650	Tooltips.
                popupPane	700	Popups.
                */}

                <Pane name='basesPane' style={{ zIndex: 610 }} />
                <Pane name='structuresPane' style={{ zIndex: 609 }} />
                <Pane name='resourcesPane' style={{ zIndex: 608 }} />

                <Pane name='regionLabelsPane' style={{ zIndex: 620 }} />
                <Pane name='regionBordersPane' style={{ zIndex: 400 }} />

                <Pane name='backgroundPane' style={{ zIndex: 100 }} />

                <MapRegions />
                <MapItems />

                <ImageOverlay
                    url={process.env.PUBLIC_URL + '/WorldMapBG.jpg'}
                    bounds={[
                        [-349.538, -265.846],
                        [93.538, 521.846]
                    ]}
                    pane='backgroundPane'
                />

                <TileLayer 
                    url='https://raw.githubusercontent.com/Kastow/Foxhole-Map-Tiles/master/Tiles/{z}/{z}_{x}_{y}.png'
                    zIndex={200}
                />

                {/*
                <LayersControl position='topright'>
                    <BaseLayer name='Original Map'>
                        <TileLayer url={process.env.PUBLIC_URL + '/tiles/{z}/{z}_{x}_{y}.png'} opacity={0.5} zIndex={10} />
                    </BaseLayer>
                    
                    <BaseLayer name='Satellite Map'>
                        <TileLayer url={process.env.PUBLIC_URL + '/sat tiles/{z}/{z}_{x}_{y}.png'} opacity={0.5} zIndex={10} />
                    </BaseLayer>
                </LayersControl>
                */}
            </Map>
        );
    }
}

export default WarMap;
