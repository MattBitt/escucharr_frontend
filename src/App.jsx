import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NoPage } from './pages/NoPage'

export const App = () => {
  return (
    <>
      <div>
        <div>
          <nav>Navigation will be here!</nav>
          <h1>Hello!</h1>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}
