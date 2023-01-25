import { useFetchData } from '@/hooks/useFetchApi'
import { DataTable } from '@/components/DataTable/DataTable'
import { msToTime } from '@/utils/TimeUtils'
import { EditButton } from '@/components/DataTable/EditButton'
import { DeleteButton } from '@/components/DataTable/DeleteButton'

export const TracksPage = () => {
  const { data, error, loading } = useFetchData('tracks')

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
      name: 'track_title',
      label: 'Track Title',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'start_time',
      label: 'Start Time',
      options: {
        filter: false,
        sort: false,
        searchable: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return msToTime({ value })
        },
      },
    },
    {
      name: 'end_time',
      label: 'End Time',
      options: {
        filter: false,
        sort: false,
        searchable: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return msToTime({ value })
        },
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
      {error && <div>Error!!!</div>}
      {!loading && (
        <div>
          <DataTable
            title="Track Table"
            columns={columns}
            data={data}
            options={options}
          />
        </div>
      )}
    </div>
  )
}
// export const TracksPage = () => {
//   return <div>Testing</div>
// }
