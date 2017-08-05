import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import User from './User'
import PlantItem from '../Plant/PlantItem'

/* -----------------    COMPONENT     ------------------ */

const UserDetail = (props) => {
  const { user, plants } = props

  return (
    <User>
      <ul>
        <li>
          {
                plants
                  .filter(plant => plant.userId === user.id)
                  .map(plant => <PlantItem key={plant.id} plant={plant} />)
              }
        </li>
      </ul>
    </User>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ users, plants }, ownProps) => {
  const paramId = Number(ownProps.match.params.id)
  return {
    user: _.find(users, user => user.id === userId),
    plants
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(UserDetail)
