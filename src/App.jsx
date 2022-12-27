import './App.scss'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Sources from "./pages/Sources"
import Source from "./pages/Source"
import Tracks from "./pages/Tracks"
import TrackEditor from './pages/TrackEditor';
import Track from "./pages/Track"
import NavigationBar from './components/NavigationBar'
import WhatsPlaying from './pages/WhatsPlaying';

const sources = [
  { id: '1', fullName: 'Robin Wieruch' },
  { id: '2', fullName: 'Sarah Finnley' },
  { id: '3', fullName: 'Matt Bittinger' },
  { id: '4', fullName: 'Lindsay Furst' },

];

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <nav>
        <NavigationBar />
      </nav>
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sources" element={<Sources sources={sources}/>}> 
          <Route path=":sourceId" element={<Source />} />
        </Route>
        <Route path="tracks" element={<TrackEditor />} /> 
        <Route path="tracks/:trackId" element={<Track />} />
        
         <Route path="whats-playing" element={<WhatsPlaying />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      
    </div>






  )
}

export default App



