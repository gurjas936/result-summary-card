import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstBox from './components/FirstBox'
import SecondBox from './components/SecondBox'

function App() {

  return (
    <div className='container'>
        <FirstBox />
        <SecondBox />
  
    </div>
  )
}

export default App
