import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Transactions, Dividends } from './pages';
import { Navbar, Footer } from './components';

import './App.css'

const App = () => {

  return (
    <div className='h-screen flex flex-col'>
      <BrowserRouter>
        <Navbar/>
        <div className='mb-auto'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/transactions' element={<Transactions/>}/>
            <Route path='/dividends' element={<Dividends/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App