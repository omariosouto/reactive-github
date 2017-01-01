'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => {
  return (
    <div className='user-info'>
      <img className='avatar' src={userinfo.photo} alt='' />
      <h1 className='username' >
        <a href={`https://github.com/${userinfo.login}`} target='_blank'>{userinfo.username}</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>

    </div>
  )
}

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number,
    following: PropTypes.number
  })
}

export default UserInfo
