import { useState } from 'react'
import './App.scss'
import SourceForm from './components/SourceForm'
import TrackForm from './components/TrackForm'
import NavigationBar from './components/NavigationBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <nav>
        <NavigationBar />
      </nav>
      <div className="container">
        <div className="row">
          <div className="left-pane col"><SourceForm /></div>
          <div className="right-pane col"><TrackForm /></div>
        </div>
      </div>
    </div>






  )
}

export default App



