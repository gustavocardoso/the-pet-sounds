import styled from 'styled-components'

export const Animal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ThumbBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 175px;
  background-color: var(--background-thumb-box);
  background-size: 109px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 25%;
  border: 5px solid #ccc;
  box-shadow: 0 -5px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
`

export const Display = styled.h2`
  font-size: 4em;
  font-weight: 900;
  text-align: center;
  text-shadow:
    3px 3px 0 rgba(0, 0, 0, 0.5),
    -1px -1px 0 rgba(0, 0, 0, 0.7),  
    1px -1px 0 rgba(0, 0, 0, 0.7),
    -1px 1px 0 rgba(0, 0, 0, 0.7),
    1px 1px 0 rgba(0, 0, 0, 0.7);
  color: var(--title-display);
`

export const Controls = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ControlButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const BasicButton = styled.button`
  background: var(--background-button);
  border-radius: 50%;
  border: 0;
  margin: 0 1em;
  cursor: pointer;

  &.disabled {
    opacity: .5;
  }

  &:hover {
    background: #000;
  }

  &:active {
    background: #BF3100;
  }
`

export const PlayButton = styled(BasicButton)`
  color: #ccc;
  padding: 1em;
`

export const Icon = styled.span`
  font-size: 5em;
`

export const ButtonText = styled.span`
  font-size: .8em;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  margin-top: .4em;
`
