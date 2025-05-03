import React from 'react'
import API from './components/Slider/API'
import Jokes from './components/Random-jokes/Jokes'
import User from './components/User-Card/User'


const App = () => {
  return (
    <div className=' bg-]'>
      <Jokes />
      <User />
      {/* <API /> */}
    </div>
  )
}

export default App
