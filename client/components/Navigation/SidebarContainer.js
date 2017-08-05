import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from '../../store'
import Sidebar from './Sidebar'

/* -----------------    COMPONENT     ------------------ */

class SidebarContainer extends Component {
  constructor (props) {
    super(props)
    this.renderLoggedIn = this.renderLoggedIn.bind(this)
    this.renderLoggedOut = this.renderLoggedOut.bind(this)
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Sidebar>
        <div className='sidebar-header'>
          <h1>Soil</h1>
        </div>
        {
          isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()
        }
      </Sidebar>
    )
  }

  renderLoggedIn () {
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
      </div>
    )
  }

  renderLoggedOut () {
    return (
      <div>
        <h1 />
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser.id,
    currentUser: state.currentUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(SidebarContainer)
