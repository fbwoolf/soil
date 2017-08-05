import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Sidebar = styled.section`
  {
    background: ${props => props.theme.darkgrey};
    color: ${props => props.theme.white};
    width: 300px;
    height: 100%;
    z-index: 2;

    .sidebar-header {
      margin: 0;
      height: 60px;
      color: ${props => props.theme.green};
      border-bottom: 1px solid ${props => props.theme.lightgrey};
    }

    h1 {
      font-weight: normal;
      display: flex;
      align-items: center;
      padding: 16px;
      margin: 0;
    }

    h5 {
      font-weight: normal;
      text-transform: uppercase;
      margin-left: 16px;
    }
  }
`
export default Sidebar
