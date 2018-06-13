import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1) rotate(-2.8deg);
  }

  50% {
    transform: scale3d(1.15, 1.15, 1.15) rotate(-2.8deg);
  }

  to {
    transform: scale3d(1, 1, 1) rotate(-2.8deg);
  }
`

export const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  line-height: .9;
  color: #F5BB00;
  text-shadow: 5px 0 5px rgba(0, 0, 0, 0.4);
  animation: ${pulse} 5s ease infinite;

  @media (min-width: 900px) {
    font-size: 6em;
  }
`

export const StartButton = styled.button`
  display: inline-block;
  font-size: 1em;
  color: #222;
  background: rgba(0, 0, 0, 0.2);
  border: 0;
  border-radius: .4em;
  padding: 1em;
  margin-top: 3em;
  cursor: pointer;
  transition: all .2s ease-out;
  transform: rotate(-1.8deg);

  &:hover {
    color: #fafafa;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, .3);
  }
`
