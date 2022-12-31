import axios from 'axios'
import { useState, useEffect } from 'react'
import TrackLoadFromUrl from '../components/TrackLoadFromUrl'
import SourceFrom from '../components/SourceForm'

const WhatsPlaying = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL
  const apiPath = import.meta.env.VITE_API_PATH
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(apiUrl + apiPath + '/whatsplaying').then((response) => {
      setData(response.data)
    })
  }, [])

  if (!data[0]) return 'No data!'
  if (data[0].library_type === 'source') {
    return (
      <>
        <h1>Source Playing</h1>
        <h2>Video Title: {data[0].video_title}</h2>
        <h2>Current Title: {data[0].current_time}</h2>
        <SourceFrom source={data[0]} />;
      </>
    )
  }
  if (data[0].library_type === 'track')
    return (
      <>
        <h1>Track Playing</h1>
        <h2>Track Title: {data[0].track_title}</h2>
        <h2>Current Time: {data[0].current_time}</h2>
        <TrackLoadFromUrl track={data[0]} />;
      </>
    )
}

export default WhatsPlaying
