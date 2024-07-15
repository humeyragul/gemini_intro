import React, { useState } from 'react';
import Header from '../components/Header';
import { ArrowDown, List, Users } from 'phosphor-react';
import { MagnifyingGlass } from 'phosphor-react'
import Search from '../components/Search';
// No need to import Search component anymore

const Home = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleShowMoreClick = () => {
    setIsShowMore(!isShowMore);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='home-styled'>
      <Header />
      <div className='content'>
        <div className='title'>
          <h1>Merhaba Kullanıcı</h1>
          <h2>Bugün Ne Mülakatı Yapıyoruz?</h2>
        </div>
        <div className='grid'>
            <div className='item'>
              <p>React Developer Mülakatı</p>
              <span><List weight='bold' size={25}/></span>
            </div>
            <div className='item'>
              <p>NodeJS Developer Mülakatı</p>
              <span><List weight='bold' size={25}/></span>
            </div>
            <div className='item'>
              <p>Proje Yönetimi Mülakatı</p>
              <span><Users weight='bold' size={25}/></span>
            </div>
            <div className='item'>
              <p>İş Geliştirme Mülakatı</p>
              <span><List weight='bold' size={25}/></span>
            </div>
          </div>
        </div>
        {isShowMore && (
          <div className='more' onClick={handleShowMoreClick}>
            <ArrowDown />
            <p>Daha fazla mülakat</p>
          </div>
        )}
        {!isShowMore && (
          <div className='search-bar-container'>
          <div className="search-bar">
            <input type="text" value={searchText} onChange={handleSearchChange} placeholder="Neydi bu alan yaa..." />
            <MagnifyingGlass weight='bold' size={20} color='gray' className='search-button'/>
          </div>
          </div>
        )}
        <Search />
      </div>
  );
};

export default Home;
