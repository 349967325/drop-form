import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { routerMaps } from '@/routers/index'

import './App.css'

class App extends Component {
  static propTypes = {}
  state = {}

  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact
              path='/'
              render={props => {
                return <Redirect to='/home' />
              }}
            />
            {
              routerMaps.map((route, i) => (
                <Route
                  name={route.name}
                  exact
                  key={i}
                  path={route.path}
                  render={props => (
                    <route.component {...props} />
                  )}
                />
              ))
            }
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
