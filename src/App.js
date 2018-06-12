import React, { Component } from 'react';
import { injectGlobal, ThemePovider } from 'styled-components'

import normalize from './styled-components/normalize'
import globalStyles from './styled-components/global'

injectGlobal`
  ${normalize}
  ${globalStyles}
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Pet Sounds</h1>
      </div>
    );
  }
}

export default App;
