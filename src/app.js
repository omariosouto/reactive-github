'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite o nome do usuário no GitHub' />
        </div>

        <div className='user-info'>
          <img className='avatar' src='https://avatars.githubusercontent.com/u/13791385?v=3' alt='' />
          <h1>
            <a href='https://github.com/soutomario'>Mario Souto</a>
          </h1>

          <ul className='repos-info'>
            <li>Repositórios: 122</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 122</li>
          </ul>

          <div className='actions'>
            <button>Ver Repositórios</button>
            <button>Ver Favoritos</button>
          </div>

          <div className='repos'>
            <h2>Repositórios</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>

          <div className='starred'>
            <h2>Favoritos</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
