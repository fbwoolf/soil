import React from 'react'
import { connect } from 'react-redux'
import User from './User'

/* -----------------    COMPONENT     ------------------ */

const UserDetail = (props) => {
  return (
    <User />
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = function (state) {
  return {
    currentUser: state.currentUser,
    plants: state.plants
  }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserDetail)
