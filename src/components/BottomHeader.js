import React from 'react'
import '../styles/BottomHeader.css'
import Sidebar from './Sidebar'


const BottomHeader = () => (
  <div className='Bottom-Header'>
    <div className='Left-Container'>
      <button className='icon'>
        <span className='icon-jpg'><ion-icon name="clipboard-outline" /></span>
          <span className='normal-icon-font'>Board&nbsp;</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </button>
      <button className='icon'><span className='large-font'>Simple Project Board</span></button>
      <button className='icon'><ion-icon name="star-outline" /></button>
      <span className='board-header-divider'></span>
      <button className='icon'>
        <span className='normal-icon-font'>My team 
        <span className='bubble'>Free</span>
        </span>
      </button>
      <span className='board-header-divider'></span>
      <button className='icon'>
        <span className='icon-jpg'><ion-icon name="people-outline" /></span>
          <span className='normal-icon-font'>Team Visible</span>
      </button>
      <span className='board-header-divider'></span>
      <div>
        <div className="circle">
          <span className="initials" style={{top:'4px'}}>WY</span>
        </div>
      </div>
      <button className='icon'>
        <span className='normal-icon-font'>Invite</span>
      </button>
    </div>
    <div className='Right-Container'>
      <button style={{position:'relative', flexDirection:'row', left:'30px'}} className='icon'>
        <span className='icon-jpg'><ion-icon name="happy-outline" /></span>
          <span style={{justifyContent: 'flex-end'}} className='normal-icon-font'>Butler</span>
      </button>
      <div>
        <Sidebar />
      </div>
    </div>
</div>
)

export default BottomHeader