import React, {useState} from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Loader from "../components/UI/loader/Loader";

const MapDefault = () => {
    const [isMapLoading, setIsMapLoading] = useState(false);

    const mapState = {center: [56.7333, 37.1667], zoom: 12};
    const coordinate = [56.753429, 37.164175];

    return (
        <div>
            <h1>Карта</h1>
            {!isMapLoading && <Loader/>}
            <YMaps>
                <Map defaultState={mapState} width='100%' height='580px' onLoad={() => setIsMapLoading(true)}>
                    <Placemark geometry={coordinate}/>
                </Map>
            </YMaps>
            <br/>
        </div>
    );
};

export default MapDefault;
