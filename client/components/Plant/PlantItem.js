import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/* -----------------    COMPONENT     ------------------ */

const PlantItem = (props) => {
  const {plant} = props

  return (
    <div>
      <li>
        <NavLink activeClassName='active' to={`/plants/${plant.id}`}>
          { plant.name }
        </NavLink>
      </li>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(PlantItem)
