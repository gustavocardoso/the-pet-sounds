import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// import registerServiceWorker from './registerServiceWorker'

import { GlobalStyle } from './styled-components/global'

ReactDOM.render(
  <Router>
    <div>
      <GlobalStyle />
      <App />
    </div>
  </Router>
  , document.getElementById('root'))
// registerServiceWorker()
