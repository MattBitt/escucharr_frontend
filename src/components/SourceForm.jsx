import React from "react";
import Form from 'react-bootstrap/Form';
import MyTextInputBox from './MyTextInputBox';
import axios from "axios"


export default function SourceForm( {sourceId}) {
  const [source, setSource] = React.useState(null)
  

  const sourceIdUrl=parseInt(sourceId)
  const baseURL = "http://127.0.0.1:5000/api/v1/source/" + sourceIdUrl;
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSource(response.data)
    })
  }, [] );
  
  if (!source) return "No Sources!";
  
  
  return (
    <div>
        <h1>Source Form</h1>
        <Form>
          <MyTextInputBox id="id-input" name="ID" value={source.id}/>
          <MyTextInputBox id="album-input" name="Album" value={source.album_name} />
          <MyTextInputBox id="audio-exists-input" name="Audio Exists" value={source.audio_exists}/>
          <MyTextInputBox id="created-date-input" name="Created Date" value={source.created_date}/>
          <MyTextInputBox id="description-file-input" name="Description File" value={source.description_file}/>
          <MyTextInputBox id="image-file-input" name="Image File" value={source.image_file}/>
          <MyTextInputBox id="audio-file-input" name="Audio File" value={source.audio_file}/>
          <MyTextInputBox id="video-file-input" name="Video File" value={source.video_file}/>
          <MyTextInputBox id="video-exists-input" name="Video Exists" value={source.video_exists} />
          <MyTextInputBox id="episode-number-input" name="Episode Number" value={source.episode_number}/>
          <MyTextInputBox id="ignore-input" name="Ignore" value={source.ignore}/>
          <MyTextInputBox id="upload-date" name="Upload Date" value={source.upload_date}/>
          <MyTextInputBox id="url-input" name="URL" value={source.url}/>
        </Form>

    </div>
  )
}
