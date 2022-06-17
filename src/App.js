import './App.css';
import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import MentalState from './MentalState';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
        <div>
          <header>
            <h1>Choose Your ~State of Mind~</h1>
          </header>

          <div className='choices'>
            <Link to='mental-state' className='choice'>Focus</Link>
            <Link to='mental-state' className='choice'>Relax</Link>
            <Link to='mental-state' className='choice'>Sleep</Link>
          </div>
        </div>
        } />

        <Route exact path='/mental-state' element={<MentalState />} />

      </Routes>
    </div>
  );
}

export default App;
