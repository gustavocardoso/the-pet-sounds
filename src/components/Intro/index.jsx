import React from 'react'

import { Screen } from '../../styled-components/global'
import { Title, StartButton } from './style'

const Intro = () => (
  <Screen className='intro-container'>
    <Title>The Pet Sounds</Title>
    <StartButton>[ Press here or hit <b>space</b> ]</StartButton>
  </Screen>
)

export default Intro
