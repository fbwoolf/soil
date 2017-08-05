import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import currentUser from './currentUser'
import users from './users'
import species from './species'
import soils from './soils'
import plants from './plants'

const reducer = combineReducers({currentUser, users, species, soils, plants})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './currentUser'
export * from './users'
export * from './species'
export * from './soils'
export * from './plants'
