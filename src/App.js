import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Intro from './components/Intro'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={Intro} />
    </Switch>
  </div>
)

export default App
