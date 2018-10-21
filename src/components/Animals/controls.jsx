import React, { Component } from 'react'
import propTypes from 'prop-types'

import { Controls, ControlButton, PlayButton, Icon, ButtonText } from './style'

class ControlPanel extends Component {
  constructor (props) {
    super(props)

    this.handlePlay = this.handlePlay.bind(this)
    this.handleShuffle = this.handleShuffle.bind(this)
  }

  handlePlay () {
    this.props.playSound()
  }

  handleShuffle () {
    this.props.shuffle()
  }

  render () {
    return (
      <Controls>
        <ControlButton>
          <PlayButton onClick={this.handlePlay} disabled={!this.props.isAudioLoaded}>
            <Icon className='icon-play' />
          </PlayButton>
          <ButtonText>Play</ButtonText>
        </ControlButton>

        <ControlButton>
          <PlayButton onClick={this.handleShuffle} disabled={this.props.isShuffling}>
            <Icon className='icon-refresh' />
          </PlayButton>
          <ButtonText>Shuffle</ButtonText>
        </ControlButton>
      </Controls>
    )
  }
}

ControlPanel.propTypes = {
  playSound: propTypes.func.isRequired,
  shuffle: propTypes.func.isRequired,
  isAudioLoaded: propTypes.bool.isRequired,
  isShuffling: propTypes.bool.isRequired
}

export default ControlPanel
