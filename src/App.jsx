import React from 'react'
import API from './components/Slider/API'
import Jokes from './components/Random-jokes/Jokes'
import User from './components/User-Card/User'
import Acordain from './components/FAQ/Acordain'


const App = () => {
  return (
    <div >
      <Jokes />
      <User />
      <Acordain />
      {/* <API /> */}
    </div>
  )
}

export default App
