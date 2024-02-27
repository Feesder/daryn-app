import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..';
import Logo from '../component/Logo';
import Button from "../component/UI/button/Button";
import Profile from '../component/Profile';
import { User } from '../model/User'

const MainPage = () => {
    const { store } = useContext(Context)
    const [user, setUser] = useState<User>({} as User)
    
    useEffect(() => {
        setUser(toJS(store.getUser()));
    }, [])
    
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header-inner">
                        <Logo />
                        {
                        user.username ?
                        <Profile nickname={ user.username } />
                        :
                        <div className="navbar-menu">
                            <Button
                                onClick={() => {
                                window.location.href = "/login"
                            }}
                                >
                                SIGN IN
                            </Button>
                            <Button
                                onClick={() => {
                                window.location.href = "/register"
                            }}
                                >
                                TRY FREE
                            </Button>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className='promo w-full h-screen brightness-50 absolute'></div>
            <div className="container relative">
                <div className="promo-inner">
                    <div className="text-gray-50 text-center">
                        <h2 className="text-9xl mb-8 font-bold text-gray-50">SMART CITY</h2>
                    </div>
                </div>
            </div>
            <div className="section problems">
                <div className="container">
                    <div className="section-inner problems-inner">
                        <h2 className="text-4xl mb-8 font-bold">Проблематика</h2>
                        <p>В нашем городе существует множество проблем, но одной из ключевых является неравномерное распределение финансирования на дорожное строительство. Это приводит к использованию низкокачественных материалов при строительстве дорог, отсутствий необходимых улучшений и авариям.</p>
                    </div>
                </div>
            </div>
            <div className="section graph">
                <div className="container">
                    <div className="graph-inner text-center">
                        <h2 className="text-5xl mb-10 font-bold">Процент ужасных дорог за 3 года в Жетысу</h2> 
                        <div className="graph-block">
                            <div className="graph-box">
                                <svg className="mb-4" width="90%" viewBox="-50 -50 100 100" overflow="visible"><path d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.531577814756221e-15,-41A41,41,0,1,0,7.531577814756221e-15,41A41,41,0,1,0,-7.531577814756221e-15,-41Z" fill-opacity="0.4" stroke-opacity="0.6" style={{fill: "rgb(8, 47, 73)"}}></path><path d="M3.061616997868383e-15,-50A50,50,0,0,1,49.114362536434435,-9.369065729286232L40.273777279876235,-7.682633898014711A41,41,0,0,0,2.510525938252074e-15,-41Z" style={{fill: "rgb(8, 47, 73)"}}></path></svg>
                                <h3 className="font-semibold">2020</h3>
                            </div>
                            <div className="graph-box">
                                <svg className="mb-4" width="90%" viewBox="-50 -50 100 100" overflow="visible"><path d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.531577814756221e-15,-41A41,41,0,1,0,7.531577814756221e-15,41A41,41,0,1,0,-7.531577814756221e-15,-41Z" fill-opacity="0.4" stroke-opacity="0.6" style={{fill: "rgb(8, 47, 73)"}}></path><path d="M3.061616997868383e-15,-50A50,50,0,0,1,31.871199487434488,-38.525662138789464L26.13438357969628,-31.59104295380736A41,41,0,0,0,2.510525938252074e-15,-41Z" style={{fill: "rgb(8, 47, 73)"}}></path></svg>
                                <h3 className="font-semibold">2021</h3>
                            </div>
                            <div className="graph-box">
                                <svg className="mb-4" width="90%" viewBox="-50 -50 100 100" overflow="visible"><path d="M3.061616997868383e-15,-50A50,50,0,1,1,-3.061616997868383e-15,50A50,50,0,1,1,3.061616997868383e-15,-50M-7.531577814756221e-15,-41A41,41,0,1,0,7.531577814756221e-15,41A41,41,0,1,0,-7.531577814756221e-15,-41Z" fill-opacity="0.4" stroke-opacity="0.6" style={{fill: "rgb(8, 47, 73)"}}></path><path d="M3.061616997868383e-15,-50A50,50,0,0,1,40.45084971874737,-29.389262614623657L33.16969676937285,-24.099195343991397A41,41,0,0,0,2.510525938252074e-15,-41Z" style={{fill: "rgb(8, 47, 73)"}}></path></svg>
                                <h3 className="font-semibold">2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section target bg-cyan-900">
                <div className="container">
                    <div className="target-inner">
                        <div className="target-block">
                            <h2 className="text-4xl mb-8 font-bold">Цель</h2>
                            <ul className="list-disc">
                                <li>Решить проблему с дорогами.</li>
                                <li>Снизить количество потенциальных аварий.</li>
                                <li>Осведомить правительственные органы о плохом развитии дорог.</li>
                            </ul>
                        </div>
                        <img src="images/target_road.jpg" />
                    </div>
                </div>
            </div>
            <div className="section solution">
                <div className="container">
                    <div className="section-inner solution-inner">
                        <h2 className="text-4xl mb-8 font-bold">Решение проблемы</h2>
                        <p>Наш проект представляет собой решение наших проблем, поскольку он выявляет участки с плохим состоянием дорог и информирует акимат о текущих проблемах, связанных с неравномерным финансированием, с целью принятия мер для их устранения.</p>
                    </div>
                </div>
            </div>
            <div className='traffic w-full h-screen brightness-50 absolute' />
            <div className="container">
                <div className="traffic-inner relative">
                    <div className="text-gray-50 text-left">
                        <h2 className="text-7xl mb-8 font-bold text-gray-50">Цветовые индикаторы на карте</h2>
                        <div className="traffic-block">
                            <div className="traffic-box">
                                <h3 className="mb-3 text-xl font-semibold">Зеленый цвет</h3>
                                <p>Индикатор ровных дорог</p>
                            </div>
                            <div className="traffic-box">
                                <h3 className="mb-3 text-xl font-semibold">Желтый цвет</h3>
                                <p>Индикатор удовлетворительных дорог</p>
                            </div>
                            <div className="traffic-box">
                                <h3 className="mb-3 text-xl font-semibold">Красный цвет</h3>
                                <p>Индикатор с критическим уровнем состояния дорог</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(MainPage);