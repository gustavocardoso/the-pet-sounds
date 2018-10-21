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
      isShuffling: false,
      animal: null
    }

    this.playSound = this.playSound.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.getRandomAnimal = this.getRandomAnimal.bind(this)
  }

  playSound () {
    this.setState({ isAudioLoaded: true })
    console.log('playing')
  }

  shuffle () {
    this.setState({ isShuffling: true })

    const randomAnimal = this.getRandomAnimal()

    if (randomAnimal) {
      this.setState({ animal: randomAnimal })
    }

    this.setState({ isShuffling: false })
  }

  getRandomAnimal () {
    const randomKey = Math.floor(Math.random() * this.state.zoo.length)
    return this.state.zoo[randomKey]
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
