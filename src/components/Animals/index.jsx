import React, { Component } from 'react'

import { Screen, Title } from '../../styled-components/global'
import { Animal, ThumbBox, Display } from './style'

import ControlPanel from './controls'

import zoo from '../../data/zoo'

class Animals extends Component {
  constructor (props) {
    super(props)

    this.state = {
      zoo,
      isAudioLoaded: false,
      isShuffling: false
    }

    this.playSound = this.playSound.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  playSound () {
    this.setState({ isAudioLoaded: true })
    console.log('playing')
  }

  shuffle () {
    this.setState({ isShuffling: true })
    console.log('shuffle')
  }

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

        <ControlPanel
          playSound={this.playSound}
          shuffle={this.shuffle}
          isAudioLoaded={this.state.isAudioLoaded}
          isShuffling={this.state.isShuffling}
        />
      </Screen>
    )
  }
}

export default Animals
