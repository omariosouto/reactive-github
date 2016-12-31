'use strict'

import React from 'react'

const UserInfo = () => {
  return (
    <div className='user-info'>
      <img className='avatar' src='https://avatars.githubusercontent.com/u/13791385?v=3' alt='' />
      <h1 className='username' >
        <a href='https://github.com/soutomario'>Mario Souto</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: 122</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 122</li>
      </ul>

    </div>
  )
}

export default UserInfo
