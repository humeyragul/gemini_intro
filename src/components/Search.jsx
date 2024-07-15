import { Image, Microphone } from 'phosphor-react'
import React from 'react'

const Search = () => {
    return (
        <div className='search-styled'>
            <div>
                <input autoFocus type="text" placeholder='Öncelikle bir mülakat konusu seçin...' />
                <Image weight='bold' size={25} color='gray' />
                <Microphone weight='bold' size={25} color='gray' />
            </div>
            <p>Gemini, kişiler de dahil olmak üzere farklı konular hakkında yanlış bilgiler gösterebilir. Bu nedenle, verdiği yanıtların doğru olup olmadığını kontrol edin.</p>
        </div>
    )
}

export default Search
