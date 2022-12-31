import { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from '../components/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

const TracksPage = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL
  const apiPath = import.meta.env.VITE_API_PATH
  const [tracks, setTracks] = useState([])
  // const [loading, setLoading] = useState(false);
  const getTrackData = async () => {
    try {
      const data = await axios.get(apiUrl + apiPath + '/tracks')
      setTracks(data.data)
    } catch (e) {
      // console.error(e)
    }
  }
  useEffect(() => {
    getTrackData()
  }, [])

  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('track_title', {
      header: () => 'Track Title',
      // cell: (info) => <Link to={info.row.id}>{info.getValue()}</Link>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('track_number', {
      header: () => 'Track Number',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('album_name', {
      header: () => 'Album Name',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: 'track_actions',
      cell: (props) => (
        <>
          {/* <p>{JSON.stringify(row)}</p> */}
          <span>
            <Link to={props.row.original.id}>{'Edit'}</Link>
          </span>
        </>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (props) => (
        <>
          <span>
            <Link to={props.row.original.id + '/delete'}>{'Delete'}</Link>
          </span>
        </>
      ),
    }),
  ]

  return (
    <div>
      <h1>This is where the data table belongs</h1>
      <DataTable data={tracks} columns={columns} />
    </div>
  )
}

export default TracksPage
