import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import SourcesPage from './pages/SourcesPage'
import TracksPage from './pages/TracksPage'
import NavigationBar from './components/NavigationBar'
import WhatsPlaying from './pages/WhatsPlaying'
import TrackLoadFromUrl from './components/TrackLoadFromUrl'
import SourceFormLoadFromUrl from './components/SourceFormLoadFromUrl'
import BlankSourceForm from './components/BlankSourceForm.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App bg-light">
        <div>
          <nav>
            <NavigationBar />
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sources/blank" element={<BlankSourceForm />} />
            <Route path="sources" element={<SourcesPage />} />
            <Route
              path="sources/:sourceId"
              element={<SourceFormLoadFromUrl />}
            />

            <Route path="tracks" element={<TracksPage />} />
            <Route path="tracks/:trackId" element={<TrackLoadFromUrl />} />

            <Route path="whatsplaying" element={<WhatsPlaying />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
