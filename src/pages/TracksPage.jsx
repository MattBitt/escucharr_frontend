import { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from '../components/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import EditButton from '../components/EditButton'
import DeleteButton from '../components/DeleteButton'
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
      width: 1000,
    }),
    columnHelper.accessor('track_title', {
      id: 'track_title2',
      header: () => 'Track Title #2',
      // cell: (info) => <Link to={info.row.id}>{info.getValue()}</Link>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 1000,
    }),
    columnHelper.accessor('album_name', {
      header: () => 'album_name',
      // cell: (info) => <Link to={info.row.id}>{info.getValue()}</Link>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 10,
    }),
    columnHelper.accessor('artist_name', {
      header: () => 'artist_name',
      // cell: (info) => <Link to={info.row.id}>{info.getValue()}</Link>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 10,
    }),
    columnHelper.accessor('created_date', {
      header: () => 'created_date',
      // cell: (info) => <Link to={info.row.id}>{info.getValue()}</Link>,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 10,
    }),
    columnHelper.accessor('end_time', {
      header: () => 'end_time',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 500,
    }),
    columnHelper.accessor('start_time', {
      header: () => 'start_time',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
      width: 500,
    }),
    columnHelper.display({
      id: 'track_action_edit',
      cell: (props) => (
        <>
          <Link to={props.row.original.id}>
            <EditButton />
          </Link>
        </>
      ),
    }),
    columnHelper.display({
      id: 'track_action_delete',
      cell: (props) => (
        <>
          <Link to={props.row.original.id + '/delete'}>
            <DeleteButton />
          </Link>
        </>
      ),
    }),
  ]

  return (
    <div>
      <h1>Tracks</h1>
      <DataTable data={tracks} columns={columns} />
    </div>
  )
}

export default TracksPage
