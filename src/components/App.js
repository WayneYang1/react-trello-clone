import React from 'react'
import Board from './Board'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

import '../styles/App.css'

import '../styles/Sidebar.css'

class App extends React.Component {
  render(){
    return(
      <div className='App' style={{
        background: 'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1152/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg")',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
        }}>
        <TopHeader />
        <BottomHeader />
        <Board />
      </div>
    )
  }
}
export default App;