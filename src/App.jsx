
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="my-element"><h1>Testing</h1></div>
      <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
             </div>
              <h1>Vite + React</h1>
              <h1> Still working!!!!!</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> aasdfasdfasdfsand asdfasdf save to tesasdfasdft HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.  Hope this really works.  Time to test again!!!
      </p>asdf
    </div>
  )
}

export default App



