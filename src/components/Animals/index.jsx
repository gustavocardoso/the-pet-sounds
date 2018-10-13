import React, { Component } from 'react'

import { Screen, Title } from '../../styled-components/global'
import { Animal, ThumbBox, Display } from './style'

import ControlPanel from './controls'

class Animals extends Component {
  render () {
    return (
      <Screen main>
        <Title>The Pet Sounds</Title>

        <Animal>
          <ThumbBox>
            <p className='instructions'>
              Press shuffle button to <span>start</span>
            </p>
          </ThumbBox>

          <Display>Welcome</Display>
        </Animal>

        <ControlPanel />
      </Screen>
    )
  }
}

export default Animals
