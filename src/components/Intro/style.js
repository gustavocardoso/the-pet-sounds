import styled from 'styled-components'

export const StartButton = styled.a`
  display: inline-block;
  font-size: 1em;
  text-decoration: none;
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
