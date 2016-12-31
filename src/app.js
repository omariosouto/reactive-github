'use strict'

import React, { Component } from 'react'
import Search from './components/search.js'
import UserInfo from './components/user-info/user-info.js'
import Actions from './components/actions/actions.js'
import Repos from './components/repos/repos.js'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos'
          title='Repositórios'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />

        <Repos
          className='starred'
          title='Favoritos'
          repos={[{
            name: 'Nome do repositório',
            link: '#'
          }]}
        />
      </div>
    )
  }
}

export default App
