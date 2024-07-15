import { SignOut } from 'phosphor-react'
import React from 'react'

const Header = () => {
  return (
    <nav className='header-styled'>
      <p><SignOut weight='bold' size={20}/>Çıkış Yap</p>
      <span> </span>
    </nav>
    
  )
}

export default Header
