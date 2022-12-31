import Form from 'react-bootstrap/Form'

import FloatingLabelTextBox from './FloatingLabelTextBox'

export default function SourceForm({ source }) {
  return (
    <div className="form-floating mt-3 mb-3">
      <h1>Source Form</h1>
      <Form>
        <FloatingLabelTextBox id="id-input" name="ID" value={source.id} />
        <FloatingLabelTextBox
          id="album-input"
          name="Album"
          value={source.album_name}
        />
        <FloatingLabelTextBox
          id="audio-exists-input"
          name="Audio Exists"
          value={source.audio_exists}
        />
        <FloatingLabelTextBox
          id="created-date-input"
          name="Created Date"
          value={source.created_date}
        />
        <FloatingLabelTextBox
          id="description-file-input"
          name="Description File"
          value={source.description_file}
        />
        <FloatingLabelTextBox
          id="image-file-input"
          name="Image File"
          value={source.image_file}
        />
        <FloatingLabelTextBox
          id="audio-file-input"
          name="Audio File"
          value={source.audio_file}
        />
        <FloatingLabelTextBox
          id="video-file-input"
          name="Video File"
          value={source.video_file}
        />
        <FloatingLabelTextBox
          id="video-exists-input"
          name="Video Exists"
          value={source.video_exists}
        />
        <FloatingLabelTextBox
          id="episode-number-input"
          name="Episode Number"
          value={source.episode_number}
        />
        <FloatingLabelTextBox
          id="ignore-input"
          name="Ignore"
          value={source.ignore}
        />
        <FloatingLabelTextBox
          id="upload-date"
          name="Upload Date"
          value={source.upload_date}
        />
        <FloatingLabelTextBox id="url-input" name="URL" value={source.url} />
        <button className="btn btn-success" type="Button">
          Save
        </button>
        <button className="btn btn-danger" type="Button">
          Cancel
        </button>
      </Form>
    </div>
  )
}
