import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.green};
  color: ${props => props.theme.white};
  width: 85%;
  height: 40px;
  text-align: center;
  font-size: 1rem;
  margin: 20px 30px;
  border: none;
  border-radius: 3px;
`
export default Button
