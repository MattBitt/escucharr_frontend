import { Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NoPage } from '@/pages/NoPage'
import { TracksPage } from '@/pages/Tracks/TracksPage'
import { TrackEdit } from './pages/Tracks/TrackEdit'
import { TrackCreate } from '@/pages/Tracks/TrackCreate'
import { SourcesPage } from '@/pages/Sources/SourcesPage/SourcesPage'
import { SourceForm } from '@/pages/Sources/SourceForm/SourceForm'
import { ComboBox } from '@/components/ComboBox'
import { NavBar } from '@/components/NavBar/NavBar'
import Button from '@mui/material/Button'

const newItemList = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
  { id: 5, name: 'matt' },
  { id: 3, name: 'matte' },
  { id: 4, name: 'lindsay' },
]

export const App = () => {
  return (
    <>
      <div className="App">
        <nav>
          <NavBar />
        </nav>
        <h1>Hello! This is the end of the App Section.</h1>
        <ComboBox myItems={newItemList} />
        <h1> Pages start below</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="sources" element={<SourcesPage />} />
        <Route path="sources/:sourceId" element={<SourceForm />} />
        <Route
          path="sources/:sourceId/create_track"
          element={<TrackCreate />}
        />

        <Route path="tracks" element={<TracksPage />} />
        <Route path="tracks/:trackId" element={<TrackEdit />} />

        {/* <Route path="create_track/" element={<TrackCreate />} /> */}

        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}
