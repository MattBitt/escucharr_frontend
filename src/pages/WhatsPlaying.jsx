import axios from "axios"
import{ useState, useEffect } from "react";
import Track from "./Track";


const baseURL = "http://127.0.0.1:5000/api/v1/whatsplaying"

const WhatsPlaying = () => {
  const [data, setData] = useState([]); 
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    })
  }, [] );

  if (!(data[0])) return "No data!";
  if (data[0].library_type === "source") {
    return (
      <>
      <h1>Source Playing</h1>
      
      <h2>Video Title: {data[0].video_title}</h2>
      <h2>Current Title: {data[0].current_time}</h2>
      </>
    )
  }
  if (data[0].library_type === "track")
    return (
    <>
          <h1>Track Playing</h1>
          <h2>Track Title: {data[0].track_title}</h2>
          <h2>Current Time: {data[0].current_time}</h2>

    


  </>
    )
};
  
  export default WhatsPlaying;