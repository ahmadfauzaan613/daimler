import React from 'react'
import Table from '../Components/Table'

function AdminPage() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  )
  const column = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    []
  )
  return (
    <div className="bg-[#f2f2f2] w-full pt-[2%] pb-[5%] px-[2%] h-[98.8vh]">
      <div className="bg-white rounded-[5px] h-full">
        <p className="font-bold text-[24px] px-8 py-[1%]">Ranking Table</p>
        <div className="mx-[2%]">
          <Table columns={column} data={data} perPage={12} />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
