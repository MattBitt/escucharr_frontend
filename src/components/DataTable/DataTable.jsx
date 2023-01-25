import MUIDataTable from 'mui-datatables'

export const DataTable = ({ title, columns, data, options }) => {
  return (
    <>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  )
}
