import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../../store'
import Auth from './Auth'
import Button from '../Navigation/Button'

/**
 * COMPONENT
 */
const AuthContainer = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <Auth>
      <div className='auth-header'>
        <h1>{name}</h1>
      </div>
      <form onSubmit={handleSubmit} name={name}>
        {
          (name === 'signup') &&
          <div>
            <input name='name' type='text' />
          </div>
        }
        <div>
          <input name='email' type='text' />
        </div>
        <div>
          <input name='password' type='password' />
        </div>
        <div>
          <Button type='submit'>{displayName}</Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href='/auth/google'>{displayName} with Google</a>
    </Auth>
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
    name: 'Login',
    displayName: 'Login',
    error: state.currentUser.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'Signup',
    displayName: 'Sign Up',
    error: state.currentUser.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      let name = null
      if (formName === 'signup') name = evt.target.name.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(name, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthContainer)
export const Signup = connect(mapSignup, mapDispatch)(AuthContainer)

/**
 * PROP TYPES
 */
AuthContainer.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
