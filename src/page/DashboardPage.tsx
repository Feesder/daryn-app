import Chart from '../component/Chart';
import Navbar from '../component/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { YMaps } from '@pbe/react-yandex-maps';
import { Mark } from '../model/Mark';
import Loading from '../component/Loading';


let YANDEX_MAP_API_KEY = "291062db-de01-4eb9-b0d2-d44596067922";

function DashboardPage() {
    const [directions, setDirections] = useState<Mark[]>([] as Mark[]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get<Mark[]>('http://localhost:8080/api/v1/mark')
            .then((response) => {
                const data = response.data.map((value) => ({
                    ...value,
                    timeAdded: new Date(value.timeAdded)
                }))
                setDirections(data)
                setLoading(false);
            })
    }, [])

    const updateDirections = (response: Mark[]) => {
        setDirections(response);
        console.log(directions)
    }

    if (loading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <Loading />
            </div>
        )
    }
    
    return (
        <YMaps query={{apikey: YANDEX_MAP_API_KEY}}>
            <div className="map">
                <Navbar directions={directions} updateDirections={updateDirections} />
                <Chart directions={directions} />
            </div>
        </YMaps>
    );
}

export default DashboardPage;