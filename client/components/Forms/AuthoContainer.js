import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../../store'
import Autho from './Autho'
import Button from '../Navigation/Button'

/**
 * COMPONENT
 */
const AuthoContainer = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Autho>
      <div className='auth-header'>
        <h1>{displayName}</h1>
      </div>
      <form onSubmit={handleSubmit} name={name}>
        {
          (name === 'signup') &&
          <div>
            <input name='username' type='text' placeholder='Name' />
          </div>
        }
        <div>
          <input name='email' type='text' placeholder='Email' />
        </div>
        <div>
          <input name='password' type='password' placeholder='Password' />
        </div>
        <div>
          <Button type='submit'>{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href='/auth/google'>{displayName} with Google</a>
    </Autho>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.currentUser.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Signup',
    error: state.currentUser.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      let username = null
      if (formName === 'signup') username = evt.target.username.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(username, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthoContainer)
export const Signup = connect(mapSignup, mapDispatch)(AuthoContainer)

/**
 * PROP TYPES
 */
AuthoContainer.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
