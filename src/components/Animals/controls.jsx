import React from 'react'

import { Controls, ControlButton, PlayButton, Icon, ButtonText } from './style'

const ControlPanel = () => (
  <Controls>
    <ControlButton>
      <PlayButton><Icon className='icon-play' /></PlayButton>
      <ButtonText>Play</ButtonText>
    </ControlButton>
  </Controls>
)

export default ControlPanel
