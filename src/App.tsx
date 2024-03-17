import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './Components/Pages/HomePageComponent';
import PageTwoComponent from './Components/Pages/PageTwoComponent';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <BrowserRouter>

      <NavbarComponent/>

      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/pageTwo' element={<PageTwoComponent/>}/>
      </Routes>

      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
