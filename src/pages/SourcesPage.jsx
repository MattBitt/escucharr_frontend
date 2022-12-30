import { useState, useEffect } from 'react'
import axios from 'axios'
// import TracksTable from '../components/TracksTable'
// import * as React from 'react'

import DataTable from '../components/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

const SourcesPage = () => {
  const [sources, setSources] = useState([])
  // const [loading, setLoading] = useState(false);
  const getSourceData = async () => {
    try {
      const data = await axios.get('http://127.0.0.1:5000/api/v1/sources')
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
      id: 'source_actions',
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
      <DataTable data={sources} columns={columns} />
    </div>
  )
}

export default SourcesPage
