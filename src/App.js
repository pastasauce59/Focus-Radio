import './App.css';
import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import MentalState from './MentalState';
import { Focus, Relax, Sleep } from './Audio'

function App() {

  const [audio, setAudio] = useState({audio: '', state: ''})

  let handleClick = (e) => {

    if(e.target.textContent === "Focus"){
        setAudio({
          audio: Focus,
          state: e.target.textContent
        })
    }
    if(e.target.textContent === "Relax"){
      setAudio({
        audio: Relax,
        state: e.target.textContent
      })
    }
    if(e.target.textContent === "Sleep"){
      setAudio({
        audio: Sleep,
        state: e.target.textContent
      })
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
        <div>
          <header>
            <h1>Choose Your ~State of Mind~</h1>
          </header>

          <div className='choices' onClick={handleClick}>
            <Link to='mental-state' className='choice'>Focus</Link>
            <Link to='mental-state' className='choice'>Relax</Link>
            <Link to='mental-state' className='choice'>Sleep</Link>
          </div>
        </div>
        } />

        <Route exact path='/mental-state' element={<MentalState audio={audio} />} />

      </Routes>
    </div>
  );
}

export default App;
