import React from 'react'
import NavbarLandingPage from '../Components/NavbarLandingPage'
import Table from '../Components/Table'
import Fade from 'react-reveal/Fade'

function ListOfparticipant() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'ta',
        col4: 't22a',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'ta',
        col4: 't22a',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'ta',
        col4: 't22a',
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
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
      },
    ],
    []
  )
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavbarLandingPage />
      </div>
      <div className="bg-white overflow-y-scroll h-[87vh]  overflow-x-hidden">
        <div className="mx-auto container px-[5%]">
          <div className="flex items-center pt-[2%] justify-between">
            <p className="font-bold text-[24px]">List Of Participants</p>
          </div>
        </div>
        <div className="container mx-auto px-[5%] mt-[0%] mb-[2%]">
          <Table columns={column} data={data} />
        </div>
      </div>
    </>
  )
}

export default ListOfparticipant
