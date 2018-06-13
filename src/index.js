import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import App from './App'

import registerServiceWorker from './registerServiceWorker'

import normalize from './styled-components/normalize'
import { globalStyles } from './styled-components/global'

injectGlobal`
  ${normalize}
  ${globalStyles}
`

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'))
registerServiceWorker()
