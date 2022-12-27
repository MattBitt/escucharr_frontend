import { Link, useParams } from 'react-router-dom';
import TrackForm from '../components/TrackForm'


export default function Track() {
  const { trackId } = useParams();
  
  return (
    <>
      <h2><Link to="/tracks">Close Editor</Link></h2>
      <TrackForm trackId={trackId} />

    </>
  );
};
    


