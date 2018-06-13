import styled from 'styled-components'

export const globalStyles = `
  body {
    font: normal normal normal 16px/1.5 'Open Sans', sans-serif;
    background: url('/assets/images/main-background.png') #8EA604;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  h1, h2, h3 {
    font-family: 'Henny Penny', cursive;
  }
`

export const Screen = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
