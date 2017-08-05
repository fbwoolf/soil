import axios from 'axios'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_SOILS'
const CREATE = 'CREATE_SOIL'
const REMOVE = 'REMOVE_SOIL'
const UPDATE = 'UPDATE_SOIL'

/* ------------   ACTION CREATORS     ------------------ */

const init = soils => ({ type: INITIALIZE, soils })
const create = soil => ({ type: CREATE, soil })
const remove = id => ({ type: REMOVE, id })
const update = soil => ({ type: UPDATE, soil })

/* ------------       REDUCER     ------------------ */

export default function reducer (soils = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.soils

    case CREATE:
      return [action.soil, ...soils]

    case REMOVE:
      return soils.filter(soil => soil.id !== action.id)

    case UPDATE:
      return soils.map(soil => (
        action.soil.id === soil.id ? action.soil : soil
      ))

    default:
      return soils
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchSoils = () => dispatch => {
  axios.get('/api/soils')
    .then(res => dispatch(init(res.data)))
}

export const fetchSoil = id => dispatch => {
  axios.get(`/api/soils/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching soil unsuccesful', err))
}

// optimistic
export const removeSoil = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/soils/${id}`)
    .catch(err => console.error(`Removing soil: ${id} unsuccesful`, err))
}

export const addSoil = soil => dispatch => {
  axios.post('/api/soils', soil)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating soil: ${soil} unsuccesful`, err))
}

export const updateSoil = (id, soil) => dispatch => {
  axios.put(`/api/soils/${id}`, soil)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating soil: ${soil} unsuccesful`, err))
}
