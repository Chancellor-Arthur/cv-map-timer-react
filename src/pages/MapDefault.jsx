import React, {useEffect, useState} from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Loader from "../components/UI/loader/Loader";

const MapDefault = () => {
    const [isMapLoading, setIsMapLoading] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setIsMapLoading(true);
        }, 2000);
    });

    const mapState = {center: [56.7333, 37.1667], zoom: 12};
    const coordinate = [56.753429, 37.164175];

    return (
        <div>
            <h1>Карта</h1>
            {isMapLoading
                ? <YMaps>
                    <Map defaultState={mapState} width='100%' height='580px'>
                        <Placemark geometry={coordinate}/>
                    </Map>
                </YMaps>
                : <Loader/>
            }
        </div>
    );

};

export default MapDefault;
