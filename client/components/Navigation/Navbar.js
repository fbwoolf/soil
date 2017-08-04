import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Navbar = styled.section`
  {
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.green};
    z-index: 1;
    border-bottom: 1px solid ${props => props.theme.green};
    display: flex;
    align-items: center;

    h3 {
      margin: 0 0 0 240px;
      flex: 1 1 auto;
    }

    form {
      margin: 0 10px 0 0;

      label {
        margin-right: 1rem;
      }
    }
  }
`
export default Navbar
