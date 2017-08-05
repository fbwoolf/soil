import axios from 'axios'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_SPECIES'
const CREATE = 'CREATE_SPECIES'
const REMOVE = 'REMOVE_SPECIES'
const UPDATE = 'UPDATE_SPECIES'

/* ------------   ACTION CREATORS     ------------------ */

const init = species => ({ type: INITIALIZE, species })
const create = species => ({ type: CREATE, species })
const remove = id => ({ type: REMOVE, id })
const update = species => ({ type: UPDATE, species })

/* ------------       REDUCER     ------------------ */

export default function reducer (species = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.species

    case CREATE:
      return [action.species, ...species]

    case REMOVE:
      return species.filter(species => species.id !== action.id)

    case UPDATE:
      return species.map(species => (
        action.species.id === species.id ? action.species : species
      ))

    default:
      return species
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchSpecies = () => dispatch => {
  axios.get('/api/species')
    .then(res => dispatch(init(res.data)))
}

export const fetchOneSpecies = id => dispatch => {
  axios.get(`/api/species/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching species unsuccesful', err))
}

// optimistic
export const removeSpecies = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/species/${id}`)
    .catch(err => console.error(`Removing species: ${id} unsuccesful`, err))
}

export const addSpecies = species => dispatch => {
  axios.post('/api/species', species)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating species: ${species} unsuccesful`, err))
}

export const updateSpecies = (id, species) => dispatch => {
  axios.put(`/api/species/${id}`, species)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating species: ${species} unsuccesful`, err))
}
