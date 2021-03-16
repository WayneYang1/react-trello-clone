import React, {useState} from 'react'
import '../styles/TopHeader.css'
import '../styles/Sidebar.css'


function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='navbar'>
        <div className='menu-bars'>
          <button className='icon' onClick={showSidebar}><span className='icon-jpg'><ion-icon name="ellipsis-horizontal-outline" /></span>&nbsp;Show Menu</button>
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <div className='nav-text' className='navbar-toggle'>
            <h3>Menu</h3>
              <ion-icon className='close' name="close-outline" onClick={showSidebar}/>
          </div>
          <li className='nav-text'>
          <span className='menu-icon'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="trello" class="svg-inline--fa fa-trello fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"/></svg></span>
            <span className='menu-text'>&nbsp;&nbsp;&nbsp;About This Board</span>
          </li>
          <li className='nav-text'>
            <span className='menu-icon' style={{backgroundImage: 'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x270/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg")'}}></span>
            <span className='menu-text'>&nbsp;&nbsp;&nbsp;Change Background</span>
          </li>
          <li className='nav-text'>
            <ion-icon name="search-outline" />
            <span className='menu-text'>&nbsp;&nbsp;&nbsp;Search Cards</span>
          </li>
          <li className='nav-text'>
            <ion-icon name='copy-outline' />
            <span className='menu-text'>&nbsp;&nbsp;&nbsp;Stickers</span>
          </li>
          <li className='nav-text'>
          <ion-icon name="ellipsis-horizontal-outline" style={{height: '24px', width: '24px'}} />
          <span className='menu-text'>&nbsp;&nbsp;&nbsp;More</span>
          </li>
          <div style={{borderBottom: '1px solid black', height: '10px'}}></div>
          <div style={{height: '10px'}}></div>
          <li className='nav-text-large'>
            <ion-icon name="happy-outline" ></ion-icon>
            <span className='menu-text' style={{position:'relative', bottom:'1px', left:'3px'}}>&nbsp;&nbsp;&nbsp;Butler</span>
            <div style={{position: 'relative', top: '20px', left: '-38px'}}> Automate cards and more...</div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar