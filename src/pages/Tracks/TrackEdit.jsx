import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetchData } from '@/hooks/useFetchApi'
import { TrackForm } from './TrackForm'
import { ButtonLink } from '../../components/ButtonLink'
import Button from '@mui/material/Button'

export const TrackEdit = () => {
  const { trackId } = useParams()
  const { data, error, loading } = useFetchData('tracks/' + trackId)

  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect just fired')
  }, [trackId])

  const onSubmit = (data) => {
    console.log('Editing track! ' + data.id)
    //   axios.put('http://127.0.0.1:9000/tracks/' + track.id, data)
  }
  return (
    <>
      <h1>Edit Existing Track</h1>
      {loading && <div>Loading</div>}
      {error && <div>Error!!!</div>}

      {!loading && <TrackForm track={data} onSubmit={onSubmit} />}
      <Link to={`/tracks/${trackId - 1}`}>
        <Button variant="contained">Previous</Button>
      </Link>
      {trackId > 1 && (
        <ButtonLink url={`/tracks/${parseInt(trackId) - 1}`} caption="Prev" />
      )}
      {trackId < 400 && (
        <ButtonLink url={`/tracks/${parseInt(trackId) + 1}`} caption="Next" />
      )}
    </>
  )
}
