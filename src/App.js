import React from 'react'
import Home from './pages/Home'
import './styles/Global.scss'
import Sidebar from './components/Sidebar'



const App = () => {
  return (
    <div className='app-styled'>
      <Sidebar />
        <Home />
    </div>
  )
}

export default App