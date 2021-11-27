import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Forecast from './pages/Forecast';
import Setting from './pages/Setting';
import SideDrawer from './components/sidebar/SideDrawer';
import NotFound from './components/NotFound';

function App() {
  const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false);
  return (
    <div>
      <SideDrawer show={isOpenSideDrawer} showSideBar={setIsOpenSideDrawer} />
      <Routes>
        <Route path="/" element={<Home isShowSideBar={isOpenSideDrawer} showSideBar={setIsOpenSideDrawer} />} />
        <Route path="/:en/:country/:city/:forecastType/:cityCode" element={<Forecast showSideBar={setIsOpenSideDrawer} />} />
        <Route path="/:en/setting" element={<Setting showSideBar={setIsOpenSideDrawer}/>} />
        <Route path="*" element={<NotFound  showSideBar={setIsOpenSideDrawer} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
