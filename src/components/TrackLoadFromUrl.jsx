import TrackForm from './TrackForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function TrackLoadFromUrl() {
  const { trackId } = useParams()
  const [track, setTrack] = useState([])
  // const [loading, setLoading] = useState(false);
  const getTrackData = async () => {
    try {
      const data = await axios.get(
        'http://127.0.0.1:5000/api/v1/tracks/' + trackId
      )
      setTrack(data.data)
    } catch (e) {
      // console.error(e)
    }
  }
  useEffect(() => {
    getTrackData()
  }, [])

  return (
    <>
      <div>TrackLoadFromUrl</div>
      <TrackForm track={track} />;
    </>
  )
}

export default TrackLoadFromUrl
