import React from 'react'
import { ArrowDown, Chat, Plus } from 'phosphor-react'

const Interview = () => {
  return (
    <div className='interview-styled'>
        <button className='new-interview-button'><Plus weight='bold' size={20} />Yeni Mülakat</button>
        <div className='interview-messages'>
            <div className='baslik'>Geçmiş Mülakatlar</div>
            <div className='interview-header'><Chat weight='bold' size={15}/>İş Geliştirme Mülakatı</div>
            <p>17 Haz 2024</p>
            <p className='interview-daha-fazla'><ArrowDown />Daha fazla göster</p>
        </div>
    </div>
  )
}

export default Interview
