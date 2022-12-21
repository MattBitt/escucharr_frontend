import { useState } from 'react'
import './App.scss'
import TestForm from './components/TestForm'
import TestForm2 from './components/TestForm2'
import NavigationBar from './components/NavigationBar'
import MyMultiSelect from './components/MyMultiSelect'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      {/* <nav>
        <NavigationBar />
      </nav> */}
      <p><TestForm /></p>
      <p><TestForm2 /></p>

      <p><MyMultiSelect /></p>
      <p><MyMultiSelect /></p>
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



