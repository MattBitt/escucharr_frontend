import { useFetchData } from '@/hooks/useFetchApi'
import { DataTable } from '@/components/DataTable/DataTable'
import { msToTime } from '@/utils/TimeUtils'

import { EditButton } from '../../../components/DataTable/EditButton'
import { DeleteButton } from '../../../components/DataTable/DeleteButton'

export const SourcesPage = () => {
  const { data, error, loading } = useFetchData('sources')
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      name: 'video_title',
      label: 'Video Title',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'collection_name',
      label: 'Collection Name',
      options: {
        filter: false,
        sort: true,
        searchable: true,
      },
    },
    {
      name: 'duration',
      label: 'Duration',
      options: {
        filter: false,
        sort: true,
        searchable: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return msToTime({ value })
        },
      },
    },
    {
      name: 'created',
      label: 'Created',
      options: {
        filter: false,
        sort: true,
        searchable: false,
      },
    },
    {
      name: 'album.album_name',
      label: 'Album Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'id',
      label: 'Actions',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <EditButton url={value} />
              <DeleteButton url={value} />
            </>
          )
        },
      },
    },
  ]
  const options = {
    rowsPerPage: 20,
    rowsPerPageOptions: [20, 100],
    filterType: 'dropdown',
    enableNestedDataAccess: '.', // allows nested data separated by "." (see column names and the data structure above)
  }

  return (
    <div>
      {loading && <div>Loading</div>}
      {/* {error && <div>Error!!!</div>} - not really sure how to use this.  may be way off */}
      {!loading && (
        <div>
          <h2>Source Listing</h2>
          <DataTable
            title="Source Table"
            columns={columns}
            data={data}
            options={options}
          />
        </div>
      )}
    </div>
  )
}
