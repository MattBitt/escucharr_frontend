import { useState, useEffect } from 'react'
import axios from 'axios'
// import TracksTable from '../components/TracksTable'
// import * as React from 'react'
import EditButton from '../components/EditButton'
import DeleteButton from '../components/DeleteButton'

import DataTable from '../components/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

const SourcesPage = () => {
  const apiUrl = import.meta.env.VITE_SERVER_URL
  const apiPath = import.meta.env.VITE_API_PATH
  const [sources, setSources] = useState([])
  // const [loading, setLoading] = useState(false);
  const getSourceData = async () => {
    try {
      const data = await axios.get(apiUrl + apiPath + '/sources')
      setSources(data.data)
    } catch (e) {
      // console.error(e)
    }
  }
  useEffect(() => {
    getSourceData()
  }, [])

  const columnHelper = createColumnHelper()

  const columns = [
    columnHelper.accessor('video_title', {
      header: () => 'Video Title',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('video_type', {
      header: () => 'Video Type',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('album_name', {
      header: () => 'Album Name',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.display({
      id: 'source_action_edit',
      cell: (props) => (
        <>
          <Link to={props.row.original.id}>
            <EditButton />
          </Link>
        </>
      ),
    }),
    columnHelper.display({
      id: 'source_action_delete',
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
      <h1>Sources</h1>
      <DataTable data={sources} columns={columns} />
    </div>
  )
}

export default SourcesPage
