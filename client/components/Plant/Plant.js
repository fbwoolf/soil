import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Plant = styled.section`
  {
    background: ${props => props.theme.medgrey};
    color: ${props => props.theme.white};
    width: 500px;
    height: 500px;
    margin-top: 120px;
    margin-left: 60px;
    z-index: 2;

    .plant-header {
      margin: 0;
      height: 60px;
      color: ${props => props.theme.white};
      border-bottom: 1px solid ${props => props.theme.green};

      h1 {
        font-weight: normal;
        display: flex;
        padding: 16px;
        margin: 0;
      }
    }

    .plant-info {
      margin: 0;
      color: ${props => props.theme.lightgrey};

      h3 {
        font-weight: normal;
        display: flex;
        padding: 16px;
        margin: 0;
      }
    }

    .plant-moisture {
      margin: 0;
      color: ${props => props.theme.green};

      h1 {
        font-size: 100px;
        font-weight: normal;
        display: flex;
        padding-left: 16px;
        margin: 0;
      }
    }
  }
`
export default Plant
