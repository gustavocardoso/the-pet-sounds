import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Intro from './components/Intro'
import Animals from './components/Animals'

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={Intro} />
      <Route exact path='/animals' component={Animals} />
    </Switch>
  </div>
)

export default App
