import React from 'react'

const SearchBar = ({ value, onChange , placeholder}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 p-2 border rounded w-full"
    />
  )
}

export default SearchBar
