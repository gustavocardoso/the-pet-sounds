import React, { Component } from 'react'

import { Screen, Title } from '../../styled-components/global'
import { StartButton } from './style'

class Intro extends Component {
  constructor (props) {
    super(props)
    document.addEventListener('keydown', this.handleKeyDown)
  }

  render () {
    return (
      <Screen className='intro-container'>
        <Title intro>The Pet Sounds</Title>
        <StartButton href='/animals'>[ Press here or hit <b>space</b> ]</StartButton>
      </Screen>
    )
  }

  handleKeyDown (e) {
    console.log(e)
    console.log('Uepa')
  }
}

export default Intro
