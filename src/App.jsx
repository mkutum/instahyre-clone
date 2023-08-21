import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
