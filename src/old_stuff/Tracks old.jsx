import{ useMemo, useState, useEffect } from "react";
import axios from "axios"
import { Link } from 'react-router-dom';


const baseURL = "http://127.0.0.1:5000/api/v1/tracks"

export const COLUMNS = [
  {
      Header: 'ID',
      accessor: 'id',
  },
  {
      Header: 'Album Name',
      accessor: 'album_name',
  },
  // {
  //     Header: 'Artist Name',
  //     accessor: 'artist_name',
  // },
  {
      Header: 'Track Title',
      accessor: 'track_title',
  },
  
//   {
//     Header: 'start_time',
//     accessor: 'start_time',
// },
//   {
//       Header: 'end_time',
//       accessor: 'end_time',
//   },
//   {
//       Header: 'exists',
//       accessor: 'exists',
//   },
//   {
//       Header: 'file_path',
//       accessor: 'file_path',
//   },
//   {
//     Header: 'created_date',
//     accessor: 'created_date',
// },
{
  Header: 'Edit',
  accessor: 'track_url',
  Cell: ({ row }) => <Link to={row.original.track_url}>{row.original.track_title}</Link>
      
},


];

 const Tracks = () => {
  const [tracks, setTracks] = useState([]); 
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTracks(response.data);
    })
  }, [] );
  

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tracks, [tracks]);
  
  return ( 
      <>
            <h1>This is where the data table belongs</h1>
            {/* <DataTable columns={columns} data={data} /> */}
      </>
    
    )
  };
    
  export default Tracks;
  