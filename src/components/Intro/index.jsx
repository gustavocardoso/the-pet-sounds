import React from 'react'

import { Screen, Title } from '../../styled-components/global'
import { StartButton } from './style'

const Intro = () => (
  <Screen className='intro-container'>
    <Title intro>The Pet Sounds</Title>
    <StartButton href='/animals'>[ Press here or hit <b>space</b> ]</StartButton>
  </Screen>
)

export default Intro
