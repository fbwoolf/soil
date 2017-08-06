import React from 'react'
import { connect } from 'react-redux'
import PlantItem from './PlantItem'

function PlantList (props) {
  const { currentUser, plants } = props

  return (
    <ul>
      {
        plants
          .filter(plant => plant.userId === currentUser.id)
          .map(plant => <PlantItem key={plant.id} plant={plant} />)
      }
    </ul>
  )
}

const mapState = function (state) {
  return {
    currentUser: state.currentUser,
    plants: state.plants
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(PlantList)
