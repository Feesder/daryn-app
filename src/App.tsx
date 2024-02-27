import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import RegistrationPage from './page/RegistrationPage';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import DashboardPage from './page/DashboardPage';
import MainPage from './page/MainPage'
import { toJS } from 'mobx';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
      console.log(toJS(store.getUser()))
    }
  }, [])

  if (store.isLoading) {
    return (
      <div>Загузка...</div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegistrationPage /> } />
      <Route path="/dashboard" element={ <DashboardPage /> } />
    </Routes>
  )
}

export default observer(App);
