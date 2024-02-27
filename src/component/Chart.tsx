import { Map, RoutePanel } from '@pbe/react-yandex-maps';
import React, { useRef } from 'react';
import { Mark } from '../model/Mark';import ymaps from 'yandex-maps';

interface props {
    directions: Mark[];
}

function Chart({ directions }: props) {     
    const map = useRef<ymaps.Map>()

    const mapState = {
        center: [45.01860459925494, 78.38188120205517], 
        zoom: 13,
        style: 'night'
    }

    const addRoute = (ymaps: any) => {
        directions.map((value, key) => {
            if (!directions[key + 1]) return

            const origin = directions[key]
            const destination = directions[key + 1]

            const originTime = new Date(origin.timeAdded)
            const destinationTime = new Date(destination.timeAdded)
    
            console.log(originTime.getTime())

            if (destinationTime.getTime() - originTime.getTime() >= 50000) {
                return
            }
            
            let color = '#8B00FF'

            switch (origin.road) {
                case 'ROAD_CRACKS':
                    color = '#FBBC05';
                    break;
                case 'ROAD_DEFAULT':
                    color = '#34A853';
                    break;
                case 'ROAD_PITS':
                    color = '#EA4335';
                    break;
                case 'ROAD_WITHOUT_ASPHALT':
                    color = '#D8D9DA';
                    break;
            }

            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    referencePoints: [
                        [directions[key].longitude, directions[key].latitude],
                        [directions[key + 1].longitude, directions[key + 1].latitude]
                    ]
                },
                {
                    routeActiveStrokeColor: color,
                    wayPointVisible: false,
                    pinVisible:false
                }
            );

            multiRoute.options.set('routeVisible', false);
            multiRoute.options.set('routeActiveVisible', true);
            
            map.current?.geoObjects.add(multiRoute);
        })
    };
    
    console.log(directions)

    return (
        <div className="map-container">
            <Map
                width="100%"
                height="100vh"
                modules={["multiRouter.MultiRoute"]}
                instanceRef={map}
                onLoad={addRoute}
                defaultState={mapState} />
        </div>
    )
}

export default Chart;