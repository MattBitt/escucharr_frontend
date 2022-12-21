import { useState } from 'react'
import './App.scss'
import TestForm from './components/TestForm'
import TestForm2 from './components/TestForm2'
import NavigationBar from './components/NavigationBar'
import Example from './components/Example'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      {/* <nav>
        <NavigationBar />
      </nav> */}
      <Example />
      {/* <div className="container">
        <div className="row">
            <div className="col-md-5 content">
              <TestForm />
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 content">
              asdaasdferw
              ASDFasdf

            </div>

        </div> */}
      </div>




  )
}

export default App



