'use strict'

import React, { PropTypes } from 'react'
import Search from './search.js'
import UserInfo from './user-info/user-info.js'
import Actions from './actions/actions.js'
import Repos from './repos/repos.js'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => {
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
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
  repos: PropTypes.array,
  starred: PropTypes.array
}

export default AppContent
