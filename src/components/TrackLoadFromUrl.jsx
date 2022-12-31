import TrackForm from './TrackForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function TrackLoadFromUrl() {
  const apiUrl = import.meta.env.VITE_SERVER_URL
  const apiPath = import.meta.env.VITE_API_PATH

  const { trackId } = useParams()
  const [track, setTrack] = useState([])
  // const [loading, setLoading] = useState(false);
  const getTrackData = async () => {
    try {
      const data = await axios.get(apiUrl + apiPath + '/tracks/' + trackId)
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
