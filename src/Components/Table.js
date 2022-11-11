import React from 'react'
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table'
import { GlobalFilter } from './GlobalFilter'

function Table({ data, columns, perPage = 10 }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageOptions,
    nextPage,
    previousPage,
    state,
    state: { pageIndex },
  } = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: perPage } }, useGlobalFilter, useSortBy, usePagination)

  return (
    <div>
      <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter} />
      <div className="block border border-black rounded-[5px] overflow-x-scroll overflow-y-hidden my-[2%]">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="py-[10px] border-b whitespace-nowrap  text-left pl-[5px]" {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="text-left border-b  pl-[5px] py-[10px]" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination flex gap-x-2 justify-end">
        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          style={{
            backgroundColor: '#fff',
            pointerEvents: !canPreviousPage ? 'none' : 'unset',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            lineHeight: '1',
            border: '1px solid rgba(0,0,0,.1)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '4px',
            rowGap: '4px',
            maxWidth: 'calc(100% - 88px)',
          }}
        >
          {pageOptions.map((row, index) => (
            <div
              key={index}
              onClick={() => gotoPage(index)}
              style={{
                backgroundColor: '#fff',
                pointerEvents: index === pageIndex ? 'none' : 'unset',
                height: '36px',
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                lineHeight: 1,
                border: '1px solid rgba(0,0,0,.1)',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              <span>{index + 1}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
          style={{
            backgroundColor: '#fff',
            pointerEvents: !canNextPage ? 'none' : 'unset',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            lineHeight: '1',
            border: '1px solid rgba(0,0,0,.1)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  )
}

export default Table
