import React from 'react'
import '../styles/TopHeader.css'
import Sidebar from './Sidebar'

const TopHeader = () => (
  <div className='Top-Header'>
    <div className='Left-Container'>
      <button className='icon'><span className='icon-jpg'><ion-icon name="apps" /></span></button>
      <button className='icon'><span className='icon-jpg'><ion-icon name="home-outline" /></span></button>
      <button className='icon'><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" width="22px" height="22px">
      <path d="M 20 2 L 4 2 C 2.894531 2 2 2.894531 2 4 L 2 20 C 2 21.105469 2.894531 22 4 22 L 20 22 C 21.105469 22 22 21.105469 22 20 L 22 4 C 22 2.894531 21.105469 2 20 2 Z M 11 18 C 11 18.550781 10.550781 19 10 19 L 5 19 C 4.445313 19 4 18.550781 4 18 L 4 5 C 4 4.449219 4.445313 4 5 4 L 10 4 C 10.550781 4 11 4.449219 11 5 Z M 20 11.996094 C 20 12.550781 19.550781 13 18.996094 13 L 14.003906 13 C 13.449219 13 13 12.550781 13 11.996094 L 13 5.003906 C 13 4.449219 13.449219 4 14.003906 4 L 18.996094 4 C 19.550781 4 20 4.449219 20 5.003906 Z"/></svg>
      &nbsp;&nbsp;Boards
      </button>
      <button className='icon'><span style={{fontWeight: '100'}}>Jump to...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='icon-jpg'><ion-icon name="search-outline" /></span></button>
    </div>
    <div className='trello-icon-container'>
      <img className='trello-icon' src='https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.8835731c276d3777b6ee.gif'></img>
    </div>
    <div className='Right-Container'>
      <button className='icon'><span className='icon-jpg'><ion-icon name="add-outline" /></span></button>
      <button className='icon'><span className='icon-jpg'><ion-icon name="information-circle-outline" /></span></button>
      <button className='icon'><span className='icon-jpg'><ion-icon name="notifications-outline" /></span></button>
      <div>
        <div className="circle">
          <span className="initials" style={{top:'4px'}}>WY</span>
        </div>
      </div>
    </div>
</div>
)

export default TopHeader