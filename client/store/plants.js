import axios from 'axios'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_PLANTS'
const CREATE = 'CREATE_PLANT'
const REMOVE = 'REMOVE_PLANT'
const UPDATE = 'UPDATE_PLANT'

/* ------------   ACTION CREATORS     ------------------ */

const init = plants => ({ type: INITIALIZE, plants })
const create = plant => ({ type: CREATE, plant })
const remove = id => ({ type: REMOVE, id })
const update = plant => ({ type: UPDATE, plant })

/* ------------       REDUCER     ------------------ */

export default function reducer (plants = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.plants

    case CREATE:
      return [action.plant, ...plants]

    case REMOVE:
      return plants.filter(plant => plant.id !== action.id)

    case UPDATE:
      return plants.map(plant => (
        action.plant.id === plant.id ? action.plant : plant
      ))

    default:
      return plants
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchPlants = () => dispatch => {
  axios.get('/api/plants')
    .then(res => dispatch(init(res.data)))
}

export const fetchPlant = id => dispatch => {
  axios.get(`/api/plants/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching plant unsuccesful', err))
}

// optimistic
export const removeplant = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/plants/${id}`)
    .catch(err => console.error(`Removing plant: ${id} unsuccesful`, err))
}

export const addPlant = plant => dispatch => {
  axios.post('/api/plants', plant)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating plant: ${plant} unsuccesful`, err))
}

export const updatePlant = (id, plant) => dispatch => {
  axios.put(`/api/plants/${id}`, plant)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating plant: ${plant} unsuccesful`, err))
}
