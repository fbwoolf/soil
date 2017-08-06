import React, { Component } from 'react'
import { connect } from 'react-redux'
import Plant from './Plant'

/* -----------------    COMPONENT     ------------------ */

const PlantDetail = (props) => {
  return (
    <Plant />
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(PlantDetail)
