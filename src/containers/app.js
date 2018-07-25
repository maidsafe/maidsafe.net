import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import '../sass/main.sass';

const App = () => (
  <Router>
    <div className="root-b">
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
