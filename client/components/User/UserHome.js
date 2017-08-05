import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {currentUser} = props

  return (
    <div>
      <h3>Welcome, {currentUser.username}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapState)(UserHome)
