'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Mario Souto',
        login: 'soutomario',
        photo: 'https://avatars.githubusercontent.com/u/13791385?v=3',
        repos: 20,
        followers: 23,
        following: 17
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Stars',
        link: '#'
      }]
    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
