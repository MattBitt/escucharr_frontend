import { useLocation, useParams } from 'react-router-dom'
import { TrackForm } from '@/pages/Tracks/TrackForm'
import { useFetchData } from '@/hooks/useFetchApi'
import { timeToMs, combineHMSInputs } from '@/utils/TimeUtils'
import axios from 'axios'

// would i need a separate function to create track from scratch vs from a source?
export const TrackCreate = () => {
  const { sourceId } = useParams()
  const { data, error, loading } = useFetchData('sources/' + sourceId)

  const blankTrack = {
    track_title: 'blank track title',
    start_time: 0,
    end_time: 0,
    track_number: 0,
    source_id: sourceId,
    album_id: 0,
  }

  const replaceAllObjKeys = (obj, newKey) => {
    if (Array.isArray(obj)) {
      console.log('Array:  ' + obj)
      for (let i = 0; i < obj.length; i++) {
        replaceAllObjKeys(obj[i], newKey)
      }
    } else if (typeof obj === 'object') {
      for (const key in obj) {
        console.log('Object:  ' + obj)
        obj[newKey] = obj[key]
        if (key !== newKey) {
          delete obj[key]
        }
        replaceAllObjKeys(obj[newKey], newKey)
      }
    }

    return obj
  }

  const onSubmit = (data) => {
    const startTime = combineHMSInputs(
      data.startTimeHour,
      data.startTimeMinute,
      data.startTimeSecond
    )

    const endTime = combineHMSInputs(
      data.endTimeHour,
      data.endTimeMinute,
      data.endTimeSecond
    )
    const words_to_return = []
    data.words.forEach((element) => {
      words_to_return.push({ word: element.label, id: element.value })
    })
    const dataToSubmit = {
      track: { ...data, start_time: startTime, end_time: endTime },
      // words: replaceAllObjKeys(data.words, 'word'),
      // words: data.words.map((s) => {
      //   if (s.hasOwnProperty('label')) {
      //     s.word = s.label
      //     delete s.label
      //   }
      //   return s
      // }),
      words: words_to_return,
      //words: data.words,
      tags: [],
      producers: [],
      beats: [],
      artist: [],

      // tags: replaceAllObjKeys(data.tags, 'tag'),
      // producers: replaceAllObjKeys(data.producers, 'producer'),
      // beats: replaceAllObjKeys(data.beats, 'beat'),
      // artist: replaceAllObjKeys(data.artits, 'artist'),
    }
    console.log(
      'Creating brand new track! ' + console.log(JSON.stringify(data))
    )
    axios.post('http://127.0.0.1:9000/tracks/', dataToSubmit)
  }

  return (
    <>
      <h1>Create New Track</h1>
      <TrackForm track={blankTrack} source={data} onSubmit={onSubmit} />
    </>
  )
}
