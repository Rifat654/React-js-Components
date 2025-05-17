import React from 'react'
import API from './components/Slider/API'
import Jokes from './components/Random-jokes/Jokes'
import User from './components/User-Card/User'
import Accordain from './components/FAQ/Accordain'



const App = () => {
  return (
    <div >
      <Jokes />
      <User />
      <Accordain />

    </div>
  )
}

export default App
