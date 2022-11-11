import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter, margin }) {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 300)

  return (
    <div className="flex justify-end">
      <input
        className="w-[20vw]   p-[6px] outline-none border rounded-[5px] border-black"
        placeholder="Search"
        spellCheck={false}
        autoComplete="off"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
