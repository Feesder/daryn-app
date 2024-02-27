import React, { useEffect, useState } from 'react';
import { GeoObject } from '@pbe/react-yandex-maps';
import { Mark } from '../model/Mark';

interface props {
    origin: Mark,
    destination: Mark
}

function Direction({origin, destination}: props) {
    const [color, setColor] = useState<string>('#1976D2');

    useEffect(() => {
        (async () => {
            if (!destination) {
                return;
            }

            switch (origin.road) {
                case 'ROAD_CRACKS':
                    setColor('#FBBC05');
                    break;
                case 'ROAD_DEFAULT':
                    setColor('#34A853');
                    break;
                case 'ROAD_PITS':
                    setColor('#EA4335');
                    break;
                case 'ROAD_WITHOUT_ASPHALT':
                    setColor('#D8D9DA');
                    break;
                default:
                    setColor('#8B00FF');
            }
        })();
    }, [])
    
    if (!destination) {
        return <></>
    }
    
    const originTime = new Date(origin.timeAdded)
    const destinationTime = new Date(destination.timeAdded)
    
    console.log(destinationTime.getTime() - originTime.getTime() >= 50000)

    if (destinationTime.getTime() - originTime.getTime() >= 50000) {
        return <></>
    }
    
    return (
        <>
            <GeoObject
                geometry={{
                    type: "LineString",
                    coordinates: [
                        [origin.latitude, origin.longitude],
                        [destination.latitude, destination.longitude]
                    ]
                }}
                
                options={{
                    strokeWidth: 5,
                    strokeColor: color,
                }}
            />
        </>
    )
}

export default Direction;