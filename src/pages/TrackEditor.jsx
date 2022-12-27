
import { Outlet } from 'react-router-dom';
import Track  from "../pages/Track"
import Tracks  from "../pages/Tracks"

 const TrackEditor = () => {
 
  return ( 
    <>
   
    <h1>Track Editor</h1>
        <div className="container">
          <div className="row">
            <div className="left-pane col">
                <Tracks />
            </div>
            <div className="right-pane col"> 
            <Outlet >
                <Track />
                </Outlet>
            </div>
            
            
          </div>            
      <h3>After Outlet</h3>

        </div>
        </>
    )
  };
    
  export default TrackEditor;
  