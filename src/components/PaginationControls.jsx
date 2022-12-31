export default function PaginationControls({ table }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          {/* className="flex items-center gap-2"> */}
          <button
            className="btn btn-secondary"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'First'}
          </button>
        </li>
        <button
          className="btn btn-secondary"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'Previous'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'Next'}
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'Last'}
        </button>
      </ul>
    </nav>
  )
}
