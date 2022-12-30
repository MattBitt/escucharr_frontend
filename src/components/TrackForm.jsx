import MyTextInputBox from './MyTextInputBox'
import MyMultiSelect from './MyMultiSelect'

function TrackForm({ track }) {
  return (
    <div>
      <h1>Track Form</h1>

      <MyTextInputBox id="id-input" name="ID" label="ID" value={track.id} />
      <MyTextInputBox
        id="arist-input"
        name="Artist"
        label="Artist"
        value={track.artist_name}
      />
      <MyTextInputBox
        id="track-num-input"
        name="Track Number"
        label="Track Number"
        value={track.track_number}
      />
      <MyTextInputBox
        id="title-input"
        name="Title"
        label="Title"
        value={track.track_title}
      />
      <MyTextInputBox
        id="album-input"
        name="Album"
        label="Album"
        value={track.album_name}
      />
      <MyTextInputBox
        id="path-input"
        name="Path"
        label="Path"
        value={track.file_path}
      />
      <MyTextInputBox
        id="start-time-input"
        name="Start Time"
        label="Start Time"
        value={track.start_time}
      />
      <MyTextInputBox
        id="end-time-input"
        name="End Time"
        label="End Time"
        value={track.end_time}
      />
      <MyMultiSelect name="words" />
      <MyMultiSelect name="tags" />
    </div>
  )
}

export default TrackForm
