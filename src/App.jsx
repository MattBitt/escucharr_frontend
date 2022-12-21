
import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <nav>
          -- Put the navbar here
      </nav>
      <div className="container">
        <div className="row">
            <div className="col-md-5 content">
              main content section here
              .left items like my profile etc.. asdfasdf
              asdfasdfasdf




              asdfasdf



              qwer
              qwerqw

              zxcvzxcvzxcvzxvxz


              <p>qwerqwe</p>

              asdfasdfasdf
              asdfqwer
              qwer
              qwerqwerqwer

              qwerqwerqwer


              asdfasdf
            </div>
            <div className="col-md-2" />
            <div className="col-md-5 content">
              second content section here
            </div>
            {/* <div className={["col-sm-1", "side_padding"].join(' ')}>
              main content section here
            </div> */}
        </div>
      </div>

      <footer>
        -- footer always stay at bottom -
      </footer>
</div>
</>
  )
}

export default App



