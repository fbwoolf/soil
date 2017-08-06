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
      border-bottom: 1px solid ${props => props.theme.medgrey};
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

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        a {
          color: ${props => props.theme.white};
          text-decoration: none;
          padding-left: 16px;
          padding-top: 10px;
          display: list-item;
          height: 30px;

          &:hover, &:focus {
            color: ${props => props.theme.green};
            background: ${props => props.theme.darkgreyhover};
            text-decoration: none;
          }

          &.active {
            color: ${props => props.theme.green};
            background: ${props => props.theme.darkgreyhover};
          }
        }
      }
    }
  }
`
export default Sidebar
