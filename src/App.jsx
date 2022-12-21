import { useState } from 'react'
import './App.scss'
import TestForm from './components/TestForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <nav>
          -- Put the navbar here
      </nav>
      <div className="container">
        <div className="row">
            <div className="col-md-5 content">
              <TestForm />
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 content">
              <TestForm />
            </div>

        </div>
      </div>

      <footer>
        -- footer always stay at bottom -
      </footer>
    </div>

  )
}

export default App



