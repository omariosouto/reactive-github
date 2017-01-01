'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => {
  return (
    <div className='search' >
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
        disabled={isDisabled}
        onKeyUp={handleSearch}
        onChange={(e) => {
          console.log('Change:', e.target.value)
        }}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
