import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Plant from './Plant'
import Button from '../Navigation/Button'
import { fetchPlant, updatePlant } from '../../store/plants'

/* -----------------    COMPONENT     ------------------ */

class PlantContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      moisture: 0,
      status: '',
      speciesId: 0
    }
    this.renderPlantDetail = this.renderPlantDetail.bind(this)
  }

  componentDidMount () {
    this.props.fetchPlantData()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchPlantData()
    }
    this.setState({plant: newProps.plant})
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Plant>
        {
          isLoggedIn && this.renderPlantDetail()
        }
      </Plant>
    )
  }

  renderPlantDetail () {
    const {plant} = this.state
    if (!plant) return <div />
    return (
      <div>
        <div className='plant-header'>
          <h1>{plant.name}</h1>
        </div>

        <div className='plant-info'>
          <h3>Moisture Level</h3>
        </div>

        <div className='plant-moisture'>
          <h1>{plant.moisture}</h1>
          <h1>{plant.status}</h1>
        </div>
        <div>
          <Button>Check Moisture</Button>
        </div>
      </div>

    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ species, plants, currentUser }, ownProps) => {
  const plant = plants.find(plant => plant.id === +ownProps.match.params.id)
  return {species, plant, currentUser, isLoggedIn: !!currentUser}
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchPlantData: (id) => {
      const plantId = ownProps.match.params.id
      dispatch(fetchPlant(plantId))
    },
    updatePlant
  }
}

export default connect(mapState, mapDispatch)(PlantContainer)
