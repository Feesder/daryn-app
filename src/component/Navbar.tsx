import React, { useEffect, useState } from 'react';
import { Mark } from '../model/Mark';
import axios from 'axios';
import Logo from './Logo';

interface props {
    directions: Mark[]
    updateDirections: (response: Mark[]) => void
}

function Navbar(props: props) {
    const [directions, setDirections] = useState<Mark[]>(props.directions);

    useEffect(() => {
        const uniqueDays = new Set();
        setDirections(directions.filter((value) => {
            if (!uniqueDays.has(value.timeAdded.getDate())) {
                uniqueDays.add(value.timeAdded.getDate());
                return true;
            }
            return false;
        }))
    }, [])

    return (
        <div className='map-navbar'>
            <Logo />
            <h3 className='font-semibold text-xl mb-3 mt-3'>Метки</h3>
            <div className="mb-5">
                <div className='flex items-center'>
                    <div className='map-circle' style={{border: '3px solid #34A853', borderRadius: 50}}></div>
                    <p className='font-medium'>дорога в хорошем состоянии</p>
                </div>
                <div className='flex items-center'>
                    <div className='map-circle' style={{border: '3px solid #FBBC05', borderRadius: 50}}></div>
                    <p className='font-medium'>дорога с дефектами (трещины)</p>
                </div>
                <div className='flex items-center'>
                    <div className='map-circle' style={{border: '3px solid #EA4335', borderRadius: 50}}></div>
                    <p className='font-medium'>дорога с дефектами (ямы и выбоины)</p>
                </div>
                <div className='flex items-center'>
                    <div className='map-circle' style={{border: '3px solid #8B00FF', borderRadius: 50}}></div>
                    <p className='font-medium'>Дорога без асфальта</p>
                </div>
                <div className='flex items-center'>
                    <div className='map-circle' style={{border: '3px solid #D8D9DA', borderRadius: 50}}></div>
                    <p className='font-medium'>Неопределенно</p>
                </div>
            </div>
            <h3 className='font-semibold text-xl mb-3'>История</h3>
            <div className='border rounded-md overflow-y-auto h-96'>
                <button 
                    onClick={() => {
                        axios.get<Mark[]>('http://localhost:8080/api/v1/mark')
                        .then((response) => {
                            props.updateDirections(response.data)
                        })
                    }}
                    className='nav-btn rounded'
                >{ "Показать все метки" }</button>
                {directions && (
                    directions.map(value => (
                        <button 
                            onClick={() => {
                                const date = value.timeAdded.toISOString().split('T')[0];
                                axios.get<Mark[]>('http://localhost:8080/api/v1/mark?time=' + date)
                                .then((response) => {
                                    console.log(response.data)
                                    props.updateDirections(response.data)
                                })
                            }}
                            className='nav-btn rounded'
                            key={String(value.id)}
                        >{ value.timeAdded.toISOString().split('T')[0] }</button>
                    ))
                )}
            </div>
        </div>
    )
}

export default Navbar;