import React from "react";
import { useTable, useFilters } from "react-table";

// utilities
// import { matchSorterFn } from "../utilities/sorting";

function DataTable(props) {
  // MEMOS
  const data = React.useMemo(() => props.data, [props.data]);
  const columns = React.useMemo(() => props.columns, [props.columns]);
  // const defaultColumn = React.useMemo(
  //   () => ({
  //     // Let's set up our default Filter UI
  //     Filter: ""
  //   }),
  //   []
  // );
  // const filterTypes = React.useMemo(
  //   () => ({
  //     rankedMatchSorter: matchSorterFn
  //   }),
  //   []
  // );

  // CONFIGURE useTable
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = useTable(
    {
      columns,
      data
      // defaultColumn,
      // filterTypes
    },
    // useFilters
  );

  // RENDERING
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // eslint-disable-next-line react/jsx-key
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // eslint-disable-next-line react/jsx-key
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                {/* Render the columns filter UI */}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line react/jsx-key
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                // eslint-disable-next-line react/jsx-key
                return <td {...cell.getCellProps()} >{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
