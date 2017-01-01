'use strict'

import React, { PropTypes } from 'react'
import Search from './search.js'
import UserInfo from './user-info/user-info.js'
import Actions from './actions/actions.js'
import Repos from './repos/repos.js'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => {
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} isDisabled={isFetching} />
      { isFetching && <div>Carregando...</div> }
      { !!userinfo && <UserInfo userinfo={userinfo} />}
      { !!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      { !!repos.length &&
        <Repos
          className='repos'
          title='Repositórios'
          repos={repos}
        />
      }

      { !!starred.length &&
        <Repos
          className='starred'
          title='Favoritos'
          repos={starred}
        />
      }

    </div>

  )
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
