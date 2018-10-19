import styled, { createGlobalStyle, keyframes } from 'styled-components'

import normalize from './normalize'
import icomoon from './icomoon'
import variables from './config'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${icomoon}

  ${variables}

  body {
    font: normal normal normal 16px/1.5 var(--font-main);
    background: var(--background-image-main) var(--background-main);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  h1 {
    font-family: var(--font-styled);
  }
`

export const Screen = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.main ? 'space-around' : 'center'};
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 2em;
`

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.13, 1.13, 1.13);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

export const Title = styled.h1`
  font-size: ${props => props.intro ? '5em' : '3em'};
  text-align: center;
  line-height: .9;
  color: var(--title-main);
  text-shadow: 5px 0 5px rgba(0, 0, 0, 0.4);
  transform: ${props => props.intro ? 'rotate(-2.8deg)' : ''};
  animation: ${pulse} ${props => props.intro ? '5s' : '15s'} ease infinite;

  @media (min-width: 900px) {
    font-size: ${props => props.intro ? '6em' : '4em'};
  }
`
