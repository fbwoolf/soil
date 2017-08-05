import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Auth = styled.section`
  {
    background: ${props => props.theme.lightgrey};
    color: ${props => props.theme.white};
    width: 500px;
    height: 500px;
    margin-top: 120px;
    margin-left: 60px;
    z-index: 2;
    text-align: center;

    .auth-header {
      margin: 0;
      height: 60px;
      color: ${props => props.theme.white};
      border-bottom: 1px solid ${props => props.theme.lightgrey};

      h1 {
        font-weight: normal;
        display: flex;
        padding: 16px;
        margin: 0;
      }
    }

    form {
      text-align: center;
    }

    input {
      width: 80%;
      height: 20px;
      padding: 12px 20px;
      border: none;
      font-size: 1rem;
      color: ${props => props.theme.white};
      background: ${props => props.theme.lightgrey};
      border-bottom: 2px solid ${props => props.theme.white};
    }

    input:focus {
      outline: none;
      background: ${props => props.theme.darkgrey};
    }

    a {
      font-size: 14px;
      color: ${props => props.theme.white};
    }
  }
`
export default Auth
