import React, { Component } from 'react'

import DefaultDrag from './defaultDrag'
import FormitemDrag from './formitemDrag'

class Home extends Component {
  render () {
    return (
      <div>
        <div style={{ marginBottom: '24px' }}><DefaultDrag /></div>

        <div>
          <FormitemDrag />
        </div>
      </div>
    )
  }
}

export default Home
