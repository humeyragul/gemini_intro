import React from 'react'
import { Gear } from 'phosphor-react'
import logo from '../assets/HR.png'

const InterviewHistory = () => {
  return (
    <div className='interview-history-styled'>
        <div className='sidebar-top'>
            <img src={logo} alt="" className='logo'/>
        </div>
        <div className='sidebar-bottom'>
            <div><Gear weight='bold' size={20}/>Ayarlar</div>
            <p>Code by Gemini HR</p>
        </div>
    </div>
  )
}

export default InterviewHistory
