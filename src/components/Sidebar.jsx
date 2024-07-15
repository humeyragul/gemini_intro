import React from 'react'
import { ArrowDown, Chat, Gear,Plus} from 'phosphor-react' 
import logo from '../assets/HR.png'

const Sidebar = () => {
  return (
    <aside className='sidebar-styled'>
        <div className='sidebar-top'>
            <img src={logo} alt="" className='logo'/>
            <button><Plus weight='bold' size={20} />Yeni Mülakat</button>
        </div>
        <div className='sidebar-messages'>
            <div className='baslik'>Geçmiş Mülakatlar</div>
            <div className='sidebar-header'><Chat weight='bold' size={15}/>İş Geliştirme Mülakatı</div>
            <p>17 Haz 2024</p>
            <p className='sidebar-daha-fazla'><ArrowDown />Daha fazla göster</p>
        </div>
        <div className='sidebar-bottom'>
            <div><Gear weight='bold' size={20}/>Ayarlar</div>
            <p>Code by Gemini HR</p>
        </div>
    </aside>
  )
}

export default Sidebar